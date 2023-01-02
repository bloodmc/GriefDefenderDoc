---
title: Sistema de taxas
tag: eco
category: claim
icon: tax
---

## Em geral
A GD fornece um sistema taxas para os proprietários de reivindicações fiscais com base na quantidade de terra que possuem.

Este sistema está desabilitado por padrão. Para habilitar, abra [`global.conf`](/wiki/advanced/Global-Config.html) e defina a configuração `tax-system` para `true`.

## Configuração

### Tempo de aplicação do imposto
Por padrão, os impostos são cobrados dos proprietários de reivindicações em tempo real diariamente às 00:00, horário militar.
Você pode configurar este tempo ajustando a configuração `tax-apply-hour` em [`global.conf`](/wiki/advanced/Global-Config.html).

### Taxa de imposto
Por padrão, os proprietários de reivindicações são cobrados uma taxa fixa de '0,1' em moeda por bloco que possuem.
Por ex. Uma reivindicação de 10 x 10 seria cobrada como "0,1 * 100", que seria um total de "10".
Você pode configurar esta taxa para todos os usuários ajustando `tax-rate` em [`global.conf`](/wiki/advanced/Global-Config.html) em `default-user-options`.

Observação: as reivindicações 2D são cobradas apenas como `comprimento * largura`. A altura não está incluída.
Nota: as reivindicações 3D são cobradas `comprimento * largura * altura`.

### Imposto vencido
Se os proprietários de uma reivindicação não pagarem seus impostos, o GD congelará a reivindicação.
Congelar a reivindicação impede que o titular da reivindicação interaja com a reivindicação até que ele pague o saldo fiscal completo.
Por padrão, isso ocorre após 7 dias de saldo não pago.
Esta configuração pode ser ajustada alterando `tax-expiration` em [`global.conf`](/wiki/advanced/Global-Config.html) em `default-user-options`.

### Exclusão da reivindicação por imposto
Se o proprietário de uma reivindicação não pagar seus impostos após a configuração "expiração de impostos", o GD iniciará uma contagem regressiva para excluir a reivindicação.
Por padrão, isso ocorre 7 dias depois que uma reivindicação está vencida e congelada.
Essa configuração pode ser ajustada alterando o `tax-expiration-days-keep`, que é o valor, em dias, para evitar que uma reivindicação seja excluída após o congelamento.

### Comando de imposto

#### `/gd claim tax`
**Argumentos**: `balance|force|pay <quantia>]`
Usado para gerenciar impostos de uma reivindicação.
Nota: O argumento `force` permite que um administrador pague o saldo de impostos de uma reivindicação para outro jogador.
Nota: Requer plugin de economia.


### Ajustando opções para usuários específicos

Veja [Opções](/br/wiki/basic/Options.html) para ajustar as opções por usuário ou grupo.


## Opções fiscais

Option                                           | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```griefdefender.tax-expiration``` | 7		| Número de dias após o não pagamento de impostos antes que uma reivindicação seja congelada.
```griefdefender.tax-expiration-days-keep``` | 7 		| Número de dias para manter uma reivindicação depois de congelada e antes de ser excluída
```griefdefender.tax-rate``` | 0.1 | O imposto é calculado pelo número de blocos de reivindicação na reivindicação. ```Número de blocos de reivindicação * tax-rate```
