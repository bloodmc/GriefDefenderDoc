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
* Build the latest master GD API at https://github.com/GriefDefenderAPI
* Add jar as a `compileOnly` dependency.  (Do not include GD's API in your jar or any of its dependencies as it is provided by GriefDefender)
* Make sure to relocate the following if used via GD API
  *  `com.flowpowered` to `com.griefdefender.lib.flowpowered`  
  *  `net.kyori.event` to `com.griefdefender.lib.kyori`  
Note: If you make use of any API methods that accepts a kyori component as parameter then you will need to relocate adventure too. However the above relocations are the least invasive.  

Note: Latest API snapshots can be found on maven repo https://repo.glaremasters.me/#browse/browse:bloodshot:com%2Fgriefdefender%2Fapi%2F2.0.0-SNAPSHOT

See the official GD addon https://github.com/bloodmc/GDHooks to learn how to create a plugin for use with GD's API.