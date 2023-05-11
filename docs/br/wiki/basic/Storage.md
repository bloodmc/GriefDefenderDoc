---
title: Banco de Dados
tag: storage
category: storage
icon: database
---

#### Opções possíveis
**Bancos de dados remotos** - exigem conexão com um servidor de armazenamento  

* MySQL  
* MariaDB (preferido sobre MySQL)  
* PostgreSQL  

#### Arquivos de texto legível e editável  

* HOCON  
A opção padrão é ``storage-method=hocon`` 

**Configurando o banco de dados**  

#### Endereço do banco de dados   
O endereço e a porta do banco de dados. Use o formato `host:porta`.  
Porta padrão do MySQL e MariaDB é 3306  
`address=localhost`

#### Sempre ler e escrever no banco de dados  
:warning: *Essa opção pode ter impactos no desempenho dependendo da maquina hospedada.*    
Ative esta configuração para forçar o GD a sempre ler e gravar no banco de dados.  
Ative esta configuração se precisar compartilhar dados de banco de dados em vários servidores.  
Isso desabilitará o cache de dados de reivindicação integrado do GD, portanto, o desempenho dependerá do banco de dados.  

`always-read-write-db=false`

#### Nome do banco de dados  
`database-name=griefdefender`

#### Hikari para MySQL  
hikari                                           | Valor padrão |
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

#### Senha do banco de dados  
Coloque a senha do seu banco de dados.  
`password="SuaSenha"`

#### Configurações do pool para o banco de dados  
pool-settings                                           | Valor padrão | Valor padrão |
-------------------------------------------------|---------------|---------------|
connection-timeout | 5000 |O número máximo de milissegundos para aguardar uma conexão antes do tempo limite. |
keepalive-time | 0  |  |
max-lifetime   | 30 |  O tempo de vida máximo de uma conexão em milissegundos. |
max-pool-size  | 10 | O tamanho máximo do pool. (Padrão: 10) |
min-idle       | 10 | O número mínimo de conexões ociosas. (Padrão: 10) |

O prefixo para todas as tabelas SQL GriefDefender. (Padrão: 'gd_')  
`table-prefix="gd_"`  

#### Nome do Banco de dados  
O nome de usuário do banco de dados. (Padrão: root)  
`username=root`  
