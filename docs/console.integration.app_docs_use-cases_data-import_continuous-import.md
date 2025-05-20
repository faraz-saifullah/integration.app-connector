---
url: "https://console.integration.app/docs/use-cases/data-import/continuous-import"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Data Import](https://console.integration.app/docs/use-cases/data-import)
  - [Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import)
  - [Import User-selected Data Collections](https://console.integration.app/docs/use-cases/data-import/import-user-selected-collections)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)
- [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)
- [Ai](https://console.integration.app/docs/use-cases/ai)

# Continous Data Import from External Apps

This guide will show you how to import data from an external app and keep it up-to-date in your app.

If you want to see the end-result right away, you can start with a pre-built [scenario](https://console.integration.app/w/0/scenarios) or check out one of the examples in our [Examples App](https://examples.integration.app/).

Continuous Import Scenarios![Continuous Import Scenarios](https://console.integration.app/images/docs/continuously-import-scenarios.png)

Otherwise, follow the steps below.

To make this guide specific, we will import **Users**, but you can use the same approach for any other type of data.

## Data Source

First, we will create a Universal [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources) that points to Users in every app we want to import users from.

Create Data Source![Create Data Source](https://console.integration.app/images/docs/create-users-data-source.png)

By selecting Users data model, you will instruct integration.app to automatically pick the most appropriate data collection in each external app this Data Source is used for.

## Field Mapping

To keep field mapping configuration in one place and let your customers change it if needed, we will create a [Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings).

Select Users data source we created in the previous step.

You can then define default field mapping that will be used across all applications.
You can leverage our [Unified Data Model](https://console.integration.app/docs/membrane/references/udm) to pre-populate mappings for standard fields across all applications.

This screenshot shows the simplest possible configuration for "Import Users" field mapping that maps fields from the external app to "id" and "name" fields that your app will receive.

Users Field Mapping![Users Field Mapping](https://console.integration.app/images/docs/users-field-mapping.png)

## Full Data Import

To perform the initial import of all users from the external app (and full re-imports in the future if you need to), we will use "List Data Record" action.

Create a new action that looks like this:

Get all Users Action![Get all Users Action](https://console.integration.app/images/docs/get-all-users-action.png)

Let's break it down.

**Data Source**

Select the Users Data Source we created in the first step. We will re-use this data source in the following steps, so it's good to keep it consistent.

**Pagination**

If an external application has a lot of users, this action will return users page by page. Each response will contain a `cursor` that you can use to fetch the next page.

To make it work, you need to:

- Add `cursor` to the input schema of the action.
- Use `cursor` in the pagination config of the action.

**Field Mapping**

Select the Import Users field mapping we created in the second step. This will ensure that the data you receive is mapped consistently to your data schema across different blueprints.

**Testing**

To test this action, apply it to an external app you have an account in, create a connection, and run the sample code in the right panel:

Run Action![Run Action](https://console.integration.app/images/docs/run-get-all-users-action.png)

## Incremental Data Import

To receive incremental updates from external apps, we will create a [Flow](https://console.integration.app/docs/membrane/interfaces/flows)
triggered by change events in the Users data source.

The flow will look like this:

Run Action![Run Action](https://console.integration.app/images/docs/get-updated-users-flow.png)

It will be triggered by `data-record-created`, `data-record-updated`, and `data-record-deleted` events in the Users data source.
Then it will fetch the full user record (except for deleted users) and send them to your application.

Step that fetches the user record will look like this:

Run Action![Run Action](https://console.integration.app/images/docs/get-updated-users-flow-node.png)

It uses the same Data Source and Field Mapping as we used in "Get All Users" action above.

The step that sends users to your app looks like this:

Run Action![Run Action](https://console.integration.app/images/docs/get-updated-users-send-to-my-app.png)

It simply sends the user record to the URL specified by you in the body of the POST request.

**Testing**

To test this flow, apply it to an external app you have an account in, create a connection, and make a change in one of the users: create, update, or delete it.
You should see a flow run and a request sent to the URL you specified.

## Extending Functionality

There are many things you can add to the basic functionality described here:

- To configure requests made to your app (add authentication, etc), see [Connecting Your App API](https://console.integration.app/docs/membrane/interfaces/internal-api).
- Use [Field Mapping UX](https://console.integration.app/docs/integration-ui/field-mappings) to let your users customize how fields are mapped from external app to your app.
- [Internal Data Schemas](https://console.integration.app/docs/membrane/interfaces/internal-data-schemas) will let you define custom per-customer field schemas that will be used in the field mapping.
- If you want to not just import data, but send updates back, check out [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)

## Live Examples

- [Continuous Import of Files](https://examples.integration.app/continuous-import-of-files)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Data Source](https://console.integration.app/docs/use-cases/data-import/continuous-import#data-source)
- [Field Mapping](https://console.integration.app/docs/use-cases/data-import/continuous-import#field-mapping)
- [Full Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import#full-data-import)
- [Incremental Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import#incremental-data-import)
- [Extending Functionality](https://console.integration.app/docs/use-cases/data-import/continuous-import#extending-functionality)
- [Live Examples](https://console.integration.app/docs/use-cases/data-import/continuous-import#live-examples)

Docs · Integration Console