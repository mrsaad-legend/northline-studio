import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = normalize(join(fileURLToPath(new URL("..", import.meta.url))));
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

createServer((request, response) => {
  const requestedPath = new URL(request.url, `http://${request.headers.host}`).pathname;
  const normalizedPath = normalize(decodeURIComponent(requestedPath)).replace(/^([/\\])+/, "");
  let filePath = join(root, normalizedPath || "index.html");

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    filePath = join(root, "index.html");
  }

  if (statSync(filePath).isDirectory()) filePath = join(filePath, "index.html");

  response.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Northline Studio is running at http://localhost:${port}`);
});
