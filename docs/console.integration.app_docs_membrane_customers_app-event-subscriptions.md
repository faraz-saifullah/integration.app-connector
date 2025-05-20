---
url: "https://console.integration.app/docs/membrane/customers/app-event-subscriptions"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
  - [Customers](https://console.integration.app/docs/membrane/customers/customers)
  - [Action Instances](https://console.integration.app/docs/membrane/customers/action-instances)
  - [Flow Instances](https://console.integration.app/docs/membrane/customers/flow-instances)
  - [Data Source Instances](https://console.integration.app/docs/membrane/customers/data-source-instances)
  - [Field Mapping Instances](https://console.integration.app/docs/membrane/customers/field-mapping-instances)
  - [Data Link Table Instances](https://console.integration.app/docs/membrane/customers/data-link-table-instances)
  - [App Event Subscriptions](https://console.integration.app/docs/membrane/customers/app-event-subscriptions)
  - [External Event Subscriptions](https://console.integration.app/docs/membrane/customers/external-event-subscriptions)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# App Event Subscriptions

App Event Subscription is created whenever [App Event](https://console.integration.app/docs/membrane/interfaces/internal-events)
is used in a [Flow Instance](https://console.integration.app/docs/membrane/customers/flow-instances).

## Global Webhook

If you use Global Webhook for your App Events, you need to make this request to trigger relevant flows:

curl

Copy

```bash
curl --request POST \
	--url https://api.integration.app/{GLOBAL_WEBHOOK_URI} \
	--header "Authorization: Bearer {CUSTOMER_TOKEN}" \
	--header "Content-Type: application/json" \
	--data {}
```

## Per-user Subscriptions

If you use per-user subscriptions, flow instances will be triggered automatically when an event happens.

You can explore the user subscriptions here: [App Event Subscriptions](https://console.integration.app/w/0/deployments/app-event-subscriptions).

## Monitoring Events

You can monitor events and flow instances they launch on the [App Events](https://console.integration.app/w/0/activity/app-events) page.

# Troubleshooting App Webhooks

Here is a list of common issues and how you can troubleshoot them.

## Flow was not launched

If you expected a webhook to launch a flow, but it didn't, do the following steps:

### Step 1: Check Logs

Go to the [Webhook Logs](https://console.integration.app/w/0/activity/app-events) and check if the events you expected are there.
Use filters to narrow down the list.

If you didn't find the event you were looking for - check the next section ("Webhook events do not appear in logs").

If you found the record you were looking for in the logs, check out its details:

- Is it associated to the correct App User?
- Does it have the data you expected?

## Step 2: Check Flow Node Configuration

If you found the event in logs, but it didn't trigger the flow you expected, check the node configuration:

- Does it use the right webhook? You can see it in the node dependencies on the Flow Instance page.
- Does it have a filter that excludes the event you found?

If you found the event, checked the node configuration, but still cannot find the problem - please reach out to support@integration.app.

## Webhook events do not appear in logs

If you expected a webhook event to appear in the platform, but it didn't - here is what you could try to do:

### Step 1: Check Subscription

If you are using a webhook with subscription, find the subscription by Webhook and User, and check its status.
Is it subscribed successfully?

Skip this step if you don't use a subscription.

### Step 2: Trigger the webhook manually

Make an HTTP request to the webhook URL:

- If using a subscription - find the webhook URL on the corresponding subscription page.
- If not - use the URL from the webhook page.

Did the request succeed?

If the request succeeded, but you still don't see the event in logs - please reach out to support@integration.app.

## Webhook subscription is not created

If you expect a webhook subscription to be created, but it was not - find it on the [Subscriptions](https://console.integration.app/w/0/deployments/app-event-subscriptions) page
and check the latest request and response. Do they look correct?

If everything looks good in the request and the response - the problem is likely on your app's side - it didn't create the subscriptions.

You can try deleting the subscription and creating it again to troubleshoot.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Global Webhook](https://console.integration.app/docs/membrane/customers/app-event-subscriptions#global-webhook)
- [Per-user Subscriptions](https://console.integration.app/docs/membrane/customers/app-event-subscriptions#per-user-subscriptions)
- [Monitoring Events](https://console.integration.app/docs/membrane/customers/app-event-subscriptions#monitoring-events)

Docs · Integration Console