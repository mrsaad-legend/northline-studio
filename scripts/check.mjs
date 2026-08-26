import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const textExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".svg", ".txt"]);
const secretPatterns = [
  /AKIA[0-9A-Z]{16}/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /(?:api[_-]?key|secret|password|token)\s*[:=]\s*["'][^"']{12,}["']/i
];

const projectFiles = walk(projectRoot).filter((path) => !path.includes(`${join(projectRoot, ".git")}`));
const textFiles = projectFiles.filter((path) => textExtensions.has(extname(path)));
const failures = [];

for (const filePath of textFiles) {
  const source = readFileSync(filePath, "utf8");
  const displayPath = relative(projectRoot, filePath);

  for (const pattern of secretPatterns) {
    if (pattern.test(source)) failures.push(`${displayPath}: possible hardcoded secret ${pattern}`);
  }
}

for (const filePath of projectFiles.filter((path) => extname(path) === ".js")) {
  const syntaxCheck = spawnSync(process.execPath, ["--check", filePath], { encoding: "utf8" });
  if (syntaxCheck.status !== 0) failures.push(`${relative(projectRoot, filePath)}: ${syntaxCheck.stderr.trim()}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${textFiles.length} text files and ${projectFiles.filter((path) => extname(path) === ".js").length} JavaScript files.`);
console.log("No obvious secrets or JavaScript syntax errors found.");

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const entry = join(directory, name);
    return statSync(entry).isDirectory() ? walk(entry) : [entry];
  });
}
