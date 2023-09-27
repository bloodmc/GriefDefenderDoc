---
title: Tags
tag: misc
category: Misc
icon: tag
---

Um `Tag` é um novo sistema introduzido no Minecraft 1.13 que permite aos usuários agrupar um ou mais itens, blocos e identificadores de entidade em um único grupo conhecido como tag. GriefDefender se integra ao sistema de tags e expõe todas as tags disponíveis como contextos que podem ser aplicados com uma bandeira ou opção.

Por exemplo, digamos que você queira permitir a interação com os seguintes placas permanentes

* oak_sign, spruce_sign, birch_sign, acacia_sign, jungle_sign, dark_oak_sign, crimson_sign, warped_sign 

Sem tags, você teria que criar uma bandeira que segmente cada identificador de placa, assim por meio do comando de bandeira

```
/cf interact-block-secondary oak_sign true
/cf interact-block-secondary spruce_sign true
/cf interact-block-secondary birch_sign true
etc..
```

Isso se tornaria tedioso muito rapidamente e atrapalharia suas permissões.

Com o sistema de tags, você pode usar a tag entregue para todos os placas permanentes chamados [Veja a página](https://minecraft.wiki/w/Tag)

Então os comandos acima se tornariam um único comando

```
/cf interact-block-secondary #standing_signs
```

Isso dá ao usuário extrema flexibilidade para proteger não apenas uma coisa, mas muitas.
Observação: os nomes das tags SEMPRE começarão com o caractere `#`

Agora vamos supor que você tenha necessidades especiais e as tags vanilla entregues não forneçam tudo para o seu servidor.
É aqui que um [Pacote de Dados](https://minecraft.wiki/w/Data_pack) entraria em jogo.

Um [Pacote de Dados](https://minecraft.wiki/w/Data_pack) permite que um administrador de servidor aprimore a experiência de minecraft com avanços personalizados, receitas, tabelas de saque, tags e muito mais.

Para criar um pacote de dados parause custom tags for your server , the following would have to be done  

1. Navegue até a pasta mundial na qual deseja usar o pacote de dados.
Ex. `./world/datapacks`
2. Crie um pacote de dados seguindo as instruções [aqui](https://minecraft.wiki/w/Data_pack)  
Nota: A estrutura da pasta datapacks deve ser configurada da seguinte forma dentro da pasta world 
```
datapacks/
└── <datapack_name>/
    ├── data/
    │   ├── <namespace>/
    │   │   ├── tags/
    │   │   │   ├── blocks/
    │   │   │   ├── entity_types/
    │   │   │   ├── fluids/
    │   │   │   └── items/
    │   │   └── other...
    │   └── 
    └── pack.mcmeta

Nota: Um exemplo real pode ser encontrado na raiz do jar do servidor minecraft dentro da pasta `data`
```
3. Crie quantas tags quiser dentro do seu pacote de dados e adicione quaisquer outros dados personalizados que você precisar dentro dele.
4. Inicie o servidor
5. Verifique se seu pacote de dados foi carregado executando o comando `/datapack list enabled`. Veja [Comando DataPack](https://minecraft.wiki/w/Data_pack) para mais informações
Nota: Se seu pacote de dados não estiver habilitado, sua estrutura de pacote de dados mostrada na etapa 2 provavelmente está errada.

Se você conseguiu carregar seu pacote de dados com sucesso, o GD carregará automaticamente todas as tags em seu registro de contexto para você usar com bandeiras.

Para verificar se as tags estão funcionando com ações específicas no GriefDefender, execute o comando `/gddebug` e verifique a coluna de contexto que exibirá quaisquer tags se usadas.