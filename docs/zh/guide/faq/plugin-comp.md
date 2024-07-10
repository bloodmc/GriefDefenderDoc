---
title: Resolves issues with other plugins
tag: faq
category: faq
---

## 1. Solving Pl-hide-pro callback issue

In commands section, add  
`- plugin:GriefDefender`  

If you want to release the suggestions, then you have to configure them one by one, in the `tabcomplete` of pl-hide-pro  
You can also add in `tabcomplete`  
`- plugin:GriefDefender` to release all command suggestions.  

## 2. How to edit the GriefDefender invalid command message?

To edit the default message "Unknown Command, please type /help"   

edit the `acf-core_en.properties` file inside the shaded jar in `.\plugins\GriefDefender\lib\co\aikar\acf-core\0.5.1-SNAPSHOT\`
