import { expect, test } from "vitest";
import isSpamEmail from "../src/index";

test("Should validate non-spam and valid emails", async () => {
	expect(await isSpamEmail("foobar@gmail.com")).toBe(false);
	expect(await isSpamEmail("foobar@yahoo.com")).toBe(false);
	expect(await isSpamEmail("foobar@proton.me")).toBe(false);
});

test("Should validate spam emails", async () => {
	expect(await isSpamEmail("foobar@skiff.com")).toBe(true);
	expect(await isSpamEmail("foobar@10dk.email")).toBe(true);
	expect(await isSpamEmail("foobar@0w.ro")).toBe(true);
	expect(await isSpamEmail("foobar@zyte.site")).toBe(true);
});

test("Should throw on invalid emails", async () => {
	await expect(() => isSpamEmail("foo@bar@gmail.com")).rejects.toThrowError(
		/^Invalid email address$/,
	);
});
