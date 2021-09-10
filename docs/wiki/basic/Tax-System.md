---
title: Tax System
tag: eco
category: claim
icon: tax
---

## General  
GD provides a tax system to tax claim owners based on the amount of land they own.  

This system is disabled by default. To enable, open up `global.conf` and set the `tax-system` setting to `true`.  

## Configuration  

### Tax apply time
By default, taxes are taken from claim owners in real-time daily at 00:00 military time.  
You can configure this time by adjusting the setting `tax-apply-hour` in `global.conf`.  

### Tax rate  
By default, claim owners are charged a flat rate of `0.1` in currency per block they own.  
For ex. A claim that is 10x10 would be charged `0.1 * 100` which would be a total of `10`.  
You can configure this rate for all users by adjusting `tax-rate` in `options.conf` under `default-user-options`.  

Note: 2D claims are only charged `length * width`. Height is not included.  
Note: 3D claims are charged `length * width * height`.  

### Tax past due  
If a claim owners fails to pay his/her taxes then the GD will freeze the claim.  
Freezing the claim stops the claim owner from interacting with their claim until they pay their complete tax balance.  
By default, this occurs after 7 days of an unpaid balance.  
This setting can be adjusted by changing `tax-expiration` in `options.conf` under `default-user-options`.  

### Tax claim deletion  
If a claim owner fails to pay their taxes after configured setting `tax-expiration` then GD will start a countdown to delete the claim.  
By default, this occurs 7 days after a claim is past due and frozen.  
This setting can be adjusted by changing `tax-expiration-days-keep` which is the amount, in days, to prevent a claim from being deleted after frozen.   

### Tax command  

#### `/gd claim tax`
**Arguments**: `balance|force|pay <amount>]`  
Used to manage taxes of a claim.  
Note: The argument `force` allows an admin to pay a claim's tax balance for another player.  
Note: Requires economy plugin.


### Adjusting options for specific users 

See https://github.com/bloodmc/GriefDefender/wiki/Options for adjusting options per user or group.


## Tax options

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.tax-expiration``` | 7		| Number of days after not paying taxes before a claim will be frozen.
```griefdefender.tax-expiration-days-keep``` | 7 		| Number of days to keep a claim after frozen and before being deleted 
```griefdefender.tax-rate``` | 0.1 | Tax is calculated by the number of claimblocks in the claim. ```Number of claimblocks * tax-rate```
