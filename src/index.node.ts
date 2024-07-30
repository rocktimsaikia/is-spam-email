import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

let domainSet: Set<string>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadDomainNames(): Promise<Set<string>> {
	if (!domainSet) {
		const filePath = path.join(__dirname, "../domains.txt");

		domainSet = new Set();

		const fileStream = fs.createReadStream(filePath);
		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity,
		});

		for await (const line of rl) {
			if (line.trim()) {
				domainSet.add(line.trim());
			}
		}
	}
	return domainSet;
}

async function isSpamEmail(domain: string): Promise<boolean> {
	const spamDomainSet = await loadDomainNames();
	return spamDomainSet.has(domain);
}

export default isSpamEmail;
