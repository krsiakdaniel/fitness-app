# Fitness tracker

## TODO

- [ ] setup Prettier
- [ ] setup Husky

## Features

- [ ] exercises
- [ ] workout timer
- [ ] track calories
- [ ] create dashboard

## Project board

- <https://github.com/users/krsiakdaniel/projects/3/views/1>

## Technologies

- [x] [CRA](https://chakra-ui.com/getting-started/cra-guide) (Chakra UI with React and TypeScript template)
- [x] [React](https://reactjs.org/)
- [ ] [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [ ] [ReduxToolkit](https://redux-toolkit.js.org/)
- [x] [Chakra UI](https://chakra-ui.com/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [ ] testing = [Cypress](https://www.cypress.io/)
- [ ] forms = <https://react-hook-form.com/get-started/>

## MERN stack

Use [MERN stack](https://www.mongodb.com/mern-stack).

- MongoDB — document database
- Express(.js) — Node.js web framework
- React(.js) — a client-side JavaScript framework
- Node(.js) — the premier JavaScript web server

## Packages

- [packages.json](./package.json)
- <https://github.com/krsiakdaniel/fitness-app/network/dependencies>

## Local development

### Install dependencies

Install dependencies in root folder

```bash
yarn
```

Install dependencies for frontend

```bash
cd frontend && yarn
```

Install backend dependencies

```bash
cd backend && yarn
```

### Run the app

To run the frontend (react app server - runs the app in the development mode on [http://localhost:3000](http://localhost:3000))

```bash
yarn start:app
```

To run backend server - runs the app in the development mode on [http://localhost:8000](http://localhost:8000))

```bash
yarn start:server
```

To run both backend and frontend simultaneously.

```bash
yarn start:dev
```

## Coding style

In order to keep code clean and readable.

### Code

- use consistent naming
- name functions so that they explain what they do
- avoid comments if possible
- if needed to comment some big blocks of code use <https://jsdoc.app/>

## GIT messages

Loosely based on <https://cbea.ms/git-commit/> , Use messages that are short and readable.

- FE = FrontEnd
- BE = BackEnd
- name `branch` base on task name
- keep the PR title similar as branch name
- use the [imperative mood](https://cbea.ms/git-commit/#imperative) in the subject line
- use folders `/` to organize branches
- branch name is base on what you work on:
  - `feat` = new feature
  - `fix` = bug fixing
  - `docs` = writing documentation
  - `ref` = refactoring
  - `test` = writing tests
  - `install` = install new package or setup environment

Brach name example `feat/fe-new-modal` and commit message `FE - Feat: Add new modal`. Or backend example:  `install/be-setup-server` and commit message `BE - Install: Setup server`.
- `yarn start` = runs the app in the development mode on [http://localhost:3000](http://localhost:3000)

## Database

Mongo DB can be run in 2 ways:

- Locally
- On the cloud (Mongo Atlas)
