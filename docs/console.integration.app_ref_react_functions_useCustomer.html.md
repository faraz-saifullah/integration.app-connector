---
url: "https://console.integration.app/ref/react/functions/useCustomer.html"
title: "useCustomer | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useCustomer](https://console.integration.app/ref/react/functions/useCustomer.html)

# Function useCustomer

- useCustomer(

selector:undefined\|string\| [CustomerSelector](https://console.integration.app/ref/react/types/CustomerSelector.html),

):{

customer:undefined\| [Customer](https://console.integration.app/ref/react/types/Customer.html);

accessor:undefined\| [CustomerAccessor](https://console.integration.app/ref/react/classes/CustomerAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html) >;

refreshing:boolean;

create:(data: [CreateCustomerRequest](https://console.integration.app/ref/react/types/CreateCustomerRequest.html))=>Promise<undefined\| [Customer](https://console.integration.app/ref/react/types/Customer.html) >;

patch:(data:Partial< [UpdateCustomerRequest](https://console.integration.app/ref/react/types/UpdateCustomerRequest.html) >)=>Promise<void>;

put:(data: [UpdateCustomerRequest](https://console.integration.app/ref/react/types/UpdateCustomerRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useCustomer.html#usecustomer)





#### Parameters



- selector: undefined\|string\| [CustomerSelector](https://console.integration.app/ref/react/types/CustomerSelector.html)

#### Returns {  customer:undefined\| [Customer](https://console.integration.app/ref/react/types/Customer.html);  accessor:undefined\| [CustomerAccessor](https://console.integration.app/ref/react/classes/CustomerAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [Customer](https://console.integration.app/ref/react/types/Customer.html) >;  refreshing:boolean;  create:(data: [CreateCustomerRequest](https://console.integration.app/ref/react/types/CreateCustomerRequest.html))=>Promise<undefined\| [Customer](https://console.integration.app/ref/react/types/Customer.html) >;  patch:(data:Partial< [UpdateCustomerRequest](https://console.integration.app/ref/react/types/UpdateCustomerRequest.html) >)=>Promise<void>;  put:(data: [UpdateCustomerRequest](https://console.integration.app/ref/react/types/UpdateCustomerRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR