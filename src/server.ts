import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const faviconAssetRedirects = new Map([
  ["/favicon.svg", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/favicon.svg"],
  ["/favicon-96x96.png", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/favicon-96x96.png"],
  ["/favicon.ico", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/favicon.ico"],
  ["/apple-touch-icon.png", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/apple-touch-icon.png"],
  ["/web-app-manifest-192x192.png", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/web-app-manifest-192x192.png"],
  ["/web-app-manifest-512x512.png", "https://realfavicongenerator.net/files/43c55f8b-ab7f-488e-bc9e-4c4122a72b9d/web-app-manifest-512x512.png"],
]);

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function redirectFaviconAsset(request: Request): Response | undefined {
  const pathname = new URL(request.url).pathname;
  const target = faviconAssetRedirects.get(pathname);
  if (!target) return undefined;

  return Response.redirect(target, 302);
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const faviconRedirect = redirectFaviconAsset(request);
    if (faviconRedirect) return faviconRedirect;

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
