---
url: "https://console.integration.app/docs/connector-builder/api"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Authentication](https://console.integration.app/docs/connector-builder/authentication)
- [API Specification](https://console.integration.app/docs/connector-builder/api)
- [Events](https://console.integration.app/docs/connector-builder/events)
- [Data Collections](https://console.integration.app/docs/connector-builder/data)
- [Operations](https://console.integration.app/docs/connector-builder/operations)
- [Global Webhooks](https://console.integration.app/docs/connector-builder/global-webhooks)
- [Methods](https://console.integration.app/docs/connector-builder/methods)

# API Specification

This document provides a guide on how to work with API specifications in our application.
An API specification is a contract for how software components should interact.
It includes details about endpoints, request/response types, etc.

You can upload or create an API specification for the application. It will allow you:

- Map Operations and Data Collections to the API without entering everything manually.
- Conveniently use "API Request" actions and flow nodes without building requests from scratch.

## Supported API Specifications

Our application supports the following types of API specifications:

- `openapi` (also known as Swagger): This is a standard specification for REST APIs.
You can also import Postman collections as OpenAPI specifications.
- `graphql`: This is a specification for GraphQL APIs. You can often download it from the GraphQL server.

In the following sections, we will cover how to upload an API specification, edit it in bulk, and generate
a new one using our AI-powered API Extractor.

## Uploading API Specification

You can upload an existing API specification from file or download it from a publicly available URL.

The specification should be either in JSON or YAML format.

We support the following specification types:

- OpenAPI 2.0+ (excluding OpenAPI 3.1.0 - under development)
- Swagger 2.0+
- Postman Collection 2.0+

Upon uploading, the specification will be converted into OpenAPI 3.0 format.

## Bulk Editing API Specification

When API specification does not match the actual API in multiple places, you can mass edit it by clicking the "Bulk Edit" button.

You can filter the API operations by path, method, or the contents using [jsonata](https://jsonata.org/) expressions.

Then you can use a jsonata expression to generate a patch for every selected operation.

You can see a preview of the change in the diff viewer.

When satisfied with the result, apply changes.

## Generating API Specification

AI-powered API Extractor of Connector Builder supports transforming API documentation in various formats (html, markdown, plain text) into a
machine-readable API specification ( [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification)).

This feature is in **alpha mode** \- please contact our support team if you want to start using it.

API Extractor consist of three main components (steps):

- **Sources to Snippets** \- extracts API snippets from text (human-readable) documentation.
- **Snippets to Specs** \- transforms API snippets into API specification ( [OpenAPI](https://github.com/OAI/OpenAPI-Specification)).
- **Merge Specs** \- merges multiple API specifications into one.

You are free to start extraction from any steps (it depends on what you have already had).

### Sources to Snippets

There are two ways to upload sources of the API documentation you want to extract:

**Download from URL** \- specify URL to the API documentation you want to extract.
The URL should point to the root of the API documentation.
Extractor will try to find all the nested pages with documentation and then show you the list of them.
You can select which pages you want to upload for Snippets extraction.

Download Source Documentation![Download Source Documentation](https://static.integration.app/docs/connector-builder/download-documentation-source.png)

**Upload from file** \- upload a file(s) with the API documentation you want to extract.

After uploading the sources, you can see the list of them and select which ones you want to extract snippets from.
You can also specify **Parameters** for the extraction process.
Parameters are CSS selectors that help to extract API snippets from the sources.

For example, if you want to extract API Snippets from the [Ashby API Documentation](https://developers.ashbyhq.com/reference/introduction),
you can specify `Container Selector` parameter as `.rm-Article`

Container Selector![Container Selector](https://static.integration.app/docs/connector-builder/container-selector.png)
Then, you can click on **Extract** button and wait for the extraction process to finish.

**Download from URL** and **Upload from file** are available for any steps of the extraction process.

Finally, you can go to the next step - **Snippets to Specs**.

### Snippets to Specs

Here, you will see the list of extracted API snippets.

To extract API specification from snippets, you can specify an optional **Parameter** `Base Uri`, select the necessary
snippets you want to use to extract API specification, and click **Extract** button.

Then, AI-powered Extractor will do other work for you.

Extract API Spec from Snippets![Extract API Spec from Snippets](https://static.integration.app/docs/connector-builder/extract-api-spec.png)

Finally, you can go to the next step - **Merge Specs**.

### Merge Specs

Here, you will see the list of extracted API specifications extracted from snippets.

To merge API Specifications, you can specify an optional **Parameter** `On Duplicate`, select the necessary
specification files you want to merge, and click **Merge** button.

By default, `On Duplicate` is set to `error`. You can set it to `overwrite`.

Merge API Spec![Merge API Spec](https://static.integration.app/docs/connector-builder/merge-api-spec.png)

Click on **Go to API Spec** button to see the merged API specification.

Open API Spec![Open API Spec](https://static.integration.app/docs/connector-builder/open-api-spec.png)

Also, you can use **Merge Specs** step separately from the previous steps when you have multiple API specifications
files for one API documentation. This is a pretty common case when an Application has publicly available API
specification in multiple files.

For example, [Attio API](https://developers.attio.com/openapi) has multiple API specification files.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Supported API Specifications](https://console.integration.app/docs/connector-builder/api#supported-api-specifications)
- [Uploading API Specification](https://console.integration.app/docs/connector-builder/api#uploading-api-specification)
- [Bulk Editing API Specification](https://console.integration.app/docs/connector-builder/api#bulk-editing-api-specification)
- [Generating API Specification](https://console.integration.app/docs/connector-builder/api#generating-api-specification)
  - [Sources to Snippets](https://console.integration.app/docs/connector-builder/api#sources-to-snippets)
  - [Snippets to Specs](https://console.integration.app/docs/connector-builder/api#snippets-to-specs)
  - [Merge Specs](https://console.integration.app/docs/connector-builder/api#merge-specs)

Docs · Integration Console