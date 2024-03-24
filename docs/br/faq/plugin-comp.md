---
title: Resolve problemas com outros plugins
tag: faq
category: faq
---

## 1. Resolvendo o problema de callback do Pl-hide-pro

Na seção de commands, adicione  
`- plugin:GriefDefender`  

Caso queira liberar as sugestões, então deverá configurá-las uma a uma, no  
`tabcomplete` do pl-hide-pro  
Você também pode adicionar em `tabcomplete`  
`- plugin:GriefDefender` para liberar todas as sugestões de comandos.  

## 2. Como editar a mensagem de comando invalido do GriefDefender?
Para editar a mensagem padrão "Unknown Command, please type /help"  
  
Edite o arquivo `acf-core_en.properties` dentro da pasta `.\plugins\GriefDefender\lib\co\aikar\acf-core\0.5.1-SNAPSHOT\`