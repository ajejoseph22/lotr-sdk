## LOTR SDK Architectural decisions

This document describes the architectural decisions made in the LOTR SDK.

### 1. The Entrypoint
The SDK has an entrypoint in `src/app.ts`, which is a class `LOTR` that has a series of dependency classes (`Movie`, `Quote`, `Character`, `Book`, `Chapter`).
The constructor of the `LOTR` class takes an optional `accessToken` argument, which is used to authenticate for some API operations. This key was made optional intentionally to 
allow the users interface with the `Books` API without having to provide a key. However, if they attempt to interface with the other APIs, they will be prompted to provide a key.
In the constructor of the `LOTR`, the HTTP client (in this case, axios) is initialized with the `accessToken`, and the dependency classes are instantiated with the HTTP client.

### 2. The dependency classes
Each of these dependency classes is exported from its own file in the `src/services` folder. These services make calls to [The One API](https://the-one-api.dev/) using the optionally-authorized HTTP client with which they were instantiated.
The dependency classes have a series of methods that make HTTP requests to the LOTR API for operations like listing and getting entities. Some classes also have methods that span two entities.
An example is the `getQuotesByCharacter` method in the `Quote` class, which makes a request to the API to get a list of quotes by a `Character`.
These dependency classes also support operations like pagination, sorting, and filtering.

### 3. Other decisions regarding code structure
The repository contains a `types` folder which contains all the types used across the SDK. It also contains a `utils` folder which contains reusable methods for pagination, filtering
and sorting, again, used across the dependency classes. Unit tests are written using Jest, and are located in the `__tests__` folder and maintain the same file structure as the `src` folder for consistency.
I have added scripts for linting and prettifying the code, and for running the tests in the `package.json` file. The `package.json` file also contains a `build` script that compiles the TypeScript code to JavaScript.