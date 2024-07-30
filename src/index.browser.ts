let domainSet: Set<string>;

async function fetchDomainNames(): Promise<Set<string>> {
	if (!domainSet) {
		const URL =
			"https://raw.githubusercontent.com/rocktimsaikia/is-spam-email/main/domains.txt";
		const response = await fetch(URL);
		const data = await response.text();
		const domains = data.split(/\r?\n/).filter(Boolean);
		domainSet = new Set(domains);
	}
	return domainSet;
}

async function isSpamEmail(domain: string): Promise<boolean> {
	const spamDomainSet = await fetchDomainNames();
	return spamDomainSet.has(domain);
}

export default isSpamEmail;
