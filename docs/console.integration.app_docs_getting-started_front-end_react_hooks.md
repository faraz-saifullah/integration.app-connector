---
url: "https://console.integration.app/docs/getting-started/front-end/react/hooks"
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

# Hooks

Hooks are used to interact with entities provided by the [Javascript SDK](https://console.integration.app/docs/getting-started/front-end/javascript) from React components without dealing with the complexity of async operations and state management.

## Hooks for individual entities

Hooks for individual entities are used to fetch and manage data for a single workspace element such as [Flow](https://console.integration.app/docs/membrane/interfaces/flows) or [Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings).

They have the following structure:

```tsx
useFlow(selector: FlowSelector): {
    flow: undefined | Flow;
    apply: ((integrationKeys: string[]) => Promise<Flow[]>);
    reset: (() => Promise<Flow>);
    refresh: (() => Promise<Element>);
    accessor: undefined | FlowAccessor;
    loading: boolean;
    saving: boolean;
    error: any;
    refreshing: boolean;
    create: ((data: CreateFlowRequest) => Promise<undefined | Flow>);
    patch: ((data: Partial<UpdateFlowRequest>) => Promise<void>);
    put: ((data: UpdateFlowRequest) => Promise<void>);
    archive: (() => Promise<void>);
}
```

Here is what each part of it means:

|     |     |
| --- | --- |
| `selector` | String or object that uniquely identifies the entity. It can be the entity's ID or a combination of entity key and connection selector. |
| `flow` | Current state of the entity |
| `apply` | Applies universal entity to selected integrations |
| `reset` | Resets entity to its initial state (only works for entities that have parents) |
| `refresh` | Refresh entity data from the server |
| `accessor` | SDK-provided object for working with the entity. |
| `loading` | Whether initial data is being loaded |
| `saving` | Whether entity is being saved to the server |
| `error` | Error that occurred during last operation |
| `refreshing` | Whether entity is being refreshed from server |
| `create` | Create new entity |
| `patch` | Partially update entity |
| `put` | Fully update entity (replace all its properties with provided ones) |
| `archive` | Archive (soft delete) entity |

## Hooks for lists

Hooks for fetching lists of entities look like this:

```tsx
useFlows(query?): {
    items: Flow[];
    refresh: (() => Promise<void>);
    refreshing: boolean;
    loadMore: (() => Promise<void>);
    loadingMore: boolean;
    loading: boolean;
    error: any;
}
```

Here is what each part of it means:

|     |     |
| --- | --- |
| `query` | Query for fetching / filtering the list of entities |
| `items` | Current list of entities (including all the loaded pages) |
| `loadMore` | Load the next page of entities from the server (if there is no more pages - nothing will happen) |
| `loadingMore` | Whether more entities are being loaded from the server |
| `refresh` | Refresh the list of entities from the server (if multiple pages were fetched previously - only the first page will remain after the refresh) |
| `loading` | Whether the list is being loaded from the server |
| `error` | Error that occurred during the last operation |

## List of hooks

You can find the full list of hooks and their signatures in the [React Library Reference](https://console.integration.app/ref/react/).

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Hooks for individual entities](https://console.integration.app/docs/getting-started/front-end/react/hooks#hooks-for-individual-entities)
- [Hooks for lists](https://console.integration.app/docs/getting-started/front-end/react/hooks#hooks-for-lists)
- [List of hooks](https://console.integration.app/docs/getting-started/front-end/react/hooks#list-of-hooks)

Docs · Integration Console