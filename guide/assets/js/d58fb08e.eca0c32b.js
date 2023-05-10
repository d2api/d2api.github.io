"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[167],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),y=p(r),f=i,m=y["".concat(c,".").concat(f)]||y[f]||l[f]||a;return r?n.createElement(m,o(o({ref:e},u),{},{components:r})):n.createElement(m,o({ref:e},u))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6069:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={title:"global activity history",sidebar_position:2},c=void 0,p={unversionedId:"activities/the-big-scrape",id:"activities/the-big-scrape",title:"global activity history",description:"collecting everyone's activity history",source:"@site/docs/activities/the-big-scrape.md",sourceDirName:"activities",slug:"/activities/the-big-scrape",permalink:"/guide/activities/the-big-scrape",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/activities/the-big-scrape.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"global activity history",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"player activity history",permalink:"/guide/activities/history"},next:{title:"PGCRs",permalink:"/guide/activities/pgcrs"}},u={},l=[{value:"collecting everyone&#39;s activity history",id:"collecting-everyones-activity-history",level:4}],y={toc:l};function f(t){var e=t.components,r=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"collecting-everyones-activity-history"},"collecting everyone's activity history"),(0,a.kt)("p",null,"this is a really big proposal, are you sure?\nwe're talking maybe 35-40 TB of raw data, if you want data from all time,",(0,a.kt)("br",{parentName:"p"}),"\n","or consuming many hundreds of PGCRs per second, ongoing, forever, if you just want to keep up with current activity"),(0,a.kt)("p",null,"the tl;dr here is, PGCRs are incrementing one at a time. you can request",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/1/"},"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/1/"),(0,a.kt)("br",{parentName:"p"}),"\n","then",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/2/"},"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/2/"),(0,a.kt)("br",{parentName:"p"}),"\n","then",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/3/"},"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/3/"),(0,a.kt)("br",{parentName:"p"}),"\n","etc."),(0,a.kt)("p",null,"if you really wanted to. but ",(0,a.kt)("strong",{parentName:"p"},"do")," you want to? that's up to you."),(0,a.kt)("p",null,"if you do this, expect to deal with large gaps in the data, missing instance IDs, times when it seems like they have just stopped being generated, etc."))}f.isMDXComponent=!0}}]);