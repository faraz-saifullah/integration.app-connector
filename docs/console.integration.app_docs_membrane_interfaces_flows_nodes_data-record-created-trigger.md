---
url: "https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-created-trigger"
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
    - [Nodes](https://console.integration.app/docs/membrane/interfaces/flows/nodes)
      - [API Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/api-trigger)
      - [App Event Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/app-event-trigger)
      - [Create Data Link](https://console.integration.app/docs/membrane/interfaces/flows/nodes/create-data-link)
      - [Create Data Record](https://console.integration.app/docs/membrane/interfaces/flows/nodes/create-data-record)
      - [Data Record Created Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-created-trigger)
      - [Data Record Deleted Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-deleted-trigger)
      - [Data Record Updated Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-updated-trigger)
      - [Delete Data Record](https://console.integration.app/docs/membrane/interfaces/flows/nodes/delete-data-record)
      - [Filter](https://console.integration.app/docs/membrane/interfaces/flows/nodes/filter)
      - [Find Data Link](https://console.integration.app/docs/membrane/interfaces/flows/nodes/find-data-link)
      - [Find Data Record By Id](https://console.integration.app/docs/membrane/interfaces/flows/nodes/find-data-record-by-id)
      - [For Each](https://console.integration.app/docs/membrane/interfaces/flows/nodes/for-each)
      - [HTTP Request](https://console.integration.app/docs/membrane/interfaces/flows/nodes/http-request)
      - [List Data Records](https://console.integration.app/docs/membrane/interfaces/flows/nodes/list-data-records)
      - [Schedule Trigger](https://console.integration.app/docs/membrane/interfaces/flows/nodes/schedule-trigger)
      - [Transform Data](https://console.integration.app/docs/membrane/interfaces/flows/nodes/transform-data)
      - [Update Data Record](https://console.integration.app/docs/membrane/interfaces/flows/nodes/update-data-record)
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

# Data Record Created Trigger

This trigger launches a flow when a data record is created in a selected data source.

To configure this node you can provide:

- [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)
- [Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings) from external app to your app.

## Multiple Events

If multiple events are detected at the same time, the flow will be started with multiple inputs, one for each event.

To avoid launching flows that will run for too long, if there are too many inputs, events could be split in multiple groups, each starting their own flow run.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Multiple Events](https://console.integration.app/docs/membrane/interfaces/flows/nodes/data-record-created-trigger#multiple-events)

Docs · Integration Console