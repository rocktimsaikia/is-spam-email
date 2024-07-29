import fs from "fs";
import path from "path";

let spamDomainSet: Set<string> | undefined;

function loadSpamDomains(): Set<string> {
	if (!spamDomainSet) {
		const filePath = path.join(process.cwd(), "spam-domains.json");
		const data = fs.readFileSync(filePath, "utf-8");
		spamDomainSet = new Set(JSON.parse(data));
	}
	return spamDomainSet;
}

function extractDomainFromEmail(email: string) {
	const parts = email.split("@");
	if (parts.length !== 2) {
		throw new Error("Invalid email address");
	}
	return parts[1];
}

function isSpamEmail(email: string): boolean {
	const domain = extractDomainFromEmail(email);
	const spamDomainSet = loadSpamDomains();
	return spamDomainSet.has(domain);
}

export default isSpamEmail;
