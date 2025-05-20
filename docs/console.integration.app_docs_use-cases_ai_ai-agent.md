---
url: "https://console.integration.app/docs/use-cases/ai/ai-agent"
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

# Building an AI Agent with Integration App

## Overview

This guide explains how to build an AI agent with Integration App. Agents leverage the Model Control Protocol (MCP) to empower an LLM model of your choice with **tools** generated from Integration App actions.

The agent can use tools to interact with external applications and services via a user-friendly chat interface.

Architecture![Architecture](https://console.integration.app/images/docs/MCP_agent_example.jpg)

## Start with Actions

AI agents use **tools** to interact with external systems. This example generates tools from [Integration App Actions](https://console.integration.app/docs/membrane/interfaces/actions) via an [MCP Server](https://console.integration.app/docs/use-cases/ai/mcp). So, to start, you will need to add some actions in your workspace if you don’t already have any:

- [Create Actions](https://console.integration.app/docs/membrane/interfaces/actions)

Be sure to configure the actions with the following:

- **Name:** Will be used by LLM to determine if it's the right action to use.
- **Input schema:** will be used by LLM to suggest an input for the action or ask for the required input fields from the user, if not given.

Any action from your workspace (that is configured for a [connection](https://console.integration.app/docs/membrane/apps/connections)) will be automatically exposed to the MCP server.

For more on generating tools, or generating tools from other building blocks, see [here](https://console.integration.app/docs/use-cases/ai/use-tools).

## MCP Server

MCP Servers are lightweight programs that each expose specific capabilities through the standardized Model Context Protocol. One of the three main capabilities that an MCP server can exposes is tools- functions that can be called by the LLM (with user approval).

Visit [this GitHub repository](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) to access our remote implementation of the MCP Server.

To run the server, follow the instructions in this GitHub repository:

- [MCP Server (SSE)](https://github.com/integration-app/mcp-server)

Once the SSE server is running (either locally or fully deployed), MCP Clients can connect to it via the MCP endpoint such as:

```
https://localhost:3000//sse?token=YOUR_TOKEN_HERE

```

## MCP Host and Client

MCP Clients are contained within ‘Hosts’ (applications that are connected to LLM’s, like our example provided below). Clients allow the connected LLM to communicate with an MCP Server.

This repository contains an example of an AI Agent ‘Host’ application that uses an SSE Client to connect to the SSE Server that we spun up in the previous section (or any SSE MCP Server):

- [Chat application example](https://github.com/integration-app/MCP-chat-example)

The ‘agent.js’ file in the above example shows how to initiate an MCP Client, connect to an MCP server, and then pass the exposed tools to the connect LLM along with user input from a chat box.

If you wish to create your own MCP Client, you can adapt our example or reference these official resources:

- [MCP Client Developers](https://modelcontextprotocol.io/quickstart/client)
- [Example MCP Clients](https://modelcontextprotocol.io/clients)

Our MCP server can also be connected to clients like Claude Desktop ( [stdio transport](https://github.com/integration-app/mcp-server) only unless you have MAX plan or higher), Cursor.io, and MCP testing applications like the [MCP inspector](https://modelcontextprotocol.io/docs/tools/inspector).

To use with Claude or Cursor, edit their MCP configuration file like so:

```
{
    "mcpServers": {
      "server-name": {
        "url": "https://localhost:3000//sse?token=YOUR_TOKEN_HERE"
      }
    }
  }

```

Our client example uses a popular agent framework called [Langchain](https://github.com/langchain-ai/langchainjs). The documentation and MCP adapter for Langchain can be found here:

- [Langchain MCP Documentation](https://langchain-ai.github.io/langgraph/agents/mcp/)
- [Langchain MCP Adapter](https://github.com/langchain-ai/langchainjs-mcp-adapters)

## Troubleshooting

1. **Tool/Action Schema Errors**
   - Ensure that actions are configured with the necessary and desired input/output schemas
     - For example, creating a Hubspot contact requires at least an email field to be defined in the input schema.
     - You may wish to include more field in the input schema, such as first last name, phone number, etc.
   - [Test](https://console.integration.app/docs/membrane/interfaces/actions) the actions with connected apps in the “Test Action” pane of an Action page
2. **Connection Issues**
   - Verify the MCP server URL
     - Ensure that the server is running and that the URL is configured with a valid Integration App token.

     - To test that the server is running, you could test it with a simple curl request to the /sse endpoint:


       ```
       curl -v "http://localhost:3000/sse?token=YOUR_TOKEN"

       ```
3. **LLM Authentication Issues**
   - Verify that you are using valid LLM API keys from your OpenAI or Anthropic account

   - Ensure that you are invoking an available model

   - In the above client example, LLM API keys are stored as environment variables. A .env file in the client application should look like:


     ```
     OPENAI_API_KEY= your_key_here
     ANTHROPIC_API_KEY= your_key_here
     LLM_PROVIDER=anthropic
     LLM_MODEL=claude-3-opus-20240229

     ```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Overview](https://console.integration.app/docs/use-cases/ai/ai-agent#overview)
- [Start with Actions](https://console.integration.app/docs/use-cases/ai/ai-agent#start-with-actions)
- [MCP Server](https://console.integration.app/docs/use-cases/ai/ai-agent#mcp-server)
- [MCP Host and Client](https://console.integration.app/docs/use-cases/ai/ai-agent#mcp-host-and-client)
- [Troubleshooting](https://console.integration.app/docs/use-cases/ai/ai-agent#troubleshooting)

Docs · Integration Console