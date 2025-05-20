---
url: "https://console.integration.app/ref/react/functions/useScenario.html"
title: "useScenario | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useScenario](https://console.integration.app/ref/react/functions/useScenario.html)

# Function useScenario

- useScenario(

selector:undefined\|string,

):{

scenario:undefined\| [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html);

accessor:undefined\| [ScenarioAccessor](https://console.integration.app/ref/react/classes/ScenarioAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html) >;

refreshing:boolean;

create:(data: [CreateScenarioRequest](https://console.integration.app/ref/react/interfaces/CreateScenarioRequest.html))=>Promise<undefined\| [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html) >;

patch:(data:Partial< [UpdateScenarioRequest](https://console.integration.app/ref/react/interfaces/UpdateScenarioRequest.html) >)=>Promise<void>;

put:(data: [UpdateScenarioRequest](https://console.integration.app/ref/react/interfaces/UpdateScenarioRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useScenario.html#usescenario)





#### Parameters



- selector: undefined\|string

#### Returns {  scenario:undefined\| [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html);  accessor:undefined\| [ScenarioAccessor](https://console.integration.app/ref/react/classes/ScenarioAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html) >;  refreshing:boolean;  create:(data: [CreateScenarioRequest](https://console.integration.app/ref/react/interfaces/CreateScenarioRequest.html))=>Promise<undefined\| [Scenario](https://console.integration.app/ref/react/interfaces/Scenario.html) >;  patch:(data:Partial< [UpdateScenarioRequest](https://console.integration.app/ref/react/interfaces/UpdateScenarioRequest.html) >)=>Promise<void>;  put:(data: [UpdateScenarioRequest](https://console.integration.app/ref/react/interfaces/UpdateScenarioRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR