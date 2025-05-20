---
url: "https://console.integration.app/docs/membrane/interfaces/flows/nodes/list-data-records"
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

# List Data Records

This node lists all records in a data collection and returns their list as an output.

If data collection has multiple pages, this node will request all pages and return all records.

Note: if too many records are returned, the execution may fail due to the limit of the node run output size.

For listing large data collections you should use [Actions](https://console.integration.app/docs/membrane/interfaces/actions) and paginate on your side.

More information on flow run limits: [Flow Runs](https://console.integration.app/docs/membrane/monitoring/logs/flow-runs).

## Output

The output of this node is a list of [Data Record](https://console.integration.app/docs/membrane/interfaces/data-collections/data-records) that look like this:

```yaml
id: <unique record id>
name: <human-readable record name>
url: <link to the record if exists>
fields:
    ...fields mapped with fieldMapping
rawFields:
    ...fields returned by the third-party app
unifiedFields:
    ...Universal Data Model fields if includeUdmFields is set to true
```

## See also

#### [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources)

Configuring access to data in external apps.

#### [Field Mappings](https://console.integration.app/docs/membrane/interfaces/field-mappings)

Mapping fields between your app and external apps.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Output](https://console.integration.app/docs/membrane/interfaces/flows/nodes/list-data-records#output)
- [See also](https://console.integration.app/docs/membrane/interfaces/flows/nodes/list-data-records#see-also)

Docs · Integration Console