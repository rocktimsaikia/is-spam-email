# is-spam-email

Checks whether an email is spam or not.

> It just checks again a [JSON](./spam-domains.json) file, PRs are welcome for adding new or missing spam domains.

[![CI](https://github.com/rocktimsaikia/is-spam-email/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/is-spam-email/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/is-spam-email?color=bright)](https://npmjs.com/package/is-spam-email)

## Installtion

```sh
pnpm add is-spam-email
```

## Usage

```javascript
import isSpamEmail from 'is-spam-email';

isSpamEmail('foobar@10dk.email')
// => true
```

## API

### isSpamEmail(parameters)

A predicate to check whether an email is spam or not.

#### Parameters

##### 1.
> Type: `string` \
Email to check against.
