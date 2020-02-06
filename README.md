#### Features:

`Google analytics = usage analysis`

`Prettier - formatter`

`Browserlist - browser support`

`babel - new javascript featuers`

`webpack - bundler`

`storybook - test/isolation`

`Linting (husky, lint-staged):`

- pre commit checks
  - lint
  - prettier
  - eslint

#### Start development

```sh
call yarn icons-build
call yarn figma-generate
call yarn build
call yarn start
```

#### Deploy / Continuours Integration

Husk is a pre commit linter

Add the fllowing enviroment variables to Gitlab

- FIREBASE_TOKEN
- NPM_USER
- NPM_PASS
- NPM_EMAIL
- NPM_REGISTRY
- NPM_SCOPE

#### Babel

Babel extendable in `babelrc.js` (Do not rmove):

```js
module.exports = { extends: './node_modules/@tenjo/webpack-config/.babelrc' }
```

**If using @bit components ensure CI file inlcudes https://www.npmjs.com/package/npm-cli-login**

Stages:

1. Lint
2. Deploy
