---
url: "https://console.integration.app/docs/getting-started/front-end/vue"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/getting-started/authentication)
- [Front End](https://console.integration.app/docs/getting-started/front-end)
  - [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript)
  - [React](https://console.integration.app/docs/getting-started/front-end/react)
  - [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)
  - [CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# Vue.js

# Add Javascript SDK to your Front-end

First, install `@integration-app/sdk` NPM package:

npm

Copy

```bash
npm install @integration-app/sdk
```

Then, initialize the SDK with an Authentication Token:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { IntegrationAppClient } from '@integration-app/sdk'

const integrationApp = new IntegrationAppClient({
  // Test authentication token. You will need to replace it with the real one.
  token: '',
})
```

In this example we use the test token you can find on the [Settings](https://console.integration.app/w/0/settings) page of your workspace.
You will need to replace it with a real authentication token later (see [Authentication](https://console.integration.app/docs/getting-started/authentication)).

To verify that everything works, let's open our drop-in integration UI:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp.open()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Ffront-end%2Fvue) to run this example

In the end your basic Vue.js setup may look like this:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
<script setup lang="ts">
import { IntegrationAppClient } from "@integration-app/sdk";

const token = await tokenResp.json();

const integrationApp = new IntegrationAppClient({
  "",
});

</script>

<template>
  <div v-if="!token">Loading...</div>
  <div v-else>
    <button class="btn btn-sm btn-outline m-2" v-on:click="integrationApp.open">
      Configure Integrations
    </button>
  </div>
</template>
```

## Dynamic Token

If it is more convenient for you to fetch token dynamically instead of providing static value, you can use `fetchToken` instead:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
import { IntegrationAppClient } from '@integration-app/sdk'

const integrationApp = new IntegrationAppClient({
  // Test authentication token. You will need to replace it with the real one.
  async fetchToken() {
    return '';
  },
})
```

This option also automatically handles token expiration. If SDK was initialized long ago and token had time to expire, it will be automatically re-fetched before making new API requests.

## SDK Reference

To see the full list of SDK methods check out the [Javascript API Reference](https://console.integration.app/ref/sdk/index.html).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console