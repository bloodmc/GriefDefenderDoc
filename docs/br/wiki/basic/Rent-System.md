---
title: Sistema de aluguel
tag: eco
category: claim
icon: rent
---

:warning: O sistema de aluguel está sendo reformulado para uma versão futura. Se você estiver usando uma plataforma Bukkit, é recomendável usar RealEstate no discord :warning: 

![Sistema de aluguel](https://media.discordapp.net/attachments/709505646457913426/709992848963141632/2019-12-18_22.png)

Este novo sistema permitirá que você configure seu pedido de aluguel e ganhe algum dinheiro no caminho.

# Como habilitar

Abra seu arquivo global.conf e na seção economia, você encontrará as seguintes linhas:

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

# Em uso do jogo

Depois que você modificou a configuração corretamente e fez `/gdreload` ou (melhor) reiniciou o servidor, agora você pode estabelecer sua primeira reclamação para ser alugado.

Este sistema atualmente funciona bem para reivindicações Básicas, Urbanas e Subdivididas.

![Placa de aluguel](https://i.imgur.com/sPB7pMs.png)

Para começar a alugar sua reivindicação, você precisa colocar um Placa dentro de uma reivindicação de propriedade específica e preenchê-la usando o seguinte formato:

```
GD
aluguel
<quantidade por dia/hora>
[Tempo mínimo de aluguel] [Tempo máximo de aluguel]
```

### Exemplo 1
```
GD
aluguel
100d
5 30
```
Este exemplo significa que você cobrará um mínimo de ***500*** para iniciar o aluguel (5 x 100) o que dará ao usuário 5 dias já pagos e seu pedido ficará disponível para aluguel por até **30 dias. **

### Exemplo 2
```
GD
aluguel
10h
60
```
Este exemplo significa que você cobrará **10 por hora** e seu pedido ficará disponível para aluguel por até **60 dias.**

### Exemplo 3
```
GD
aluguel
100d
```
Este exemplo significa que você cobrará **100 por dia** e seu pedido estará disponível para aluguel por tempo ilimitado.

**Nota:** A disponibilidade de tempo de aluguel do seu pedido começará a ser verificada assim que você configurar o letreiro, o que significa que se você iniciar um aluguel com um máximo de **30 dias** e uma pessoa começar a alugá-lo em no 5º dia, esse usuário só terá a reivindicação disponível por **25 dias**.

Depois de colocar a placa, você receberá uma mensagem no chat que você precisa ler com atenção e, em seguida, clique em CONFIRMAR.

Se você fez tudo certo, sua placa será atualizado para algo assim: (O layout pode ser diferente devido a atualizações recentes)

![Reivindicação de aluguel iniciada](https://i.imgur.com/e194JUX.png)

Se você deseja cancelar o aluguel da reivindicação, clique com o botão esquerdo do mouse na placa e clique em CONFIRMAR no chat.

Como cliente, para alugar a reivindicação, você pode usar:

```
Clique com o botão direito do mouse na placa: Você o alugará.
Clique com o botão esquerdo na placa: Seu aluguel será cancelado.
```
**IMPORTANTE:** se rent-schematics-restore for verdadeiro, logo após o cancelamento do aluguel, os blocos/entidades/itens serão perdidos e restaurados ao seu estado original, então tome cuidado.

# Command Use
O comando principal para lidar com aluguel é `/claimrent`
A sintaxe é a seguinte
`/claimrent [cancel|info|list|create <rate> [max]]`

### Exemplo 1

Crie um aluguel por $ 10 por hora com um máximo de 1 dia 
`/claimrent create 10h 1`

### Exemplo 2

Crie um aluguel por US$ 10 por hora com aluguéis ilimitados
`/claimrent create 10h`

### Exemplo 3

Cancelar aluguel
`/claimrent cancel`


### Exemplo 4

Listar todos os aluguéis disponíveis
`/claimrent list`


### Exemplo 5

Listar informações de aluguel atuais
`/claimrent info`



## Recursos atuais
* As reivindicações podem ser restauradas usando a opção de esquemas. Se estiver habilitado, tanto o proprietário da reivindicação quanto a pessoa que o aluga receberão uma mensagem de aviso.
* Quando uma pessoa aluga a reivindicação, o proprietário da reivindicação perderá os privilégios dentro dela até que o período de aluguel termine. A pessoa que alugou receberá a permissão _Trust_ dentro da reivindicação e poderá interagir com blocos como portas, alavancas, pistões, placas, etc. Após o término do aluguel, a permissão de confiança será removida automaticamente.
* Tudo funciona automaticamente. O proprietário da reivindicação receberá o dinheiro e o cliente será cobrado a cada vez que você configurou anteriormente.
* Caso o cliente não pague o valor do aluguel, sua permissão será suspensa até que o pagamento seja feito.