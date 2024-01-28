---
title: RealEstate
tag: eco
category: hooks
icon: rent
---

Se você estiver procurando por um plugin de aluguel/locação/venda mais robusto, o RealEstate foi portado para o GriefDefender.

Fonte: [RealEstate](https://github.com/bloodmc/RealEstate)  
Wiki: [Github](https://github.com/EtienneDx/RealEstate/wiki)  

## Placeholder
Placeholder                                           | Descrição | 
-------------------------------------------------| --------------|
```%realestate_claim_rent_amount%```  | Retorna o valor do aluguel da reivindicação
```%realestate_claim_sell_amount%```       |    Retorna o valor de venda da reivindicação
```%realestate_claim_lease_amount%```    |    Retorna o valor do arrendamento da reivindicação

## Config

Settings                                           | Valor Padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
``` AllowAdminClaims ``` | false | Permitir que as reivindicações administrativas sejam usadas pelo RealEstate. |
```AllowTownClaims``` | false | Permitir que as reivindicações da cidade sejam usadas pelo RealEstate. |

## Permissões

Use as permissões acima para ajustar os limites do usuário/grupo. Por padrão, nenhum limite é definido em LP. Se você deseja definir global, use a configuração RE ajustando o seguinte.  

Permissões                                           | Descrição | 
-------------------------------------------------| --------------|
RealEstate.Default.Limit.Lease.Buyer | Quantas reivindicações um jogador pode conceder ao mesmo tempo por padrão. |
RealEstate.Default.Limit.Rent.Buyer | Quantas reivindicações um jogador pode alugar ao mesmo tempo por padrão. |
RealEstate.Default.Limit.Sell.Buyer | Quantas reivindicações um jogador pode comprar no total por padrão. |
RealEstate.Default.Limit.Lease.Owner | Quantas reivindicações um jogador faz para locação ao mesmo tempo por padrãot. |
RealEstate.Default.Limit.Rent.Owner | Quantas reivindicações um jogador faz para alugar ao mesmo tempo por padrão. |
RealEstate.Default.Limit.Sell.Owner | Quantas reivindicações um jogador colocou à venda ao mesmo tempo por padrão. |

## LuckPerms meta

As seguintes opções (LP meta) serão registradas na inicialização.  

LuckPerms meta                                           | Descrição | 
-------------------------------------------------| --------------|
realestate.owner-lease-limit | Quantas reivindicações um jogador pode fazer para locação ao mesmo tempo por padrão. |
realestate.owner-rent-limit | Quantas reivindicações um jogador pode fazer para alugar ao mesmo tempo por padrão. |
realestate.owner-sell-limit | Quantas reivindicações um jogador pode colocar à venda ao mesmo tempo por padrão. |
realestate.buyer-lease-limit | Quantas reivindicações um jogador pode conceder ao mesmo tempo por padrão. |
realestate.buyer-rent-limit | Quantas reivindicações um jogador pode alugar ao mesmo tempo por padrão. |
realestate.buyer-sell-limit | Quantas reivindicações um jogador pode comprar no total por padrão. |