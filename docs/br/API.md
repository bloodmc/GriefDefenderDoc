---
title: API
---

## Como adicionar a Interface de Programação de Aplicação (API) do GriefDefender como dependência

Nota: Adicione jar como uma dependência `compileOnly`. (Não inclua a API do GD em seu jar ou qualquer uma de suas dependências, pois é fornecida pelo GriefDefender)


### Groovy
```
compileOnly group: 'com.griefdefender', name: 'api', version: '2.1.0-SNAPSHOT'
```

#### Repositório
```
maven 
{
    name = 'griefdefender'
    url = 'https://repo.glaremasters.me/repository/bloodshot'
}
```


### Maven
```
<dependency>
    <groupId>com.griefdefender</groupId>
    <artifactId>api</artifactId>
    <version>2.1.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

#### Repositório
```
<repository>
    <id>griefdefender</id>
    <url>https://repo.glaremasters.me/repository/bloodshot</url>
</repository>
```

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