---
title: RealEstate
tag: eco
category: hooks
icon: rent
---

If you are looking for a more robust Rent/Lease/Sell plugin, I have ported GP RealEstate to GriefDefender.

Source: [RealEstate](https://github.com/bloodmc/RealEstate)  
Wiki: [Github](https://github.com/EtienneDx/RealEstate/wiki)  

## Placeholder
Placeholder                                           | Description | 
-------------------------------------------------| --------------|
```%realestate_claim_rent_amount%```  | Returns the claim's rent amount
```%realestate_claim_sell_amount%```       |    Returns the claim's sales value
```%realestate_claim_lease_amount%```    |    Returns the claim's lease amount

## Config

Settings                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
``` AllowAdminClaims ``` | false | Allow admin claims to be used by RealEstate. |
```AllowTownClaims``` | false | Allow town claims to be used by RealEstate. |

## Permissions

Use the above permissions to adjust limits on user/group. By default no limits are set in LP. If you want to set global then use the RE config instead by adjusting the following.  

Permissions                                           | Description | 
-------------------------------------------------| --------------|
RealEstate.Default.Limit.Lease.Buyer | How many claims a player can lease at the same time by default. |
RealEstate.Default.Limit.Rent.Buyer | How many claims a player can rent at the same time by default. |
RealEstate.Default.Limit.Sell.Buyer | How many claims a player can purchase in total by default. |
RealEstate.Default.Limit.Lease.Owner | How many claims a player put up for lease at the same time by default. |
RealEstate.Default.Limit.Rent.Owner | How many claims a player put up for rent at the same time by default. |
RealEstate.Default.Limit.Sell.Owner | How many claims a player put up for sale at the same time by default. |

## LuckPerms meta

The following options (LP meta) will be registered at startup.  

LP meta                                           | Description | 
-------------------------------------------------| --------------|
realestate.owner-lease-limit | How many claims a player can put up for lease at the same time by default. |
realestate.owner-rent-limit | How many claims a player can put up for rent at the same time by default. |
realestate.owner-sell-limit | How many claims a player can put up for sale at the same time by default. |
realestate.buyer-lease-limit | How many claims a player can lease at the same time by default. |
realestate.buyer-rent-limit | How many claims a player can rent at the same time by default. |
realestate.buyer-sell-limit | How many claims a player can purchase in total by default. |