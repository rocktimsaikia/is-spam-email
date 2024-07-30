# is-spam-email

Checks whether an email is spam or not.

> Designed to work exclusively with the NodeJS ESM ecosystem. \
> Not supported in browsers (WIP) or the CJS ecosystem.

[![CI](https://github.com/rocktimsaikia/is-spam-email/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/is-spam-email/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/is-spam-email?color=bright)](https://npmjs.com/package/is-spam-email)

## Installtion

```sh
npm i is-spam-email
```

## Usage

```javascript
import isSpamEmail from "is-spam-email";

isSpamEmail("foobar@10dk.email");
// => true
```

## API

### isSpamEmail(email)

A predicate to check whether an email is spam or not.

##### 1. `email`

> Type: `string` \
> Email to check against.

## Note

It just checks against a [.txt](./domains.txt) record of spam domains in an optimised way. \
If any other spam domains are missing, feel free to open a PR. \
The .txt file can be used wherever.
