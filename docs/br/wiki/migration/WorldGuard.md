---
title: WorldGuard
---

:warning: Antes de usar o migrador do WorldGuard, faça backup de seus dados (incluindo LuckPerms). É recomendável testar a migração em um servidor de teste antes de aplicar ao servidor principal para garantir que tudo funcione conforme o esperado.

### GriefDefender suporta uma migração de regiões cubóides do WorldGuard. Para migrar para o GriefDefender, execute os seguintes passos

### Limitações atuais
* Suporta apenas regiões cubóides.
* Não suporta regiões que cruzam as fronteiras umas das outras.
* Não suporta bandieras personalizados atualmente. (Suportará em versões futuras)

As seguintes bandeiras do WorldGuard são atualmente suportados pela migração:
```
allowed-cmds
block-break
block-place
block-trampling
blocked-cmds
build
chest-access
chorus-fruit-teleport
creeper-explosion
crop-growth
damage-animals
deny-spawn
enderdragon-block-damage
enderman-grief
enderpearl
entity-item-frame-destroy
entity-painting-destroy
entry
exit
exp-drop
fall-damage
farewell
fire-spread
firework-damage
ghast-fireball
grass-growth
greeting
interact
invincible
item-drop
item-pickup
lava-fire
lava-flow
leaf-decay
lighter
lightning
mob-damage
mob-spawning
mushroom-growth
other-explosion
pvp
ride
sleep
snowman-trail
tnt
use
vehicle-place
vine-growth
water-flow
wither-damage
```

### As bandeiras a seguir não oferecem suporte à migração, mas podem ser manipulados por meio da API do GD
```
deny-message
entry-deny-message
exit-deny-message
exit-override
notify-enter
notify-exit
```

## Etapas de migração
1. Adicione arquivo jar do GriefDefender aos plugins
2. Remova arquivo jar do WorldGuard dos plugins
3. Inicie o servidor pelo menos uma vez para gerar as configurações do GriefDefender.
4. Pare (stop) o servidor
5. Edite global.conf em ./plugins/GriefDefender/
6. Localize a seção
```
# Set to true to enable WorldGuard data migrator.
# Note: Only cuboid regions are supported.
# Note: It is recommended to backup data before using.
worldguard=false
```
7. Definir worldguard para o 'true'
8. Inicie o servidor

Se feito corretamente, o GriefDefender migrará os dados de cada mundo à medida que forem carregados de `plugins/WorldGuard/data/<NomeDoMundo>` para `plugins/GriefDefender`.
O resultado da migração deve aparecer no console durante o processo.