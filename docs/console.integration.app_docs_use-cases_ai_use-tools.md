---
url: "https://console.integration.app/docs/use-cases/ai/use-tools"
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

# Using Tools from External Apps in LLM-Powered Applications

This guide outlines the steps to use tools from external apps in LLM-powered applications.

## Overview

Most LLMs support tools use via one mechanism or another.

- In OpenAI models, it's called [Function calling](https://platform.openai.com/docs/guides/function-calling) or tools.
- In Google models, it's called [Function calling](https://ai.google.dev/gemini-api/docs/function-calling).
- In Anthropic models, it's called [Tool use](https://docs.anthropic.com/en/docs/build-with-claude/tool-use).

There are also emerging LLM-agnostic ways to use tools, such as [Model Context Protocol](https://modelcontextprotocol.org/).

All these mechanisms work in a similar way and are supported natively by our platform.

Each tool has the following:

- A name
- An optional description.
- Input schema, described as JSONSchema, or in our case a [Data Schema](https://console.integration.app/docs/membrane/references/data-schemas).
- Output schema, described also as a JSONSchema.
- An API endpoint to call the tool.

You can use different building blocks to implement tools: [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations), [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections), [Data Sources](https://console.integration.app/docs/membrane/interfaces/data-sources), [Flows](https://console.integration.app/docs/membrane/interfaces/flows), etc.

In this guide, we'll use the most common way of implementing: **[Actions](https://console.integration.app/docs/membrane/interfaces/actions)**.

Actions are the best way to implement tools for a few reasons:

- Structure of an action is very similar to the structurte of a tool.
- You can use other building blocks inside actions.
- You can implement fully custom tools using your own code through Actions.

## Adding Tools

To add a tool that can be used in your LLM-powered application, simply create an action.

You will need to configure the following:

- **Name** will be used by LLM and end-users to determine if it's the right tool to use.
- **Description** will provide additional context to the LLM and end-users.
- **Input schema** will be used both by LLM to suggest an input for the tool and by end-users to confirm and correct the input.
- **Output schema** will let you determine how to display and/or process the output of the tool.
- **Implementation** determines what the tool does.

### Auto-generating tools

If your application needs a lot of tools, you can auto-generate them from other building blocks such as [Api Operations](https://console.integration.app/docs/membrane/interfaces/api-operations) or [Data Collections](https://console.integration.app/docs/membrane/interfaces/data-collections).

For this, you can use the following logic described in pseudocode:

```python
# List integrations you want to generate tools for
integrations = ['integration1', 'integration2']

for integration in integrations:
   # Get building blocks from the integration that you want to generate tools for
   const apiOperations = integrationApp.get('/integrations/' + integration + '/operations')

   # Filter the building blocks if you don't want to generate tools for all of them

   for apiOperation in apiOperations:
      # Create a tool from the building block
      # See action types documentation to get details on how to create one.
      action = {
         'name': apiOperation.name,
         'description': apiOperation.description,
         'inputSchema': apiOperation.inputSchema,
         'outputSchema': apiOperation.outputSchema,
         'type': 'api-operation',
         'config': {
            'operationKey': apiOperation.key,
         }
      }
```

This approach lets you save a lot of time on creating tools manually while giving you full control over the resulting list of tools.

You can augment this appoach by manually creating missing tools or editing them to fit your needs better.

## Using tools

To use tools in your application, you need to get a list of available tools and send them to your LLM via a corresponding SDK / API.

To get a list of tools/actions, use our Actions API.

### Filtering down tools

In many cases, you will have way more tools available than can fit into the LLM context window comfortably.
In this case, we recommend filtering down the list of tools to only include the ones that are most relevant to the current user or the current task.

The most common way to do this is to generate embeddings for tools, put them into your vector database, and select top X relevant tools based on the user's query.

### Running tools

To run a tool, simply execute the corresponding action:

Javascript

[How to run it in your app](https://console.integration.app/docs/getting-started/front-end/javascript)

Copy

```javascript
await integrationApp
  .connection('{INTEGRATION_KEY}')
  .action('{ACTION_KEY}')
  .run('{INPUT}')
```

Run Now

[log in](https://console.integration.app/login?returnTo=https%3A%2F%2Fconsole.integration.app%2Fdocs%2Fuse-cases%2Fai%2Fuse-tools) to run this example

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/use-cases/ai/use-tools#overview)
- [Adding Tools](https://console.integration.app/docs/use-cases/ai/use-tools#adding-tools)
  - [Auto-generating tools](https://console.integration.app/docs/use-cases/ai/use-tools#auto-generating-tools)
- [Using tools](https://console.integration.app/docs/use-cases/ai/use-tools#using-tools)
  - [Filtering down tools](https://console.integration.app/docs/use-cases/ai/use-tools#filtering-down-tools)
  - [Running tools](https://console.integration.app/docs/use-cases/ai/use-tools#running-tools)

Docs · Integration Console