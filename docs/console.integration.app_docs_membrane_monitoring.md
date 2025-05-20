---
url: "https://console.integration.app/docs/membrane/monitoring"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [External Apps](https://console.integration.app/docs/membrane/apps)
- [Interfaces](https://console.integration.app/docs/membrane/interfaces)
- [Customers](https://console.integration.app/docs/membrane/customers)
- [Monitoring & Troubleshooting](https://console.integration.app/docs/membrane/monitoring)
  - Logs
  - [Webhook Notifications](https://console.integration.app/docs/membrane/monitoring/webhook-notifications)
- [Security And Privacy](https://console.integration.app/docs/membrane/security-and-privacy)
- References

# Monitoring & Troubleshooting

After you implemented the integrations, you need to make sure they are working as expected. When they don't, you need to understand what is happening and why.

## Logging

Integration.app keeps and provides you with detailed logs of what is happening in your integrations:

- [Api Requests](https://console.integration.app/docs/membrane/monitoring/logs/api-requests)
- [External Webhooks](https://console.integration.app/docs/membrane/monitoring/logs/external-webhooks)
- [External Event Pulls](https://console.integration.app/docs/membrane/monitoring/logs/external-event-pulls)
- [External Events](https://console.integration.app/docs/membrane/monitoring/logs/external-events)
- [Internal Events](https://console.integration.app/docs/membrane/monitoring/logs/internal-events)
- [Flow Runs](https://console.integration.app/docs/membrane/monitoring/logs/flow-runs)

## Webhook Notifications

To get notified when an important event happens in our integration workspace, you can subscribe to webhook notifications.

Learn more about webhook notifications here: [Webhook Notifications](https://console.integration.app/docs/membrane/monitoring/webhook-notifications)

## Troubleshooting

There are usually three types of problems with integrations:

- Integration ran but resulted in an error.
- Integrate ran but didn't do what you expected it to do.
- Integration did not run when you expected it to.

Let's look at how to troubleshoot each of these problems.

### Errors

When integration errored, follow red dots to find the reason:

Follow Red Dots![Follow Red Dots](https://console.integration.app/images/docs/follow-red-dots.png)

You can always find the error logs on the "Error" tab of the failed run. To understand what led to the error, check out the "Logs" tab.

Logs![Logs](https://console.integration.app/images/docs/troubleshooting-logs.png)

### Integrations not doing the right thing

When integration ran, but didn't do what you expected it to do, go to the Flow Run page and trace its execution step by step.

Flow Run Graph![Flow Run Graph](https://console.integration.app/images/docs/flow-run-graph.png)

Each node run contains detailed logs of what it did and why. You can see the logs by clicking on the node run and selecting the "Logs" tab.

### Integration Not Running

When you expected an integration to run, but it did not, check the following:

- Check event logs to see if the events you expected did happen:
  - [Data Source Events](https://console.integration.app/w/0/activity/data-source-events) for external events.
  - [App Events](https://console.integration.app/w/0/activity/app-events) for internal events.
- If events did happen, check the event details to see if it launched the integration you expected. If not - check the trigger configuration.
- If events did not happen, check the following:
  - For external events: find the [Customer Data Source](https://console.integration.app/docs/membrane/customers/data-source-instances) you expected to trigger the event and go to the "Subscriptions and Events" tab for troubleshooting.
  - For internal events:
    - If you have per-customer subscriptions, go to the [Customer Subscriptions](https://console.integration.app/w/0/integrations/ux/app-event-types/subscriptions) page, find the subscription you expected to generate the event, and see its details.
    - If you have global webhooks, try making an API call to the global webhook and check the response.

### Detailed Logs for API requests

To see detailed execution logs for any API request you make, you can add `logs=1` to the query parameters of the request.

The response will contain a `_logs` property with the detailed logs.

Note: this only works when response is a JSON object.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Logging](https://console.integration.app/docs/membrane/monitoring#logging)
- [Webhook Notifications](https://console.integration.app/docs/membrane/monitoring#webhook-notifications)
- [Troubleshooting](https://console.integration.app/docs/membrane/monitoring#troubleshooting)
  - [Errors](https://console.integration.app/docs/membrane/monitoring#errors)
  - [Integrations not doing the right thing](https://console.integration.app/docs/membrane/monitoring#integrations-not-doing-the-right-thing)
  - [Integration Not Running](https://console.integration.app/docs/membrane/monitoring#integration-not-running)
  - [Detailed Logs for API requests](https://console.integration.app/docs/membrane/monitoring#detailed-logs-for-api-requests)

Docs · Integration Console