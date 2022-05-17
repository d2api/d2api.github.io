"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[510],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,g=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={},u="setting up at Bungie.net",p={unversionedId:"app-setup",id:"app-setup",title:"setting up at Bungie.net",description:"step one is creating an application at Bungie.net. here, specifically//www.bungie.net/en/Application]. you may need to re-click the link after logging in, it tends to dump you at the site root after authenticating",source:"@site/docs/app-setup.md",sourceDirName:".",slug:"/app-setup",permalink:"/guide/app-setup",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/app-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"api-spec",permalink:"/guide/api-spec"},next:{title:"armor-stats",permalink:"/guide/armor-stats"}},s={},c=[{value:"Application Name",id:"application-name",level:3},{value:"Website",id:"website",level:3},{value:"Origin Header",id:"origin-header",level:3},{value:"OAuth fields",id:"oauth-fields",level:2},{value:"OAuth Client Type",id:"oauth-client-type",level:3},{value:"Redirect URL",id:"redirect-url",level:3},{value:"Scope",id:"scope",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-at-bungienet"},"setting up at Bungie.net"),(0,o.kt)("p",null,"step one is creating an application at Bungie.net. here, specifically: ","[https://www.bungie.net/en/Application]",". you may need to re-click the link after logging in, it tends to dump you at the site root after authenticating"),(0,o.kt)("p",null,"don't stress or overthink it: you can change the app's name, you can re-issue its keys, you can create a bunch of different applications. it costs nothing and Bungie won't yell at you for making ten apps, or for never using your keys"),(0,o.kt)("p",null,"some fields you'll see:"),(0,o.kt)("h3",{id:"application-name"},"Application Name"),(0,o.kt)("p",null,"whatever makes you happy. this will display in all caps when someone goes through the process of granting your application access to their game account"),(0,o.kt)("h3",{id:"website"},"Website"),(0,o.kt)("p",null,'this mainly shows up in your application details if someone visits their app history or "authorized apps" page'),(0,o.kt)("h3",{id:"origin-header"},"Origin Header"),(0,o.kt)("p",null,"this is only needed if your application is a website which makes API calls from the page"),(0,o.kt)("p",null,'for security purposes, browsers disallow a page at "mydomain.com" from getting info from "otherdomain.com", unless "otherdomain.com" grants permission. this is called ',(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS"),". the Origin Header field will cause the API to send back a security header allowing your website to get info from Bungie.net"),(0,o.kt)("h2",{id:"oauth-fields"},"OAuth fields"),(0,o.kt)("p",null,"a API key is permission to talk to the destiny 2 API, but OAuth is permission granted by an individual Bungie.net user, to perform certain actions or see certain info. you may not need the following fields."),(0,o.kt)("h3",{id:"oauth-client-type"},"OAuth Client Type"),(0,o.kt)("p",null,"a Public client requires"),(0,o.kt)("h3",{id:"redirect-url"},"Redirect URL"),(0,o.kt)("h3",{id:"scope"},"Scope"))}f.isMDXComponent=!0}}]);