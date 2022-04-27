---
title: API
category: develop
---

## Add GriefDefenderAPI to your project
<CodeGroup>
<CodeGroupItem title="gradle">
```bash
repositories {
    maven { url = 'https://jitpack.io' }
}
dependencies {
	compileOnly 'com.github.bloodmc:GriefDefenderAPI:master'
}
```
</CodeGroupItem>

<CodeGroupItem title="maven">
```bash
    <repositories>
        <repository>
            <id>jitpack.io</id>
            <url>https://jitpack.io</url>
        </repository>
    </repositories>
	<dependencies>
        <dependency>
            <groupId>com.github.bloodmc</groupId>
            <artifactId>GriefDefenderApi</artifactId>
            <version>master</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```
</CodeGroupItem>
</CodeGroup>

## Info
* Build the latest master GD API at https://github.com/bloodmc/GriefDefenderAPI
* Add jar as a `compileOnly` dependency.  (Do not include GD's API in your jar or any of its dependencies as it is provided by GriefDefender)

Note: Latest API snapshots can be found on maven repo https://repo.glaremasters.me/#browse/browse:bloodshot:com%2Fgriefdefender%2Fapi%2F2.0.0-SNAPSHOT  
Note: Maven repo for plugins is `https://repo.glaremasters.me/repository/bloodshot`  
See https://github.com/bloodmc/RealEstate/blob/master/pom.xml#L134-L139 for example

## Plugin Examples using GD's API  

* [GDHooks](https://github.com/bloodmc/GDHooks)
* [RealEstate](https://github.com/bloodmc/RealEstate)