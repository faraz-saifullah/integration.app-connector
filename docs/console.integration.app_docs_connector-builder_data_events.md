---
url: "https://console.integration.app/docs/connector-builder/data/events"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
  - [Events](https://console.integration.app/docs/connector-builder/data/events)
  - Operations
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# Events

You can configure a strategy for getting `created`, `updated`, and `deleted` events from the collection.
A `full-scan` strategy will be used if no other is provided.
There are three more strategies:

## Implementation Types

### Webhook

This is a preferred implementation type for data events whenever available.

See details of how webhooks are implemented here: [Events](https://console.integration.app/docs/connector-builder/events).

Webhook implementation for data collection is exactly the same as for connector-level webhook events.

### Pull latest records

Pull the latest records strategy involves fetching records based on their creation, update, or deletion date.

Use this Strategy when the External App does not support webhook events.

There is only one method - `pullLatestRecords`.

Arguments:

- `cursor` \- string, cursor returned from the previous page of the results. If not provided, the first page is returned.
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular data collection.

Result:

- `records` \- list of objects representing records, ordered by creation date or date-time in descending order.
- `cursor ` \- string (optional) providing information to retrieve the next chunk of records if pagination is allowed.

Example of `pullLatestRecords` function

```javascript
// Example: Fetch the latest records ordered by creation date.
export default async function pullLatestRecords({ apiClient, cursor, parameters }) {
  // Define the path based on your External App's API structure.
  const path = `${parameters.path}?$orderby=createdDateTime desc`

  // Make the API request to retrieve records.
  const response = await apiClient.get(`${cursor ? cursor : path}`)

  // Return the result with records and optional cursor for pagination.
  return {
    records: response.records,
    cursor: response.nextPageLink,
  }
}
```

### Custom pull

Custom Pull Strategy provides a customized approach for retrieving lists of created, updated, or deleted records.
This strategy consists of two methods: subscribe and pull.
It works the following way:

- When subscription is created, a `state` is generated and stored. It allows pulling events starting from the subscription time.
- When events a pulled, the `state` is used to generate events since the state was created as well as the new state.
a specified period since the last pull.

#### Subscribe

The subscribe method initializes the subscription to events and retrieves a unique identifier for future pulls.
Arguments:

- `parameters` \- object, parameters (matching `parametersSchema`) of this particular data collection.

Result:

- state - object, subscription state. This state will be saved and passed as `state` to `pull` function.

Example of subscribe Function:

```javascript
// Example: Subscribe to delta changes and return the deltaLink.
export default async function subscribe({ apiClient, parameters }) {
  let cursor = false
  const path = `${parameters.path}/delta`

  while (true) {
    const response = await apiClient.get(`${cursor ? cursor : path}`)

    if (response.deltaLink) {
      break
    } else {
      cursor = response.nextPageLink
    }
  }

  return { deltaLink: response.deltaLink }
}
```

#### Pull

The pull method fetches records based on the subscription and stores them in the state.
It also generates events for each created or updated or deleted record.

Arguments:

- state - object, state returned from `subscribe` function.
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular data collection.

Result:

- events - list of objects representing events with type and record fields.
- state - updated state information, including the new information for subsequent pulls.

Example of `pull` function:

```javascript
// Example: Pull records using the deltaLink and generate events.
export default async function pull({ apiClient, state, parameters }) {
  const events = []
  let cursor = false

  while (true) {
    const response = await apiClient.get(`${cursor ? cursor : state?.deltaLink}`)

    response.value.forEach((record) => {
      events.push({
      type: 'created',
      record: record,
      })
    })

    if (response.deltaLink) {
      break
    } else {
      cursor = response.nextPageLink
    }
  }

  return {
    events,
    state: {
      deltaLink: response.deltaLink,
    },
  }
}
```

In the provided examples, customize the logic to match the API structure of your External App.
Adjust the logic based on your specific API requirements.

### Full scan

This is the "last resort" implementation type. It will be used if no other implementation type is provided.

Full scan strategy fetches all records from the External App and comparing them with the previously fetched records to determine the changes.

This strategy has limitations and cannot be used for large collections.

Parameters:

- `ignoredFields` \- list of fields that should be ignored when comparing records. For example, dynamically generated fields such as download URLs or last view timestamps need to be ignored to avoid fake updates.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Implementation Types](https://console.integration.app/docs/connector-builder/data/events#implementation-types)
  - [Webhook](https://console.integration.app/docs/connector-builder/data/events#webhook)
  - [Pull latest records](https://console.integration.app/docs/connector-builder/data/events#pull-latest-records)
  - [Custom pull](https://console.integration.app/docs/connector-builder/data/events#custom-pull)
    - [Subscribe](https://console.integration.app/docs/connector-builder/data/events#subscribe)
    - [Pull](https://console.integration.app/docs/connector-builder/data/events#pull)
  - [Full scan](https://console.integration.app/docs/connector-builder/data/events#full-scan)

Docs · Integration Console