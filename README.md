# **Projeto: Leadster Test - Dev (Lucas Vieira)**
Teste Leadster: Construção de uma ***Landing Page*** para processo seletivo

## Layout da Landing Page

![Layout Landing Page Leadster](./public/Artboard.png)
#
![Layout Landing Page Leadster](./public/Artboard-Video.png)

## Decisões Tomadas

- Manipulação da lógica das animações via servidor next
- Uso de uma lib de terceiro para o componente de Player de vídeo
- E uso de uma lib de terceiro para o elememento modal
- Distinção entre Componentes e Elementos
- Uso de hooks personalizados

</br>

## Organização do Código

- Os **componentes** decidi armazená-los em pastas com um arquivo tsx e um ts para os estilos
- Os **elementos** também em pastas, mas apenas com o arquivo ts do styled-components
- Nos componentes no topo deixei apenas as declarações de váriaveis de estado e outras váriaveis, abaixo deixei o hook de efeito colateral (useEffect), logo após outras funções de lógica de interface, e na última camada as arrow's functions de tratamento de eventos (handle functions)

</br>

## Padrão de Commit's

`git commit -m "[título] - [categorias de edição[...]] - [descrição sucinta das alterações]"`

### Regras de padronização
1. Máximo de 3 categorias de edição por commit
2. O **[título]** não deve exceder 5 palavras
3. **Se houver**, o título deve explicitar uma decisão
4. Nenhum dos insertos categorias: **[título], [categoria], [desc]** são opcionais
5. A categoria **[CMO]** obrigatoriamente necessita da explicitação do motivo ou uma explicação
6. O motivo ou explicação do item 5, é realizado na descrição do commit

### Categorias de Edição de Código
* Bugf - Bug fix / correção de bug's
* Lay - Inserção/Edição de layout
* Lon - Inserção/Edição de lógica negocial
* Loi - Inserção/Edição de lógica de interface
* CMO - Edição genérica do código com explicitação obrigatória do motivo/explicação
* Ret - Retificação e aperfeiçoamento ou pequenas e genéricas edições de código sem modificação de lógicas
