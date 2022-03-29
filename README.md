# commitlint-config-conventional

This is an extension of the rules within @commitlint/config-conventional for
the purposes of overriding certain values as deemed necessary. Those rules
that this module is overriding are noted here:

- `body-max-line-length` Increased to 300 characters to allow for commit messages that would otherwise exceed the 100 character limit.

## Node.js based project installation

The following commands will install this module for your Node.js based project if you are using `npm` or `yarn`, via the project's `package.json` file.

### npm installation

```
npm install --include=dev @open-turo/commitlint-config-conventional
```

### yarn installation

```
yarn add @open-turo/commitlint-config-conventional -D
```

## Usage

To make use of this module, simply include it in your conventional `.commitlintrc.yaml` file, as depicted below:

```
extends:
  - "@open-turo/commitlint-config-conventional"
```
