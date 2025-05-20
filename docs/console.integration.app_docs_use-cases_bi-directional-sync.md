---
url: "https://console.integration.app/docs/use-cases/bi-directional-sync"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Data Import](https://console.integration.app/docs/use-cases/data-import)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)
- [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)
- [Ai](https://console.integration.app/docs/use-cases/ai)

# Bi-directional Data Sync

There are two main types of bi-directional data sync:

- You push data to external app and then reflect updates back to your app. For example, you create tasks in an external task manager and then refresh their status in your app.
- You import data from external app and let your users update it, with updates being reflected in the original app.

This solution can be assembled from the following components:

- [Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)

Additionally, you may want to keep track of relations between objects in your app and corresponding objects in the external app using [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links).
Alternatively, you can keep these relations in your app's database.

Here is how to assemble the full by-directional sync depending on your use case:

# Continuous Import

Full solution: [Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import)

If you use external app as the source of truth, you should implement the full Continuous Import scenario.

If you only care about the data originated in your app, skip the full import and only implement the part that receives updates.

Additionally, if you keep track of data links using integration.app, you will need to create links when importing records. See details below.

# Data Push

Full solution: [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)

If you use external app as a source of truth, you may skip the "Lookup Data Record" step and always create new records in external app when a new record is created in your app (to avoid creating multiple records in your app that match the same external record).

If you keep track of data links using integration.app, you will need to find a matching external record id when reacting to updates in your app.

# Data Links

When reacting to changes in external app, you need to know which record in your app to update - and the other way around.

You can keep these links in your app's database, or use [Data Links](https://console.integration.app/docs/membrane/interfaces/data-links).

If you choose the latter, you will need to impelment the following pieces of logic, depending on your use case:

- When performing a full import of records from an external app, use [Data Link API](https://console.integration.app/docs/membrane/customers/data-link-table-instances) to find or create links between records in your app and external app.
- When receiving uddates from external app, find the corresponding record using data link and send the found record id alongside the changed record to your app.
- When sending updates to external app, find the corresponding external record using data link and use this ID to update or delete the record in external app (or create a new one if matching ID was not found).

Here is how a simple flow that uses data links to push changes from your app to external app looks like:

Data Push with Data Links![Data Push with Data Links](https://console.integration.app/images/docs/push-changes-to-external-app-with-data-links.png)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

Docs · Integration Console