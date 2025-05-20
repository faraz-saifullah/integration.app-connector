---
url: "https://console.integration.app/docs/use-cases/data-push"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Data Import](https://console.integration.app/docs/use-cases/data-import)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)
- [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)
- [Ai](https://console.integration.app/docs/use-cases/ai)

# Pushing Data to External Apps

In this guide, we will build a few iterations of the data push scenario, increasing the complexity as we go.

To make this guide specific, we will be pushing Contacts to an external app. You can use the same approach for any other type of data.

## Create Data Record

If you need to simply create a data record in external applications, create a "Create Data Record" [Action](https://console.integration.app/docs/membrane/interfaces/actions).

If you want to create one of the standard data models, you can start with a pre-built blueprint, otherwise create one from scratch:

Create Action![Create Action](https://console.integration.app/images/docs/create-create-action.png)

Here is what you'll need to configure in the action:

- **Input Schema** \- specify inputs your applicaiton will provide to create the record.
- **Data Source** \- select where in the external app you want to create a data record. You can use one of our [Universal Data Models](https://console.integration.app/docs/membrane/references/udm) or create a shared [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources) (more on that later).
- **Field Mapping** \- map your input schema to the fields of the record you want to create.

The resulting action will look like this:

Create Contact Action![Create Contact Action](https://console.integration.app/images/docs/create-contact-action.png)

## Find or Create

If you want to check if a matching data record exists in the external app before creating it, you should create a [Flow](https://console.integration.app/docs/membrane/interfaces/actions) with three steps:

- Trigger - we will use an API trigger for simplicity.
- Lookup Data Record - to find an existing data record by one of its fields.
- Create Contact - we will re-use the "Create Contact" action we've created in the previous step.

The flow will look like this:

Push Contact Flow![Push Contact Flow](https://console.integration.app/images/docs/push-contact-flow-1.png)

Lookup Data Record will search for an existing contact by email:

Push Contact Flow![Push Contact Flow](https://console.integration.app/images/docs/lookup-contact-node.png)

Then it will route the execution depending on whether a contact was found.

Create Contact step will use the same action we've created before:

Run "Create Contact" Action![Run "Create Contact" Action](https://console.integration.app/images/docs/run-action-create-contact.png)

## Data Source

Since we use data collection in two places (lookup contact and create contact), it makes sense to create a [Data Source](https://console.integration.app/docs/membrane/interfaces/data-sources):

Create Data Source![Create Data Source](https://console.integration.app/images/docs/create-data-source-contacts.png)

and use it in both places:

Use Data Source![Use Data Source](https://console.integration.app/images/docs/use-data-source-contacts.png)

## Field Mapping

Similarly to Data Source, it may be a good idea to create a [Field Mapping](https://console.integration.app/docs/membrane/interfaces/field-mappings). It will let you:

- Use the same mapping in multiple places (i.e. if you want to update contact if it exists, not just create a new one).
- Let your customers configure the field mapping for their unique setup.

If you decide to create a Field Mapping, use it in the Create Contact action:

Use Data Source![Use Data Source](https://console.integration.app/images/docs/use-field-mapping-push-contact.png)

## Pushing Related Objects

Let's say you want to push a Note along with the Contact and associate it with the contact.

For this, you can add another "Create Data Record" node to the flow:

Create Contact and Note![Create Contact and Note](https://console.integration.app/images/docs/create-contact-and-note.png)

This flow has two changes compared to the previous version:

- Create Note node was added.
- Execution path with existing contact found was linked to the new node. Now note will be created regardless of whether we created a contact.

To associate Note with the correct contact, we need to set Contact Id field. This ID can come from two places: `Lookup Contact` or `Create Contact` nodes.
To account for that, we will use "First Not Empty" formula and let it choose the variable to use:

Create Contact and Note![Create Contact and Note](https://console.integration.app/images/docs/create-note-node.png)

## Reacting to Events in Your App

Depending on your use case, you may want to push changes (create, update, or delete records) to an external app based on events in your app rather than making explicit API calls to launch actions or flows.

To do this, you can:

- Create one or more [App Events](https://console.integration.app/docs/membrane/interfaces/internal-events) that are triggered when changes happen in your app.
- Modify the flow(s) to start with App Event trigger instead of (or additinally to) API trigger.

Here is how the resulting flow may look like:

Create Contact from Event![Create Contact from Event](https://console.integration.app/images/docs/create-contact-from-event.png)

This flow can be triggered by API or when an event happens in your app.

You can implement similar flows for updating or deleting records.

## Extending Functionality

After you've pushed data to an external app, you may want to receive updates from it. Check out [Continuous Data Import](https://console.integration.app/docs/use-cases/data-import/continuous-import).

# Live Examples

- [Push Companies to CRM](https://examples.integration.app/push-companies-to-a-crm)

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Create Data Record](https://console.integration.app/docs/use-cases/data-push#create-data-record)
- [Find or Create](https://console.integration.app/docs/use-cases/data-push#find-or-create)
- [Data Source](https://console.integration.app/docs/use-cases/data-push#data-source)
- [Field Mapping](https://console.integration.app/docs/use-cases/data-push#field-mapping)
- [Pushing Related Objects](https://console.integration.app/docs/use-cases/data-push#pushing-related-objects)
- [Reacting to Events in Your App](https://console.integration.app/docs/use-cases/data-push#reacting-to-events-in-your-app)
- [Extending Functionality](https://console.integration.app/docs/use-cases/data-push#extending-functionality)

Docs · Integration Console