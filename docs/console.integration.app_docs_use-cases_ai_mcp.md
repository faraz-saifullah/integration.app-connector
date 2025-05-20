---
url: "https://console.integration.app/docs/use-cases/ai/mcp"
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

# Using Integrations through MCP (Model Context Protocol)

Using MCP![Using MCP](https://console.integration.app/images/docs/mcp-guide-overview.jpg)

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) provides a standardized way to connect AI models with different data sources and tools.

This guide explains how to use MCP with Integration App to connect your LLM-powered applications with external SaaS apps.

## Why Use MCP with Integration App?

It saves you a lot of time on implementing glue between your LLM-powered application logic and integrations.

MCP has an actively develeoping ecosystem with plenty of client and server implementations, examples, development tools, and more.
Leveraging a standard removes one more thing you have to think about and implement.

Our integration engine is highly compatible with MCP, so you don't add almost any overhead in terms of abstraction or performance.

## MCP Server

Use our [Official MCP Server](https://github.com/integration-app/mcp-server) for your implementation directly or as an inspiration for your own version of the server.

Our standard implementation lets you connect to one app per server. If you want to integrate with multiple apps, you can launch multiple instances of the server
or change the implementation to expose tools from multiple external apps at once.

## Managing Tools

MCP helps you use tools from external apps. To create and manage tools in Integration App, check out this guide:

#### [Using Tools from External Apps](https://console.integration.app/docs/use-cases/ai/use-tools)

This guide outlines the steps to use tools from external apps in LLM-powered applications.

Tools ( [Actions](https://console.integration.app/docs/membrane/interfaces/actions)) you create through this guide will be automatically exposed through the MCP server.

## MCP Client

You will need to implement an MCP client in your LLM-powered application.
Check out the official [MCP Clients](https://modelcontextprotocol.io/clients) guide to understand how to build one.

Most likely you will have more tools available through our engine than you can fit into a single LLM context.
We recommend implementing a mechanism for filtering down the list of tools used for a specific customer query.

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Why Use MCP with Integration App?](https://console.integration.app/docs/use-cases/ai/mcp#why-use-mcp-with-integration-app)
- [MCP Server](https://console.integration.app/docs/use-cases/ai/mcp#mcp-server)
- [Managing Tools](https://console.integration.app/docs/use-cases/ai/mcp#managing-tools)
- [MCP Client](https://console.integration.app/docs/use-cases/ai/mcp#mcp-client)

Docs · Integration Console