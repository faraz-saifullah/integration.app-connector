---
url: "https://console.integration.app/docs/membrane/interfaces/files"
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

# Files

Engine API works with data in JSON format.

When you need to work with binary data (uploading or downloading files), the data is stored in a separate storage and URI to access it is provided in JSON.

## Files Endpoint

For convenience, integration engine provides a special `/files` endpoint that accepts binary files and returns a pre-signed URL to access them.

You can use it to:

- To download files from external apps: you can use `/files` endpoint in connector code or your custom code, then return URL to access them in the output.
- To upload files to external apps: you can use `/files` endpoint in your code and pass the URL to the input of the code running in the engine.

## Expiration

Files are stored in the engine storage and are available for a limited time. In our cloud version, the files will be available for 1 hour.
In self-hosted version, this time may vary based on how your storage is configured and can last up to 7 days.

## Custom Code Example

Here is an example of a custom code that can run in the engine and download a large file from external app:

```javascript
import axios from 'axios'

export default async function myCustomFunction({externalApiClient, engineApiClient}) {
    const fileResponse = await externalApiClient.makeApiRequest({
        path,
        method: 'get',
        responseType: 'stream', // We recommend using streams to work with large files to avoid memory issues
        returnFullResponse: true, // Return full response to get headers and pass them on to the next request
    })

    const response = await engineApiClient.post('/files',
        fileResponse.data,
        {
            headers: {
                'Content-Length': fileResponse.headers['content-length'],
                'Content-Type': fileResponse.headers['content-type'],
            },
            // Without this, we load the whole file into memory (which can be several GB).
            // https://github.com/axios/axios/issues/1045
            maxRedirects: 0,
        }
    )

    return {
        fileUri: response.downloadUri,
    }
}
```

Integration.app is free to try. It takes just one click to get started.

Login and Try it Yourself

- ### On this page

- [Files Endpoint](https://console.integration.app/docs/membrane/interfaces/files#files-endpoint)
- [Expiration](https://console.integration.app/docs/membrane/interfaces/files#expiration)
- [Custom Code Example](https://console.integration.app/docs/membrane/interfaces/files#custom-code-example)

Docs · Integration Console