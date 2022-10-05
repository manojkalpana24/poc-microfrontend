# Micro-frontend Proof Of Concept (React, Redux and React Router)
## Module Federation
An example Webpack Module Federated eCommerce application using React, Redux and React Router

[![N|Solid](https://webpack.js.org/site-logo.1fcab817090e78435061.svg)](https://webpack.js.org/concepts/module-federation)

In this PoC following webpack module federated applications are created,

- parent-app
- layout-app
- items-app

## Features

- Search items
- List items
- Add to cart (under development)

## Tech

In this PoC following open source projects are used,

- [React] - A front-end javaScript library
- [Redux] - A state management library
- [React Router] - A routing library
- [Tailwind] - A CSS framework

## Installation

It requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server in these three directories; parent-app, layout-app, items-app

```sh
cd parent-app
yarn install
yarn start:live
```

For development, production builds...

```sh
yarn build
```

Verify the deployment by navigating to your server address in
your preferred browser.

parent-app
```sh
127.0.0.1:3001
```

layout-app
```sh
127.0.0.1:3002
```

items-app
```sh
127.0.0.1:3003
```
## License

MIT

**Free Software, Cheers!**
