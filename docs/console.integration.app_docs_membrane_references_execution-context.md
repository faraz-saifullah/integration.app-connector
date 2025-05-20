---
url: "https://console.integration.app/docs/membrane/references/execution-context"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References
  - [Execution Context](https://console.integration.app/docs/membrane/references/execution-context)
  - [Formulas](https://console.integration.app/docs/membrane/references/formulas)
  - [Data Schemas](https://console.integration.app/docs/membrane/references/data-schemas)
  - [Limits](https://console.integration.app/docs/membrane/references/limits)
  - [Universal Data Models](https://console.integration.app/docs/membrane/references/udm)

# Execution Context

Execution context provides data and functionality to implementations of Membrane Interfaces.

For example, when you [run custom code](https://console.integration.app/docs/membrane/interfaces/custom-code),
you can use the execution context to work with inputs, make API requests, add logs, and more.

Here is the full list of things that can exist in the execution context:

| Property Name | Description | Availability |
| --- | --- | --- |
| `input` | Input of the current interface. | Always available |
| `externalApiClient` | API client you can use to make requests to external app. | In a context of a [Customer Connection](https://console.integration.app/docs/membrane/apps/connections) |
| `internalApiClient` | API client you can use to make requests to your app. | In internal-facing interfaces such as [App Data Schema](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas) or [Internal Events](https://console.integration.app/docs/membrane/interfaces/internal-events). |
| `engineApiClient` | API client you can use to make requests to the integration engine. | In a context of a [Customer Connection](https://console.integration.app/docs/membrane/apps/connections) |

How you can access the execution context depends on the interface type.
For example, in custom code runner, you can access everything in the context programmatically, but if you implement a [Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings) as YAML,
you will only have access to `input` that will be passed as variables for the formulas used in the field mapping.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console