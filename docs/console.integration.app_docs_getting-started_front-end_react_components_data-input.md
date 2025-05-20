---
url: "https://console.integration.app/docs/getting-started/front-end/react/components/data-input"
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
      - [DataInput](https://console.integration.app/docs/getting-started/front-end/react/components/data-input)
      - [Combobox](https://console.integration.app/docs/getting-started/front-end/react/components/combobox)
      - [Portal boundary](https://console.integration.app/docs/getting-started/front-end/react/components/portal-boundary)
  - [Vue.js](https://console.integration.app/docs/getting-started/front-end/vue)
  - [CSP Rules](https://console.integration.app/docs/getting-started/front-end/csp_rules)
- [Backend](https://console.integration.app/docs/getting-started/backend)
- [Self-hosting](https://console.integration.app/docs/getting-started/self-hosting)

# DataInput

Data Input is used to let users enter data that fits a specific [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas) with optional use of variables defined by another Data Schema.

It supports complex schemas, lookups, data transformation formulas, and other features useful for configuring integrations.

React

Copy

```jsx
import { DataInput, DataSchema } from "@integration-app/react";

export function PlainDataInputExample() {
  const [value, setValue] = useState<unknown>({})

  const schema = {
    type: 'object',
    properties: {
      String: {
        type: 'string',
        format: 'hostname',
      },
      Integer: {
        type: 'integer',
      },
      Boolean: {
        type: 'boolean',
      },
      Object: {
        type: 'object',
        required: ['String'],
        properties: {
          NoType: {
            title: 'No Type Title',
          },
          String: {
            type: 'string',
          },
          Object: {
            type: 'object',
            properties: {
              String: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    required: ['String', 'Boolean'],
  }

  const variablesSchema: DataSchema = {
    type: 'object',
    properties: {
      'string-value': {
        type: 'string',
        title: 'String Value',
      },
      'array-value': {
        type: 'array',
        title: 'Array Value',
        items: {
          type: 'string',
        },
      },
      numberOfEmployees: {
        type: 'number',
      },
      currentWeekNumber: {
        type: 'integer',
      },
      createdTime: {
        type: 'string',
        format: 'date-time',
      },
    },
  }

  return (
    <DataInput
      schema={schema}
      value={value}
      variablesSchema={variablesSchema}
      onChange={(importValue: unknown) => setValue(importValue)}
    />
  )
}
```

Run Now

Please [log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fgetting-started%2Ffront-end%2Freact%2Fcomponents%2Fdata-input) to run this example

## Nested Components

- [Combobox](https://console.integration.app/docs/getting-started/front-end/react/components/combobox)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Nested Components](https://console.integration.app/docs/getting-started/front-end/react/components/data-input#nested-components)

Docs · Integration Console