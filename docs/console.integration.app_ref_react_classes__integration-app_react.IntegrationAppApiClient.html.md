---
url: "https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html"
title: "IntegrationAppApiClient | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

# Class IntegrationAppApiClient

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#@integration-app/react.IntegrationAppApiClient))

- IntegrationAppApiClient
  - [IntegrationAppClient](https://console.integration.app/ref/react/classes/IntegrationAppClient.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#constructor)

### Methods

[setCredentials](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#setcredentials) [getToken](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#gettoken) [get](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#get) [post](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#post) [put](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#put) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#patch) [delete](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#delete) [getEmbedUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#getembeduri)

### Properties

[apiUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#apiuri) [uiUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#uiuri) [token?](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#token) [fetchToken?](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#fetchtoken)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#constructor)

- newIntegrationAppApiClient(

\_\_namedParameters?: [IntegrationAppClientOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.IntegrationAppClientOptions.html),

): [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html) [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#constructorintegrationappapiclient)





#### Parameters



- `Optional`\_\_namedParameters: [IntegrationAppClientOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.IntegrationAppClientOptions.html)

#### Returns [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

## Methods

### setCredentials [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#setcredentials)

- setCredentials(credentials:any):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#setcredentials-1)





#### Parameters



- credentials: any

#### Returns Promise<any>

### getToken [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#gettoken)

- getToken():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#gettoken-1)



#### Returns Promise<string>


### get [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#get)

- get(

uri:string,

queryParams?:Record<string,any>,

options?:AxiosRequestConfig<any>,

):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#get-1)





#### Parameters



- uri: string
- `Optional` queryParams: Record<string,any>
- `Optional` options: AxiosRequestConfig<any>

#### Returns Promise<any>

### post [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#post)

- post(uri:string,data?:any,options?:AxiosRequestConfig<any>):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#post-1)





#### Parameters



- uri: string
- `Optional` data: any
- `Optional` options: AxiosRequestConfig<any>

#### Returns Promise<any>

### put [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#put)

- put(uri:string,data?:any,options?:AxiosRequestConfig<any>):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#put-1)





#### Parameters



- uri: string
- `Optional` data: any
- `Optional` options: AxiosRequestConfig<any>

#### Returns Promise<any>

### patch [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#patch)

- patch(uri:string,data?:any,options?:AxiosRequestConfig<any>):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#patch-1)





#### Parameters



- uri: string
- `Optional` data: any
- `Optional` options: AxiosRequestConfig<any>

#### Returns Promise<any>

### delete [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#delete)

- delete(uri:string,data?:any,options?:AxiosRequestConfig<any>):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#delete-1)





#### Parameters



- uri: string
- `Optional` data: any
- `Optional` options: AxiosRequestConfig<any>

#### Returns Promise<any>

### getEmbedUri [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#getembeduri)

- getEmbedUri(

page:string,

pageParams?:Record<string,any>,

options?:{embedMode:"isolated-embed"\|"popup-embed"},

):Promise<string> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#getembeduri-1)





#### Parameters



- page: string
- `Optional` pageParams: Record<string,any>
- `Optional` options: {embedMode:"isolated-embed"\|"popup-embed"}

#### Returns Promise<string>

## Properties

### apiUri [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#apiuri)

apiUri:string

### uiUri [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#uiuri)

uiUri:string

### `Optional` token [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#token)

token?:string

### `Protected` `Optional` fetchToken [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html\#fetchtoken)

fetchToken?:()=>Promise<string>

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#constructor)

Methods

[setCredentials](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#setcredentials) [getToken](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#gettoken) [get](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#get) [post](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#post) [put](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#put) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#patch) [delete](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#delete) [getEmbedUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#getembeduri)

Properties

[apiUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#apiuri) [uiUri](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#uiuri) [token](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#token) [fetchToken](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html#fetchtoken)

MMNEPVFCICPMFPCPTTAAATR