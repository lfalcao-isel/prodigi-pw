# Sessão 3: Processamento de Formulários e Persistência de Dados (2,5 horas)

Language: [🇬🇧 English](Session-3-EN.md) | [🇵🇹 Português](Session-3-PT.md)

## Objetivos

No final desta sessão, deverá ter:

- ✅ Implementado processamento de submissão de formulários
- ✅ Criado persistência de dados (operações adicionar/eliminar)
- ✅ Validado entrada do utilizador
- ✅ Completado uma aplicação multi-utilizador totalmente funcional

## Requisitos

### 3.1. Persistência de Dados

- Estender `shopping-list-data.js` com:
  - `createList(userId,name)` - Adicionar lista às listas do utilizador
  - `updateList(userId, listId, patch)` - Atualizar propriedades da lista (nome)
  - `deleteList(userId, listId)` - Remover lista
  - `addItem(userId, listId, {name, quantity})` - Adicionar item à lista
  - `deleteItem(userId, listId, itemId)` - Remover item da lista
  - `toggleBought(userId, listId, itemId)` - Alternar estado comprado
- Manter estrutura de dados em memória (objeto indexado por userId)
- Usar `Promise.resolve()` para sucesso, `Promise.reject()` para erros

### 3.2. Validação na Camada de Serviços

- Estender `shopping-list-services.js`:
  - `createNewList(userId, name)` - Validar nome não vazio
  - `updateList(userId, listId, patch)` - Atualizar lista (delega ao data layer)
  - `removeList(userId, listId)` - Com tratamento de erros
  - `addItemToList(userId, listId, name, quantity)` - Validar entradas:
    - Nome não vazio
    - Quantidade > 0
  - `removeItem(userId, listId, itemId)` - Com tratamento de erros
  - `toggleItem(userId, listId, itemId)` - Com tratamento de erros
- Todas as funções são async e usam await
- Todas as funções lançam erros para falhas de validação

### 3.3. Rotas de Submissão de Formulários

- Implementar rotas POST em `shopping-list-web-app.js`:
  - `POST /lists/create` - Processar criação de nova lista
  - `POST /lists/:id/edit` - Processar edição de lista (nome)
  - `POST /lists/:id/delete` - Processar eliminação de lista
  - `POST /lists/:id/items/create` - Processar adição de item
  - `POST /lists/:id/items/:itemId/toggle` - Processar alternância de comprado
  - `POST /lists/:id/items/:itemId/delete` - Processar eliminação de item
  - `POST /logout` - Processar logout
- Todos os handlers usam `async function` 
- Todos os handlers usam `await` para chamadas async aos serviços
- Validar entradas e fornecer feedback de erro
- Redirecionar em caso de sucesso, mostrar página de erro em caso de falha
- Usar códigos de estado HTTP apropriados para erros (400, 404, 500)
  
### 3.4. Implementação de Formulários

- Criar `edit-list.hbs` (vista unificada para criar e editar listas):
  - Formulário com método POST para `/lists/create` (modo criar) ou `/lists/:id/edit` (modo editar)
  - Entrada de texto para nome da lista com atributo `required`
  - Usar `{{#if list}}` para diferenciar entre criar (novo) e editar (existente)
  - Página completa Bootstrap com navegação e rodapé
  - **Nota:** O formulário apenas edita o nome da lista, não permite adicionar/editar itens
- Criar `list-detail.hbs` (mantendo conteúdo estático como na Session 2):
  - Manter nome da lista e itens estáticos (ex.: "Grocery Shopping", "Milk", "Bread")
  - Adicionar botões/links novos: "Edit List" para `/lists/1/edit` e formulário "Delete List" com `POST /lists/1/delete`
  - Adicionar formulários inline funcionais para itens estáticos:
    - Alternar estado comprado: `POST /lists/1/items/1/toggle`, `POST /lists/1/items/2/toggle`
    - Eliminar item: `POST /lists/1/items/1/delete`, `POST /lists/1/items/2/delete`
  - Corrigir formulário de adicionar item:
    - `method="post"` e `action="/lists/1/items/create"`
    - Campos: `name="name"` (texto) e `name="quantity"` (número, `min="1"`)
  - **Nota:** Nesta sessão, a view usa conteúdo estático para demonstrar os formulários; a lógica e persistência estão implementadas, mas a view não carrega dados dinamicamente
### 3.5. Estado do Item

- Implementar alternância de estado comprado:
  - Rota: `POST /lists/:id/items/:itemId/toggle`
  - Atualiza o estado de comprado do item
  - Redireciona de volta para detalhes da lista
  - Apresentar indicador visual na lista (checkbox, riscado, etc.)

### 3.6. Tratamento de Erros

- Criar template `error.hbs`:
  - Apresentar mensagens de erro claras
  - Fornecer navegação de volta para página segura
  - Mostrar códigos de estado apropriados
- Tratar erros dos serviços:
  - Erros de validação (400)
  - Erros de não encontrado (404)
  - Erros de servidor (500)

### 3.7. Validação de Dados

- Lado do cliente: atributos required do HTML5
- Lado do servidor:
  - Nome da lista não vazio
  - Nome do item não vazio
  - A quantidade deve ser um número inteiro positivo
  - Mensagens de erro claras para o utilizador

## Student Tasks

