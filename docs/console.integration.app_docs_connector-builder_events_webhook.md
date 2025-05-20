---
url: "https://console.integration.app/docs/connector-builder/events/webhook"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
  - [Global Webhook](https://console.integration.app/docs/connector-builder/events/global-webhook)
  - [Webhook](https://console.integration.app/docs/connector-builder/events/webhook)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

## Webhook Events

This type of events subscribes to a webhook then receives event notifications.

## Methods

The following methods can be implemented for the webhook events:

### Subscribe

- Method key: `subscribe`
- Supported implementation types: `javascript`, `rest-api-mapping`, `graphql-api-mapping`.

There is a function that proceeds subscription to events in External App.

Arguments:

- `webhookUri` \- string, URI webhooks should be sent to. It should be passed to the External App.
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular event.

Result:

- `state` \- object, subscription state. This state will be saved and passed as `state` to `unsubscribe` and `handle` functions.
- `nextRefreshTimestamp` \- number, optional, timestamp in milliseconds when the next refresh should be performed. It is used to refresh the subscription if the external app requires it.

Here is an example of `subscribe` function, where:

`webhookUri` \- is a URI where External App will send request with notifications about changes.

`<subscription_path>` \- is path to subscribe (based on External App documentation).

`'<some_key>': '<some_value>'` \- other body properties (based on External App documentation).

This function should return a state with the webhook unique identifier as `webhookId`.

```javascript

// Example: Subscribe to a webhook and return the webhookId.
export default async function subscribe({ apiClient, webhookUri, parameters }) {
  const body = { webhookUri, '<some_key>': '<some_value>'}
  const response = await apiClient.post(parameters.path, body)

  return {
    state: {
      webhookId: response?.id
    }
  }
}
```

### Handle

- Method key: `handle`
- Supported implementation types: `javascript`, `mapping`.

There is a function that proceeds notification requests from External App.
If External App require a response you can specify parameters ( `headers`, `data`) for the response in `response` property (optional).
It can be a case when External API require to confirm webhook uri.

Arguments:

- `query` \- object, webhook request query received from External App
- `data` \- object, webhook request body received from External App (parsed based on Content-Type)
- `headers` \- object, webhook request headers received from External App
- `state` \- object, state returned from `subscribe` function
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular event
- `rawBody` \- string, raw unparsed body of the webhook request (useful for signature verification or when you need access to the original request body)

Result:

- `events` \- list of objects, list of events extracted from the webhook. `event` \- object with `type` and `record` fields (see example below).
- `response` \- object, optional http response with properties:

  - `headers` \- object
  - `status` \- number
  - `data` \- http body (based on `Content-Type`)
- `state` \- a new value of the state if it needs to be updated.

Example of `result`:

```markup
{
	"events": [\
		{\
			"record": {\
				"id": "1",\
				...other fields that match collection fieldsSchema\
      }\
		}\
  ],
	"response": {
		"headers": {
			"x-response-header": "header value"
		},
		"data": {
			"responseField": "value"
		}
	}
}
```

Example of `handle` function:

```javascript
// Example: Handle a webhook and return events.
export default async function handle({ body, query, parameters, rawBody }) {
  // Verify webhook signature if needed
  if (query.signatureRequest) {
    const signature = createHmac('sha256', parameters.webhookSecret)
      .update(rawBody)
      .digest('hex')
    if (signature !== headers['x-webhook-signature']) {
      throw new Error('Invalid webhook signature')
    }
  }

  // Process the webhook payload
  return {
    events: [\
      {\
        type: 'created',  // Possible values: 'created', 'updated', 'deleted'\
        record: body.record,\
      },\
    ],
    response: {
      headers: {
        'Content-Type': 'text/plain',
      },
      data: query?.data,
    },
  }
}
```

### Unsubscribe

- Method key: `unsubscribe`
- Supported implementation types: `javascript`, `rest-api-mapping`, `graphql-api-mapping`.

This function should send a request to delete webhook by `webhookId` received in `subscription` method.

Arguments:

- state - state returned from `subscribe`
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular event.

Example of `unsubscribe` function:

```javascript
// Example: Unsubscribe from a webhook.
export default async function unsubscribe({ apiClient, state, parameters }) {
  await apiClient.delete(`${parameters.path}/${state.webhookId}`)
}
```

### Refresh (optional)

- Method key: `refresh`
- Supported implementation types: `javascript`, `rest-api-mapping`, `graphql-api-mapping`.

Some applications require refreshing the subscription to keep it active.
This method should be implemented if the `nextRefreshTimestamp` is returned from the `subscribe` method.

Arguments:

- `state` \- state returned from `subscribe`
- `webhookUri` \- string, URI webhooks should be sent to.
- `parameters` \- object, parameters (matching `parametersSchema`) of this particular event.

Response:

- `state` \- updated state information if it needs to be updated.
- `nextRefreshTimestamp` \- number, timestamp in milliseconds when the next refresh should be performed.

Example of `refresh` function:

```javascript
// Example: Unsubscribe from a webhook.
export default async function refresh({ apiClient, state, parameters }) {
  await apiClient.post(`${parameters.path}/${state.webhookId}/refresh`)
  return {
    nextRefreshTimestamp: Date.now() + 1000 * 60 * 60 * 24, // Refresh in 24 hours
  }
}
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Webhook Events](https://console.integration.app/docs/connector-builder/events/webhook#webhook-events)
- [Methods](https://console.integration.app/docs/connector-builder/events/webhook#methods)
  - [Subscribe](https://console.integration.app/docs/connector-builder/events/webhook#subscribe)
  - [Handle](https://console.integration.app/docs/connector-builder/events/webhook#handle)
  - [Unsubscribe](https://console.integration.app/docs/connector-builder/events/webhook#unsubscribe)
  - [Refresh (optional)](https://console.integration.app/docs/connector-builder/events/webhook#refresh-optional)

Docs · Integration Console