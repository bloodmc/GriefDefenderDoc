---
title: Tipos de reivindicação
tag: Claim
category: claim
icon: type
---

_Esta é uma página de trabalho em andamento que cobrirá todos os tipos de reivindicação em GD - reivindicações básicas, de subdivisão, cidades e administrativa._

## Tipos de reivindicação
Existem quatro tipos de reivindicação de usuário: admin, cidade, básica e subdivisão, cada uma com um modo 2D e 3D. Para alternar entre os tipos, use `/adminclaims` (administrativa), `/townclaims` (cidade) e `/basicclaims` (básica). Para alternar para o modo de subdivisão, use `/claimsubdivide` (subdividir). Todos os três tipos de reivindicação principais oferecem suporte a reivindicação filhas diretas (subdivisões) - Cidade, Admin e Básica.

As reivindicações do administrador não têm limitações de tamanho e bandeiras diferentes em comparação com as reivindicações básicas que os jogadores normais podem fazer. Cidades também podem ser feitas por jogadores e suporta a criação de reivindicações básicas dentro das reivindicações da cidade. Reivindicações básicas são o tipo de reivindicação principal para os jogadores e podem oferecer suporte ao gerenciamento de bandeiras de reivindicação do próprio jogador. Para obter mais informações, visite nossa página de [permissão](https://github.com/bloodmc/GriefDefender/wiki/Permissions), que o ajudará a atribuir as permissões adequadas.

### Básica

As reivindicação básicas são o tipo de declaração padrão usado para usuários.

Uma declaração básica tem os seguintes recursos

* Restrição de tamanho 5x5 no modo 2D. Restrição de tamanho 5x5x5 no modo 3D.
* Pode ser vendido, alugado ou transferido para outro jogador.
* Requer blocos de reivindicação.

Este é o modo de tipo de reivindicação padrão ao equipar a ferramenta de reivindicação (minecraft:golden_shovel).
Nota: Use `/basicclaims` ou `/gd mode basic` para alternar para este modo de tipo de declaração.

### Subdivisão

As reivindicações de subdivisão são usadas para subdividir as reivindicações de nível superior, como básico/administrador/cidade em áreas menores.

Uma declaração de subdivisão tem os seguintes recursos

* Restrição de tamanho 1x1 no modo 2D. Restrição de tamanho 1x1x1 no modo 3D.
* Pode ser vendido, alugado ou transferido para outro jogador.
* Não requer blocos de reivindicação quando criado pelo proprietário.

### Administrativa

As reivindicações administrativas são a ferramenta administrativa por excelência. Eles podem ser sobrepostos a qualquer tipo de declaração para impor bandeira. Para criar uma reivindicação administrativa, é necessária a permissão `griefdefender.admin.claim.command.admin-mode`. No entanto, observe que `griefdefender.admin` é recomendado - ele permitirá o gerenciamento das reivindicações do tipo administrativa.

Uma declaração de administrador tem os seguintes recursos

* Sem restrições de tamanho.
* Não custa nada para criar.
* Pode ser criado em torno de qualquer reivindicação existente.
* Pode ser alugado.
* Usado apenas por administradores.

Nota: Use `/adminclaims` ou `/gd mode admin` para alternar para este modo de tipo de declaração.

### Reivindicações da cidade

Reivindicações de cidade são o terceiro tipo de reivindicação de jogador apresentado ao GriefDefender. Ao segurar a pá dourada, use `/townclaims` para alternar para o modo de reivindicação da cidade. Uma vez criadas, as reivindicações da cidade podem abrigar outras reivindicações básicas, bem como subdivisões para reivindicações básicas ou administrativas.

Uma reivindicação de cidade tem as seguintes capacidades

* Restrição de tamanho 32x32 no modo 2D. Restrição de tamanho 32x32x32 no modo 3D.
* Requer blocos de reivindicação.
* Suporta reivindicações básicas dentro.
* Um limite de criação de 1, o que significa que você só pode criar 1 cidade por padrão.
Nota: Isso pode ser ajustado alterando `griefdefender.create-limit` para um valor maior que 1 com o contexto `gd_claim_default=town`.

### Reivindicação da região selvagem

A reivindicação de região selvagem é uma reivindicação administrativa. Ele é criado automaticamente no primeiro carregamento mundial e usa qualquer espaço não reivindicado por um usuário. Funciona como qualquer outra reivindicação onde você pode atribuir bandeiras e opções a ela. Por padrão, todas as ações são permitidas no deserto.