---
url: "https://console.integration.app/ref/react/classes/DataSourceAccessor.html"
title: "DataSourceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html)

# Class DataSourceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#DataSourceAccessor), Expand)

- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html), [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html), [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html) >
  - DataSourceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#get) [put](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#apply) [setup](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#reset)

### Properties

[options](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#constructor)

- newDataSourceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html),

): [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#constructordatasourceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html)

#### Returns [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#get)

- get():Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#get-1)



#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >


### put [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#put)

- put(data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html)):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#put-1)





#### Parameters



- data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html)

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#patch)

- patch(data:Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### apply [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#apply)

- apply(integrationKeys:string\[\]):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#apply-1)





#### Parameters



- integrationKeys: string\[\]

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]>

### setup [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#setup)

- setup():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#setup-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#reset)

- reset():Promise<any> [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#reset-1)



#### Returns Promise<any>


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/DataSourceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#get) [put](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#apply) [setup](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#reset)

Properties

[options](https://console.integration.app/ref/react/classes/DataSourceAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR