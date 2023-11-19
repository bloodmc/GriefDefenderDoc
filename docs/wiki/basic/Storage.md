---
title: Storage
tag: storage
category: storage
icon: database
---

::: tip Useful links
[Permissions](/wiki/Permissions.html)/[LuckPerms](/wiki/Permissions.html#luckperms)  
Where are the files stored  
[Types](/wiki/basic/Claim-Management.html#types-1)/[Claim Groups](/wiki/basic/Claim-Management.html#typos-2)  
:::

### Possible Options
**Remote Databases** - require connection to a storage server  

* MySQL  
* MariaDB (preferred over MySQL)  
* PostgreSQL  
* SQLite  

### Readable and editable text files  

* [HOCON](/wiki/#hocon)  
The default option is `storage-method=hocon`  

**Configuring the database**  

### Database Address   
The database address and port. Use format `host:port`.  
MySQL and MariaDB default port to 3306 
`address=localhost`

### Always read and write to the database  
:warning: *This option may have performance impacts depending on the hosted machine.*    
Enable this setting to force GD to always read and write from database.  
Enable this setting if you need to share database data across multiple servers.  
This will disable GD's built-in claim data cache so performance will depend on database.  
`always-read-write-db=false`  

### Database Name  
`database-name=griefdefender`

### Hikari for MySQL  
hikari                                           | Default Value |
-------------------------------------------------|---------------|
alwaysSendSetIsolation | false | 
cacheCallableStmts | true |
cachePrepStmts | true |
cacheResultSetMetadata | true |
cacheServerConfiguration | true |
elideSetAutoCommits | true |
maintainTimeStats | false |
prepStmtCacheSize | 250 |
prepStmtCacheSqlLimit | 2048 |
rewriteBatchedStatements | true |
useLocalSessionState | true |
useServerPrepStmts | true |

### Load Claims Asynchronous
Whether database claims should be loaded asynchronous during server startup. (Default: true)  
Set setting to 'false' if having issues with players joining before claims have fully loaded.  
`load-claims-async=true`

### Database Password   
Enter your database password.  
`password="YourPassword"`

### Pool settings for the database  
pool-settings                                           | Default value | Description |
-------------------------------------------------|---------------|---------------|
connection-timeout | 5000 | The maximum number of milliseconds to wait for a connection before timeout. |
keepalive-time | 0  |  |
max-lifetime   | 30 |  The maximum lifetime of a connection in milliseconds. |
max-pool-size  | 10 | The maximum pool size. (Default: 10) |
min-idle       | 10 | The minimum number of idle connections. (Default: 10) |

The prefix for all GriefDefender SQL tables. (Default: 'gd_')  
`table-prefix="gd_"`  

### Database Name  
The database username. (Default: root)  
`username=root`  
