---
title: global activity history
sidebar_position: 2
---

#### collecting everyone's activity history

this is a really big proposal, are you sure?
we're talking maybe 35-40 TB of raw data, if you want data from all time,  
or consuming many hundreds of PGCRs per second, ongoing, forever, if you just want to keep up with current activity

the tl;dr here is, PGCRs are incrementing one at a time. you can request  
https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/1/  
then  
https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/2/  
then  
https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/3/  
etc.

if you really wanted to. but **do** you want to? that's up to you.

if you do this, expect to deal with large gaps in the data, missing instance IDs, times when it seems like they have just stopped being generated, etc.
