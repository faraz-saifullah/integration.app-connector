---
url: "https://console.integration.app/ref/react/classes/CustomersAccessor.html"
title: "CustomersAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [CustomersAccessor](https://console.integration.app/ref/react/classes/CustomersAccessor.html)

# Class CustomersAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#CustomersAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Customer](https://console.integration.app/ref/react/types/Customer.html), [FindCustomersQuery](https://console.integration.app/ref/react/types/FindCustomersQuery.html), [CreateCustomerRequest](https://console.integration.app/ref/react/types/CreateCustomerRequest.html) >
  - CustomersAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/CustomersAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/CustomersAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/CustomersAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/CustomersAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html\#constructor)

- newCustomersAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [CustomersAccessor](https://console.integration.app/ref/react/classes/CustomersAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html#constructorcustomersaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [CustomersAccessor](https://console.integration.app/ref/react/classes/CustomersAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html\#find)

- find(query?: [FindCustomersQuery](https://console.integration.app/ref/react/types/FindCustomersQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Customer](https://console.integration.app/ref/react/types/Customer.html) >> [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindCustomersQuery](https://console.integration.app/ref/react/types/FindCustomersQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Customer](https://console.integration.app/ref/react/types/Customer.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html\#findall)

- findAll(query?:Omit< [FindCustomersQuery](https://console.integration.app/ref/react/types/FindCustomersQuery.html),"limit">):Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindCustomersQuery](https://console.integration.app/ref/react/types/FindCustomersQuery.html),"limit">

#### Returns Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html\#create)

- create(data: [CreateCustomerRequest](https://console.integration.app/ref/react/types/CreateCustomerRequest.html)):Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html) > [Permalink](https://console.integration.app/ref/react/classes/CustomersAccessor.html#create-1)





#### Parameters



- data: [CreateCustomerRequest](https://console.integration.app/ref/react/types/CreateCustomerRequest.html)

#### Returns Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/CustomersAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/CustomersAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/CustomersAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/CustomersAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR