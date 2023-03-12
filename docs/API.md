## How to add GD API as dependency

::: tabs

@tab:active Groovy(Gradle)
```
compileOnly group: 'com.griefdefender', name: 'api', version: '2.1.0-SNAPSHOT'
```

```
maven 
{
    name = 'griefdefender'
    url = 'https://repo.glaremasters.me/repository/bloodshot'
}
```

@tab Maven
```
<dependency>
    <groupId>com.griefdefender</groupId>
    <artifactId>api</artifactId>
    <version>2.1.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

```
<repository>
    <id>griefdefender</id>
    <url>https://repo.glaremasters.me/repository/bloodshot</url>
</repository>
```

:::

Note: Latest API snapshots can be found on [maven repo](https://repo.glaremasters.me/#browse/browse:bloodshot:com%2Fgriefdefender%2Fapi%2F2.1.0-SNAPSHOT)


## Code Examples

### Check if location is part of a user claim  

```java
final Claim claim = GriefDefender.getCore().getClaimAt(location);

if (claim != null && !claim.isWilderness()) {
    // do your logic
}
```


## Plugin Examples using GD's API  

* [GDHooks](https://github.com/bloodmc/GDHooks)
* [RealEstate](https://github.com/bloodmc/RealEstate)