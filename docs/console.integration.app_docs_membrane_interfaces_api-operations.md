---
url: "https://console.integration.app/docs/membrane/interfaces/api-operations"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
  - [Scenarios](https://console.integration.app/docs/membrane/interfaces/scenarios)
  - [Actions](https://console.integration.app/docs/membrane/interfaces/actions)
  - [Flows](https://console.integration.app/docs/membrane/interfaces/flows)
  - [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
  - [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)
  - [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links)
  - [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api)
  - [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events)
  - [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas)
  - [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations)
  - [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections)
  - [API Proxy](https://console.integration.app/docs/membrane/interfaces/api-proxy)
  - [Files](https://console.integration.app/docs/membrane/interfaces/files)
  - [Running Custom Code](https://console.integration.app/docs/membrane/interfaces/custom-code)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# API Operations

Operations represent each individual thing you can do with a connected application, like:

- Get a list of users
- Send a message
- Delete a task
- ...etc

Each operation has the following structure:

- key - a unique identifier for the operation. You can use this to reference the operation in your code.
- name - human-readable name of the operation. You can display it to your users.
- description - detailed description of the operation in Markdown format.
- tags - a list of strings that can be used to categorize operations.
- inputSchema - a [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) describing the operation input.
- outputSchema - a [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) describing the operation output.

## Getting a list of operations

To get a list of operations supported by a given integration, run the following code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getOperations()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-operations) to run this example

## Getting details of a single operation

To get specification of a single operation, run the following code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .integration('{INTEGRATION_KEY}')
  .getOperation('{OPERATION_KEY}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-operations) to run this example

## Running an operation

To run an operation for a specific connection, run the following code:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .operation('{OPERATION_KEY}')
  .run()
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fmembrane%2Finterfaces%2Fapi-operations) to run this example

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Getting a list of operations](https://console.integration.app/docs/membrane/interfaces/api-operations#getting-a-list-of-operations)
- [Getting details of a single operation](https://console.integration.app/docs/membrane/interfaces/api-operations#getting-details-of-a-single-operation)
- [Running an operation](https://console.integration.app/docs/membrane/interfaces/api-operations#running-an-operation)

Docs · Integration Console