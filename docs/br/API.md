---
title: API
---

## Como adicionar API do GriefDefender como dependência

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

Nota: As snapshots mais recentes da API podem ser encontrados no [repositório maven](https://repo.glaremasters.me/#browse/browse:bloodshot:com%2Fgriefdefender%2Fapi%2F2.1.0-SNAPSHOT)


## Exemplos de código

### Verifique se a localização faz parte de uma reivindicação do jogador

```java
final Claim claim = GriefDefender.getCore().getClaimAt(location);

if (claim != null && !claim.isWilderness()) {
    // faça a sua lógica
}
```


## Exemplos de plugins usando a API do GD

* [GDHooks](https://github.com/bloodmc/GDHooks)
* [RealEstate](https://github.com/bloodmc/RealEstate)