---
url: "https://console.integration.app/docs/use-cases/ai/import-documents"
title: "Docs · Integration Console"
---

[Integration.app](https://integration.app/)

`` `Ctrl` + `K`

[NPM packages](https://www.npmjs.com/~integration.app) [GitHub organization](https://github.com/integration-app)

- [Data Import](https://console.integration.app/docs/use-cases/data-import)
- [Pushing Data to External Apps](https://console.integration.app/docs/use-cases/data-push)
- [Bi-directional Data Sync](https://console.integration.app/docs/use-cases/bi-directional-sync)
- [Ai](https://console.integration.app/docs/use-cases/ai)
  - [Import Documents](https://console.integration.app/docs/use-cases/ai/import-documents)
  - [Using Tools from External Apps](https://console.integration.app/docs/use-cases/ai/use-tools)
  - [AI Agent](https://console.integration.app/docs/use-cases/ai/ai-agent)
  - [MCP](https://console.integration.app/docs/use-cases/ai/mcp)

# Importing Documents into an LLM-Powered Application

This guide outlines the steps to import documents from external apps and use them in an application powered by large language models (LLMs).

Documents Import![Documents Import](https://console.integration.app/images/docs/document-import-use-case.jpg)

## Start with a Pre-Built Scenario

It is recommended to begin with a pre-built scenario for importing documents as a starting point. You can choose a scenario that best fits your needs:

- [Continuously Import Files and Folders to My App](https://integration.app/scenarios/continuously-import-files-and-folders-to-my-app)
- [Get All Files](https://integration.app/scenarios/get-all-files)
- [Download File](https://integration.app/scenarios/download-file)

Import Files Scenarios![Import Files Scenarios](https://console.integration.app/images/docs/import-files-scenarios.png)

These scenarios let you:

- Get metadata about all the available files/documents in an external app, organized in folders (if supported by a given external app).
- Receive notifications about changes in metadata, such as documents or folders being added, updated, or deleted.
- Download the contents of the selected files/documents.

This lets you implement download of a full set of files/documents user gives you access to. If you need to download only specific files/documents, read the next section.

## Allow User Selection of Documents (optional)

If you need to allow users to select which documents or folders of documents they want to include in the knowledge base, you can use the metadata you get from the previous step to display the list of options to the user.

You have full control over the UI, but you can use one of the pre-built examples as a reference:

- [Continuous import of files](https://examples.integration.app/continuous-import-of-files) displays the hierarchy of files and folders to the user and lets them download specific files.
- _Coming soon..._ \- lets user select specific folders and download all files in them.

Documents Selection UI![Documents Selection UI](https://console.integration.app/images/docs/document-selection-ui.png)

To keep the content up to date, you should react to file changes events and (re-)download affected files when they match the user's selection.

## Download Files and Documents

Multiple scenarios mentioned above have a Flow for downloading files. We recommend downloading documents asynchronously to ensure the ability to handle large files without hitting limits for synchronous API requests.
For increased performance, you can initiate download multiple documents in parallel by launching the download flow with multiple document ids in the input.

## Handle Downloaded Content

Downloaded documents can be of two types:

- Text Documents: If the downloaded document contains text, proceed with further processing.
- Binary Files: If the document is a binary file, it must be converted to text. Use tools like [Pandoc](https://pandoc.org/) or [Unstructured.io](https://unstructured.io/) or other suitable methods for this transformation.

## Embed Text for Further Use

The resulting text from downloaded documents should be embedded and prepared for use in Retrieval-Augmented Generation (RAG) workflows or other knowledge integration purposes.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Start with a Pre-Built Scenario](https://console.integration.app/docs/use-cases/ai/import-documents#start-with-a-pre-built-scenario)
- [Allow User Selection of Documents (optional)](https://console.integration.app/docs/use-cases/ai/import-documents#allow-user-selection-of-documents-optional)
- [Download Files and Documents](https://console.integration.app/docs/use-cases/ai/import-documents#download-files-and-documents)
- [Handle Downloaded Content](https://console.integration.app/docs/use-cases/ai/import-documents#handle-downloaded-content)
- [Embed Text for Further Use](https://console.integration.app/docs/use-cases/ai/import-documents#embed-text-for-further-use)

Docs · Integration Console