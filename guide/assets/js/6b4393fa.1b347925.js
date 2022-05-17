"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[953],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},p=void 0,u={unversionedId:"investment-scaling",id:"investment-scaling",title:"investment-scaling",description:"weapon stats",source:"@site/docs/investment-scaling.md",sourceDirName:".",slug:"/investment-scaling",permalink:"/guide/investment-scaling",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/investment-scaling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inventory",permalink:"/guide/inventory"},next:{title:"libraries",permalink:"/guide/libraries"}},l={},c=[{value:"weapon stats",id:"weapon-stats",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"weapon-stats"},"weapon stats"),(0,i.kt)("p",null,"the most obvious example of how investment stats work is for weapon magazines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"go here: ","[https://data.destinysets.com/i/InventoryItem:1096206669/StatGroup:770484158]"),(0,i.kt)("li",{parentName:"ul"},"open up ",(0,i.kt)("inlineCode",{parentName:"li"},"\u25b6 6")),(0,i.kt)("li",{parentName:"ul"},"open up ",(0,i.kt)("inlineCode",{parentName:"li"},"\u25b6 displayInterpolation")),(0,i.kt)("li",{parentName:"ul"},"open up ",(0,i.kt)("inlineCode",{parentName:"li"},"\u25b6 0")," through ",(0,i.kt)("inlineCode",{parentName:"li"},"\u25b6 10"))),(0,i.kt)("p",null,"this shows how a ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," magazine stat, gives you 4 shots in your shotgun,",(0,i.kt)("br",{parentName:"p"}),"\n","and a ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," magazine stat, gives you 6 shots,",(0,i.kt)("br",{parentName:"p"}),"\n","and at most, you can fit 8 shots"),(0,i.kt)("p",null,"note how the ranges work: it takes very few stat points to bump 4 up to 5, but a bunch to get 7 up to 8.",(0,i.kt)("br",{parentName:"p"}),"\n","the purpose of investment scaling is to control maximums, minimums, and how hard it is to improve/change stats with mods/perks/barrels, magazines, etc."),(0,i.kt)("p",null,"here's some more information on implementing this kind of thing:",(0,i.kt)("br",{parentName:"p"}),"\n","[https://www.reddit.com/r/DestinyTheGame/comments/d8ahdl/dim_updates_stat_calculation_for_shadowkeep/]"))}d.isMDXComponent=!0}}]);