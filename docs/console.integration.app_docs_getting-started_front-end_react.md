---
url: "https://console.integration.app/docs/getting-started/front-end/react"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
  - [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)
  - [React](https://console.integration.app/docs/getting-started/front-end/react)
    - [Hooks](https://console.integration.app/docs/getting-started/front-end/react/hooks)
    - [UI Components](https://console.integration.app/docs/getting-started/front-end/react/components)
  - [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)
  - [CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# React Package

React package provides you with the following:

- [Hooks](https://console.integration.app/docs/getting-started/front-end/react/hooks) that simplify working with remote data provided by our [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript) from React components. They wrap lifecycle of asynchronous operations, deal with pagination, etc.
- [UI Components](https://console.integration.app/docs/getting-started/front-end/react/components) for implementing standard parts of integration UI such as connecting external apps, configuring integrations, building workflows, etc.

## Getting Started

First, install `@integration-app/react` NPM package:

npm

Copy

```bash
npm install @integration-app/react
```

Then, wrap your the part of your app that deals with integrations into `IntegrationAppProvider`:

React

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/react)

Copy

```jsx
import { IntegrationAppProvider } from '@integration-app/react'

export function MyApp() {
  return (
    <IntegrationAppProvider token='{TOKEN}'>
      <MyComponent />
    </IntegrationAppProvider>
  )
}
```

This example uses your test token. For production, you should generate a token on your backend and pass it to your React app: [Authentication](https://console.integration.app/docs/getting-started/authentication).

### Dynamic Token

If it is more convenient for you to fetch token dynamically instead of providing static value, you can use `fetchToken` instead:

React

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/react)

Copy

```jsx
async fetchToken() {
  const token = await myTokenFetcher(.....);
  return token;
}

export function MyApp() {
  return (
    <IntegrationAppProvider fetchToken={fetchToken}>
      <MyComponent />
    </IntegrationAppProvider>
  )
}
```

This option also automatically handles token expiration. If token was initialized long ago and token had time to expire, it will be automatically re-fetched before making new API requests.

## Next.js

Since the introduction of [React Server Components (RSC)](https://nextjs.org/docs/app/building-your-application/rendering/server-components) in Next.js 13, files that use the package must include the `'use client'` directive to work correctly.

## Reference

You can find the full reference for the React package here: [React Library Reference](https://console.integration.app/ref/react/).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Getting Started](https://console.integration.app/docs/getting-started/front-end/react#getting-started)
  - [Dynamic Token](https://console.integration.app/docs/getting-started/front-end/react#dynamic-token)
- [Next.js](https://console.integration.app/docs/getting-started/front-end/react#nextjs)
- [Reference](https://console.integration.app/docs/getting-started/front-end/react#reference)

Docs · Integration Console