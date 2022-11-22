# commitlint-config-conventional

This is an extension of the rules within @commitlint/config-conventional for
the purposes of overriding certain values as deemed necessary. Those rules
that this module is overriding are noted here:

- `body-max-line-length` Increased to 300 characters to allow for commit messages that would otherwise exceed the 100 character limit.

[![Release](https://img.shields.io/github/v/release/open-turo/commitlint-config-conventional)](https://github.com/open-turo/commitlint-config-conventional/releases/)
[![Tests pass/fail](https://img.shields.io/github/workflow/status/open-turo/commitlint-config-conventional/CI)](https://github.com/open-turo/commitlint-config-conventional/actions/)
[![License](https://img.shields.io/github/license/open-turo/commitlint-config-conventional)](./LICENSE)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/dwyl/esta/issues)
![CI](https://github.com/open-turo/commitlint-config-conventional/actions/workflows/release.yaml/badge.svg)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Join us!](https://img.shields.io/badge/Turo-Join%20us%21-593CFB.svg)](https://turo.com/jobs)

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
