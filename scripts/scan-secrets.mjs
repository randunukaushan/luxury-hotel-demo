import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const tracked = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const patterns = [
  ["Private key", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ["Resend API key", /\bre_[A-Za-z0-9_-]{20,}\b/],
  ["OpenAI-style secret", /\bsk-[A-Za-z0-9_-]{20,}\b/],
  ["GitHub token", /\bgh[pousr]_[A-Za-z0-9]{20,}\b/],
  ["Public Sanity token", /NEXT_PUBLIC_[A-Z0-9_]*(?:TOKEN|SECRET)\s*=\s*\S+/],
];

const findings = [];

for (const file of tracked) {
  let content;
  try {
    content = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const [name, pattern] of patterns) {
    if (pattern.test(content)) findings.push(`${name}: ${file}`);
  }
}

if (findings.length) {
  console.error("Potential committed secrets found:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log("No known high-risk secret patterns found in tracked files.");
