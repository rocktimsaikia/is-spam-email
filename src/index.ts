import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let spamDomainSet: Set<string> | undefined;

async function loadSpamDomains(): Promise<Set<string>> {
	if (!spamDomainSet) {
		const filePath = path.join(__dirname, "../domains.txt");

		spamDomainSet = new Set();

		const fileStream = fs.createReadStream(filePath);
		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity,
		});

		for await (const line of rl) {
			if (line.trim()) {
				spamDomainSet.add(line.trim());
			}
		}
	}
	return spamDomainSet;
}

function extractDomainFromEmail(email: string): string {
	const parts = email.split("@");
	if (parts.length !== 2) {
		throw new Error("Invalid email address");
	}
	return parts[1];
}

async function isSpamEmail(email: string): Promise<boolean> {
	const domain = extractDomainFromEmail(email);
	const spamDomainSet = await loadSpamDomains();
	return spamDomainSet.has(domain);
}

export default isSpamEmail;
