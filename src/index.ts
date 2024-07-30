import { isNode, isBrowser } from "browser-or-node";
import { extractDomainFromEmail } from "./util";

let isSpamEmail: (domain: string) => Promise<boolean>;

if (isNode) {
	import("./index.node").then((module) => {
		isSpamEmail = module.default;
	});
}

if (isBrowser) {
	import("./index.browser").then((module) => {
		isSpamEmail = module.default;
	});
}

export default async function (email: string): Promise<boolean> {
	const domain = extractDomainFromEmail(email);
	const isSpam = await isSpamEmail(domain);
	return isSpam;
}
