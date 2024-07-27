import { expect, test } from "vitest";
import isSpamEmail from "../src/index";

test("Should validate non-spam and valid emails", () => {
	expect(isSpamEmail("foobar@gmail.com")).toBe(false);
	expect(isSpamEmail("foobar@yahoo.com")).toBe(false);
	expect(isSpamEmail("foobar@proton.me")).toBe(false);
});

test("Should validate spam emails", () => {
	expect(isSpamEmail("foobar@skiff.com")).toBe(true);
	expect(isSpamEmail("foobar@10dk.email")).toBe(true);
	expect(isSpamEmail("foobar@0w.ro")).toBe(true);
	expect(isSpamEmail("foobar@zyte.site")).toBe(true);
});

test("Should throw on invalid emails", () => {
	expect(() => isSpamEmail("foo@bar@gmail.com")).toThrowError(
		/^Invalid email address$/,
	);
});