Nesta sessão, os alunos devem completar as seguintes tarefas (à semelhança da Session 2):

### Tarefa 1: Registar rota para criar lista

- O botão "Create New List" na página de listas deve apontar para a rota de criação.
- Atualizar o `href` do botão para `/lists/create`.
- Verificar que a rota `GET /lists/create` está registada em `server.js` e usa o handler `handleGetCreateList`.

### Tarefa 2: Tornar a `edit-list.hbs` dinâmica (modo edição)

- Na edição, carregar o nome real da lista e preencher o campo de texto com esse valor.
- Garantir que o formulário em modo edição faz `POST /lists/:id/edit` e que o handler aplica `await` corretamente.
- Manter o comportamento de criação com `POST /lists/create`.

### Tarefa 3: Implementar `list-detail.hbs` de forma dinâmica

- Substituir o conteúdo estático por dados reais: `{{list.name}}` e `{{#each list.items}}`.
- Tornar dinâmicos os botões/links e as ações dos formulários (remover caminhos hardcoded como `/lists/1/...`):
  - Link "Edit List": `href="/lists/{{list.id}}/edit"`
  - Form "Delete List": `method="post"` e `action="/lists/{{list.id}}/delete"`
  - Dentro de `{{#each list.items}}`:
    - Botão "Toggle": `method="post"` e `action="/lists/{{../list.id}}/items/{{this.id}}/toggle"`
    - Botão "Delete": `method="post"` e `action="/lists/{{../list.id}}/items/{{this.id}}/delete"`
  - Form "Add item": `method="post"` e `action="/lists/{{list.id}}/items/create"`
- Garantir que `handleGetList` usa `req.params.id` e que o serviço devolve a lista correta do utilizador autenticado.

### Tarefa Opcional: Listas Favoritas

Objetivo: Suportar listas favoritas e, na página de listas, apresentar cartões apenas das listas favoritas.

Âmbito e regras:

- As listas favoritas são as marcadas pelo próprio utilizador.
- O método `getFavorites(lists, maxFavorites)` deve passar a devolver apenas as listas marcadas como favoritas, podendo limitar a quantidade de listas retornadas.

O que necessita ser alterado/criado:

- Ficheiro `shopping-list-data.js` (camada de dados):
  - Adicionar uma propriedade de estado (por exemplo, favorito) nas listas do utilizador.
  - Criar operações para marcar e desmarcar uma lista como favorita (persistência em memória com `Promise.resolve()`/`Promise.reject()`).
- Ficheiro `shopping-list-services.js` (serviços):
  - Expor funções para marcar/desmarcar favoritos com validação de permissões (apenas listas do próprio utilizador).
  - Ajustar quaisquer retornos de listas para incluir a propriedade de favorito quando aplicável.
- Ficheiro `shopping-list-web-app.js` (Sessão 3, handlers):
  - Atualizar a função `getFavorites(lists, maxFavorites)` para filtrar por listas com favorito ativo e opcionalmente limitar a `maxFavorites`.
  - Em `handleGetLists`, calcular as listas favoritas e passá-las à view (`favorites`) sem quebrar o comportamento atual.
  - Opcional: adicionar rotas `POST` para marcar/desmarcar favorito numa lista.
- Ficheiro `views/lists.hbs` (Sessão 3):
  - Adicionar uma secção de cartões que renderize apenas as listas favoritas recebidas no modelo.
  - Incluir controlos visuais, para indicar estado de favorito de uma lista e forma de alterar esse estado.

Critérios de aceitação:

- O utilizador consegue marcar e desmarcar uma lista como favorita.
- A página de listas mostra cartões apenas das favoritas quando existirem; caso contrário, mostra feedback adequado.
- O helper `getFavorites` devolve apenas listas favoritas do utilizador autenticado.
- Não expor dados de outros utilizadores.

## Checklist de Verificação

- [ ] Formulário de criar nova lista funciona e persiste dados
- [ ] Listas criadas aparecem no painel de listas
- [ ] Eliminar lista remove lista das listas do utilizador
- [ ] Formulário de adicionar item funciona e persiste dados
- [ ] Itens aparecem na página de detalhes da lista
- [ ] Eliminar item remove item da lista
- [ ] Alternar item marca como comprado/não comprado
- [ ] Validação de formulário previne submissões vazias
- [ ] Mensagens de erro apresentam para entrada inválida
- [ ] Todas as funções nomeadas usadas nos handlers de rota
- [ ] Acesso a dados usa apenas `Promise.resolve()` e `Promise.reject()`
- [ ] Redirecionamentos funcionam adequadamente após operações bem-sucedidas
- [ ] Utilizadores diferentes não podem ver listas uns dos outros
- [ ] Cada utilizador pode apenas modificar as suas próprias listas
- [ ] Aplicação totalmente funcional no browser

**Opcional - Listas Favoritas:**

- [ ] Propriedade de favorito adicionada às listas na camada de dados
- [ ] Funções para marcar/desmarcar favorito implementadas nos serviços
- [ ] Utilizador consegue marcar e desmarcar lista como favorita
- [ ] Função `getFavorites` devolve apenas listas favoritas do utilizador
- [ ] Página de listas mostra cartões das listas favoritas
- [ ] Indicador visual de estado de favorito presente na interface
