A simple and lightweight Javascript SDK for the [One API](https://the-one-api.dev/).

![Tests](https://github.com/ajejoseph22/joseph-aje-sdk/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/@ajejoseph22%2Flotr-sdk.svg)](https://badge.fury.io/js/@ajejoseph22%2Flotr-sdk)

## Installation

```sh
npm i @ajejoseph22/lotr-sdk
```

### Authentication

To use ALL the features of the LOTR SDK, you need to provide an `accessToken`. That token is available for free on the [One API](https://the-one-api.dev/sign-up) website once you sign up.
If you are accessing only the `Book` interface, you can skip this step.
However, if you intend to use this SDK to access the `Character`, `Movie`, `Quote` or `Chapter` interfaces, you will need to provide an `accessToken`.

### Quick Start

```js
import LOTR from '@ajejoseph22/lotr-sdk';

const client = new LOTR('<YOUR_ACCESS_TOKEN>');

client.character
  .list({
    limit: 10, // limit the number of responses to 10
  })
  .then((characters) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```

That's it!

## Usage

The SDK models the [One API](https://the-one-api.dev/documentation) and each property from the SDK matches a section in the API documentation.

### Examples

To list all books:

```js
import LOTR from '@ajejoseph22/lotr-sdk';

const client = new LOTR(); // accessToken not needed

client.book
  .list({
    limit: 10, // limit the number of responses to 10
  })
  .then((books) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```

To get a character:

```js
import LOTR from '@ajejoseph22/lotr-sdk';

const client = new LOTR('<YOUR_ACCESS_TOKEN>');

client.character
  .get('<character_id>')
  .then((character) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```

To get a quotes by a character, with sorting and filtering:

```js
import LOTR from '@ajejoseph22/lotr-sdk';

const client = new LOTR('<YOUR_ACCESS_TOKEN>');

client.quote
  .getQuotesByCharacter('<character_id>', {
    limit: 2,
    page: 2,
    sort: {
      character: 'asc',
    },
    filter: {
      excludes: {
        dialog: ["I didn't think it would end this way."],
      },
      propertyExists: 'character',
      isEqualTo: {
        movie: '5cd95395de30eff6ebccde5d',
      },
    },
  })
  .then((quotes) => {
    // handle data
  })
  .catch((e) => {
    // handle error
  });
```
