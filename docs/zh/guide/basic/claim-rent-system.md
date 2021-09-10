---
title: Rent System
category: Economy
tags: rent
icon: view
---

![Rent System](https://media.discordapp.net/attachments/709505646457913426/709992848963141632/2019-12-18_22.png)

This new system will allow you to set your claim up for rent and earn some money on the way. 

# How to enable it

Open your global.conf file and under economy section, you will find the following lines:

```
        # The specific hour in day to attempt to get owed claim rent balances from delinquent renters. Note: This uses military time and accepts values between 0-23. Default: 0
        rent-delinquent-task-apply-hour=0
        # Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to.
        # Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want.
        rent-max-time-limit=100
        # Controls which day a player should start to receive warnings about their rented claim nearing expiration. 
        # Ex. If set to '5', this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration.
        # Note: This only applies if the owner has 'rent-restore' option enabled and the rent owner sets a max.
        rent-restore-day-warning=5
        # Controls whether rented admin claims will use a schematic for restoration.
        # Note: If set, the claim will create a schematic on rental start and restore it back when finished.
        # Note: This ONLY applies to rentals with a max date set.
        rent-schematic-restore-admin=false
        # Whether rent signs are enabled.
        rent-sign=false
        # Controls whether the rent system is enabled. Note: This is currently experimental, use with caution.
        rent-system=false
        # The interval in minutes for checking claim rent payments that are due. Default: 1. Set to 0 to disable.
        rent-task-interval=1
        # The amount of transactions to keep for history. Default: 60
        rent-transaction-log-limit=60
        # Whether sell signs are enabled.
        sell-sign=false
        # The interval in minutes for updating sign data. Default: 5. Set to 0 to disable.
        sign-update-interval=5
```

# In Game Use

After you have properly modified the config and did `/gdreload` or (better) restarted the server, now you can establish your first claim to be rented.

This system currently works fine for Basic, Town and Subdivided claims.

![Renting Sign](https://i.imgur.com/sPB7pMs.png)

In order to start renting your claim, you need to put a sign inside a specific owned claim, and fill it using the following format:

```
GD
rent
<amount per day/hour>
[Min rent time] [Max rent time]
```

### Example 1
```
GD
rent
100d
5 30
```
This example means that you will charge a minimum of ***500*** to start the rental (5 x 100) which will give the user 5 days already paid and your claim will be available for rent up to **30 days.**  

### Example 2
```
GD
rent
10h
60
```
This example means that you will charge **10 per hour** and your claim will be available for rent up to **60 days.**

### Example 3
```
GD
rent
100d
```
This example means that you will charge **100 per day** and your claim will be available for rent with unlimited time.

**Sidenote:** The rent time availability of your claim will start ticking as soon as you set up the sign, which means that if you start a rental with a max of **30 days** and a person starts renting it on the 5th day, that user will only have the claim available for **25 days**.

After you place the sign, you will receive a message in chat that you need to read carefully, and then, click on CONFIRM.

If you did everything ok, your sign will be updated to something like this: (Layout may be different due to recent updates)

![Rent Claim Started](https://i.imgur.com/e194JUX.png)

If you want to cancel the claim rental, left-click the sign and click CONFIRM in chat.

As a customer, in order to rent the claim, you can use:

```
Right Click the sign: You will rent it. 
Left Click the sign: Your rent will be canceled.
```
**IMPORTANT:** if rent-schematics-restore is true, right after Canceling the rent, the blocks/entities/items will be lost and restored to its original state, so be careful.

# Command Use
The main command for handling rent is `/claimrent`  
Syntax is as follows  
`/claimrent [cancel|info|list|create <rate> [max]]`

### Example 1

Create a rental for $10 per hour with a maximum of 1 day  
`/claimrent create 10h 1`

### Example 2

Create a rental for $10 per hour with unlimited rentals  
`/claimrent create 10h`

### Example 3

Cancel rental  
`/claimrent cancel`


### Example 4

List all available rentals  
`/claimrent list`


### Example 5

List current rental info  
`/claimrent info`



## Current Features
* Claims can be restored using schematics option. If this is enabled, both the claim owner and the person renting it will receive a warning message.
* When a person rents the claim, the owner claim will lose the privileges inside it until the rent period is over. The person who rented it will get the _Trust_ permission inside the claim and will be able to interact with blocks like doors, levers, pistons, plates, etc. After the rental is finished, the trust permission will be automatically removed.
* Everything works automatically. Claim owner will received the money and the customer will be charged every specific time you previously configured.
* If the customers fails to pay the rental amount, their permission will be suspended until the payment is done.