# inlinemochatest
Inline Mocha tests template

## Intro
This project shows how you can put your Mocha unittests side-by-side in the files with the actual implementations. It basically boils down to prefixing any `describe` statement with `global.describe &&` to ensure it's skipped when the file is loaded outside of Mocha by `node`.

## Development
```sh
direnv allow
pnpm i
```

## Run tests
```
pnpm test
```
