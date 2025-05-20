---
url: "https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html"
title: "AppEventSubscriptionAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html)

# Class AppEventSubscriptionAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#AppEventSubscriptionAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html),

[AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html),

[AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html),

[AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html),

>
  - AppEventSubscriptionAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#create) [put](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getpath) [subscribe](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#subscribe)

### Properties

[options](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#constructor)

- newAppEventSubscriptionAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html),

): [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#constructorappeventsubscriptionaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html)

#### Returns [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#get)

- get():Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) > [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#get-1)



#### Returns Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#create)

- create(data?: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)):Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) > [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#create-1)





#### Parameters



- `Optional` data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)

#### Returns Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#put)

- put(data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)):Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) > [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#put-1)





#### Parameters



- data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)

#### Returns Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#patch)

- patch(data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)):Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) > [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#patch-1)





#### Parameters



- data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html)

#### Returns Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### subscribe [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#subscribe)

- subscribe():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#subscribe-1)



#### Returns Promise<void>


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#create) [put](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#getpath) [subscribe](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#subscribe)

Properties

[options](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR