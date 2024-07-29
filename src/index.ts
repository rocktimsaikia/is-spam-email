import spamDomainsJson from "../spam-domains.json";

let spamDomainSet: Set<string> | undefined;

function loadSpamDomains(): Set<string> {
	if (!spamDomainSet) {
		spamDomainSet = new Set(spamDomainsJson);
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
