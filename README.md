## Developing

### About Sway Source Code

1. Sway code is under the `src` directory. The `src` directory contains the following files: `src/routes/(examples)` - The source code for the examples.
2. The terminal output is located in `src/routes/(examples)/+layout.svelte` file.
3. Run `yarn build:sway` to compile the Sway code you just added.

### About the Examples Order

1. Check the order in the `src/routes/(examples)/examples.json` file.
2. The `id` determines the sequence of the examples in the app.

### Running the project

Once you've run `yarn` start a development server:

```bash
yarn dev
# Use the Network option to view it on your phone

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Releasing

1. Test the app in dev mode.
2. Make sure to update the version in `package.json`.
3. Run `yarn build` which will build to the `docs` directory.
4. Run `yarn preview` to test the app in production mode.
