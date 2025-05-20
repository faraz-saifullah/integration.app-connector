---
url: "https://console.integration.app/ref/react/functions/useScreen.html"
title: "useScreen | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useScreen](https://console.integration.app/ref/react/functions/useScreen.html)

# Function useScreen

- useScreen(

selector:string\| [ScreenSelector](https://console.integration.app/ref/react/interfaces/ScreenSelector.html),

):{

screen:undefined\| [Screen](https://console.integration.app/ref/react/interfaces/Screen.html);

accessor:undefined\| [ScreenAccessor](https://console.integration.app/ref/react/classes/ScreenAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >;

refreshing:boolean;

create:(data: [CreateScreenRequest](https://console.integration.app/ref/react/interfaces/CreateScreenRequest.html))=>Promise<undefined\| [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >;

patch:(data:Partial< [UpdateScreenRequest](https://console.integration.app/ref/react/interfaces/UpdateScreenRequest.html) >)=>Promise<void>;

put:(data: [UpdateScreenRequest](https://console.integration.app/ref/react/interfaces/UpdateScreenRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useScreen.html#usescreen)





#### Parameters



- selector: string\| [ScreenSelector](https://console.integration.app/ref/react/interfaces/ScreenSelector.html)

#### Returns {  screen:undefined\| [Screen](https://console.integration.app/ref/react/interfaces/Screen.html);  accessor:undefined\| [ScreenAccessor](https://console.integration.app/ref/react/classes/ScreenAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >;  refreshing:boolean;  create:(data: [CreateScreenRequest](https://console.integration.app/ref/react/interfaces/CreateScreenRequest.html))=>Promise<undefined\| [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >;  patch:(data:Partial< [UpdateScreenRequest](https://console.integration.app/ref/react/interfaces/UpdateScreenRequest.html) >)=>Promise<void>;  put:(data: [UpdateScreenRequest](https://console.integration.app/ref/react/interfaces/UpdateScreenRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR