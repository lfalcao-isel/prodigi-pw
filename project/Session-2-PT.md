# Sessão 2: Configuração do Backend e Implementação do Servidor (2,5 horas)

Idioma: [🇵🇹 Português](Session-2-PT.md) | [🇬🇧 English](Session-2-EN.md)

## Objetivos

No final desta sessão, deverá ter:

- ✅ Configurado um servidor Node.js/Express
- ✅ Convertido vistas HTML estáticas em templates Handlebars dinâmicos
- ✅ Implementado renderização dinâmica com Handlebars (ciclos, condicionais)
- ✅ Concluído módulos de acesso a dados assíncronos (camada de dados)
- ✅ Autenticação de utilizador com middleware Basic Auth
- ✅ Ligado a autenticação ao gestão de listas
- ✅ Corrigido o tratamento de parâmetros de rota para obter IDs dinâmicos
- ✅ Implementado lógica de ordenação e filtragem para listas favoritas

## Requisitos

### 2.1. Estrutura do Projeto

``` text
shopping-list-app/
├── server.js                    # Configuração do servidor Express
├── shopping-list-web-app.js     # Handlers de rotas (funções nomeadas)
├── shopping-list-services.js    # Camada de lógica de negócio
├── shopping-list-data.js        # Módulo de acesso a dados (async)
├── users-services.js            # Lógica de negócio de utilizadores
├── users-data.js                # Acesso a dados de utilizadores
├── auth-middleware.js           # Middleware Basic Auth
├── package.json
└── views/
    ├── home.hbs
    ├── lists.hbs               # Substitui lists.html
    ├── list-detail.hbs         # Substitui list_detail.html (inclui formulário de adicionar item)
    ├── new-list.hbs            # Formulário para criar listas
    └── error.hbs               # Página de erro
```

### 2.2. Módulo de Utilizadores

- **users-data.js:** Acesso a dados assíncrono para utilizadores
  - Utilizadores simulados com: id, username, password
  - `validateCredentials(username, password)` - async
  - Retorna o utilizador SEM password
  - Usar `Promise.resolve()` e `Promise.reject()`
- **users-services.js:** Lógica de negócio para utilizadores
  - `validateUser(username, password)` - async
  - Valida credenciais usando a camada de dados

### 2.3. Middleware de Autenticação (`auth-middleware.js`)

- Implementar [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication):
  - Ler o cabeçalho `Authorization`
  - Decodificar credenciais em Base64
  - Validar username/password
  - Anexar o objeto utilizador a `req.user` (sem password)
  - Em falha, devolver 401 com cabeçalho `WWW-Authenticate`
- Aplicar o middleware a todas as rotas que requerem autenticação

### 2.4. Módulo de Acesso a Dados (`shopping-list-data.js`)

- Funções assíncronas (todas retornam Promises):
  - `getAllLists(userId)` - Obter todas as listas de um utilizador
  - `getListById(userId, listId)` - Obter lista específica com itens
  - `createList(userId, name)` - Criar nova lista
  - `deleteList(userId, listId)` - Eliminar lista
  - `addItem(userId, listId, {name, quantity})` - Adicionar item à lista
  - `toggleBought(userId, listId, itemId)` - Marcar item como comprado/não comprado
  - `deleteItem(userId, listId, itemId)` - Remover item
- **Estrutura de Dados:** Organizar listas por `userId`
- **Importante:** Usar `Promise.resolve()` e `Promise.reject()` (sem construtor de Promise)
- **Importante:** Não usar `setTimeout`

### 2.5. Camada de Serviços (`shopping-list-services.js`)

- Funções assíncronas que:
  - Chamam a camada de dados com `await`
  - Acrescentam validação/lógica de negócio
  - Tratam erros adequadamente
- Funções:
  - `getAllLists(userId)`
  - `getList(userId, listId)`
  - `createNewList(userId, name)` - com validação
  - `removeList(userId, listId)`
  - `addItemToList(userId, listId, name, quantity)` - com validação
  - `toggleItem(userId, listId, itemId)`
  - `removeItem(userId, listId, itemId)`

### 2.6. Handlers de Rotas (`shopping-list-web-app.js`)

- **IMPORTANTE:** Usar funções nomeadas (NÃO arrow functions)
- Handlers apenas para endpoints GET (os POST serão adicionados na Sessão 3):

  ```javascript
  async function handleGetHome(req, res) { }
  async function handleGetLists(req, res) { }
  async function handleGetList(req, res) { }
  async function handleGetCreateList(req, res) { }
  async function handleGetAddItem(req, res) { }
  ```

- Todos os handlers usam `async/await` com tratamento de erros adequado
- Rotas com middleware de autenticação:

  ``` text
  GET  /                          -> handleGetHome (pública)
  GET  /lists                     -> handleGetLists (protegida)
  GET  /lists/create              -> handleGetCreateList (protegida)
  GET  /lists/:id                 -> handleGetList (protegida)
  GET  /lists/:id/items/create    -> handleGetAddItem (protegida)
  ```

- **Nota:** Rotas POST para mutações serão implementadas na Sessão 3

### 2.7. Servidor Express (`server.js`)

- Configurar a aplicação Express:
  - Configurar o motor de vistas Handlebars
  - Definir a diretoria de vistas para `./views`
  - Middleware para formulários URL-encoded
  - Servir ficheiros estáticos a partir de `./public` (opcional, sem ficheiros estáticos ainda)
  - Registar rotas GET com middleware de autenticação
  - Escutar na porta 3000
- **Nota:** Apenas rotas GET estão registadas nesta sessão

### 2.8. Templates de Vistas

- Converter ficheiros HTML para Handlebars (`.hbs`):
  - Usar ciclos `{{#each}}` para mostrar listas/itens
  - Usar `{{#if}}` para renderização condicional
  - Mostrar `{{user.username}}` em páginas protegidas
  - Usar sintaxe `{{../variable}}` quando necessário para contexto
- **Nota:** O template `list-detail.hbs` inclui a tabela de itens E o formulário de adicionar item na mesma página (não existe `add_item.hbs` separado)

## Tarefas para Alunos

O código base (skeleton) tem várias implementações incompletas que devem ser corrigidas:

### Tarefa 1: Converter Vistas Estáticas para Dinâmicas

- As vistas na pasta `views/` estão atualmente em HTML estático
- Converta-as para usar sintaxe Handlebars:
  - Substituir o username fixo "alice" por `{{user.username}}`
  - Substituir dados de listas fixos por ciclos `{{#each lists}}`
  - Substituir dados de itens fixos por ciclos `{{#each list.items}}`
  - Usar `{{#if item.bought}}` para renderização condicional do estado
  - Atualizar todas as ligações para usar IDs dinâmicos: `/lists/{{this.id}}`

### Tarefa 2: Corrigir Implementação de `handleGetList`

- A função `handleGetList` em `shopping-list-web-app.js` tem um bug
- Atualmente usa `id = 1` fixo em vez de ler do parâmetro de rota
- Correção: Usar `req.params.id` para obter o ID da lista a partir do URL

### Tarefa 3: Implementar `getAllLists` na Camada de Dados

- A função `getAllLists` em `shopping-list-data.js` atualmente lança um erro
- Implementação deve:
  - Devolver o array de listas para o `userId` indicado
  - Devolver array vazio se o `userId` não existir
  - Usar `Promise.resolve()` para devolver o resultado


### Tarefa 4: Implementar Função `getFavorites`

- Em `shopping-list-web-app.js`, criar a função `getFavorites(lists, maxFavorites)`
- Atualmente lança erro "Not implemented"
- Implementação deve:
  - Ordenar listas pelo número de itens (ordem decrescente)
  - Devolver apenas as primeiras `maxFavorites` listas
  - Usar métodos `.sort()` e `.slice()`

### Tarefa 5: Corrigir `handleGetLists` para Passar Favorites

- A função `handleGetLists` precisa de passar a propriedade `favorites` para a vista
- Atualmente calcula `fav` mas não passa para o template
- Chamar `getFavorites(lists, 2)` para obter o top 2 de listas com mais itens (já feito)
- Correção: Passar a propriedade `favorites: fav` para o template `lists.hbs` juntamente com `lists` e `user`

## Checklist de Verificação

### Servidor e Autenticação

- [ ] Servidor inicia sem erros: `npm start`
- [ ] Servidor escuta em `http://localhost:3000`
- [ ] Página inicial acessível sem autenticação
- [ ] Página de listas requer Basic Auth (browser pede credenciais)
- [ ] Tratamento de erros funciona (auth inválida devolve 401)

### Isolamento de Utilizadores e Acesso a Dados

- [ ] Após autenticação, o utilizador vê apenas as suas listas
- [ ] Utilizadores diferentes (alice vs bob) veem listas diferentes
- [ ] Objeto utilizador disponível em vistas sem password (mostra `{{user.username}}`)
- [ ] `getAllLists` na camada de dados devolve listas corretas para cada utilizador
- [ ] Camada de dados usa apenas `Promise.resolve()` e `Promise.reject()`

### Vistas Dinâmicas (Tarefa 1)

- [ ] Sem usernames fixos nas vistas (usa `{{user.username}}`)
- [ ] Listas mostradas com ciclos `{{#each lists}}`
- [ ] Itens mostrados com ciclos `{{#each list.items}}`
- [ ] Estado do item mostra condicionalmente com `{{#if item.bought}}`
- [ ] Todas as ligações usam IDs dinâmicos: `/lists/{{this.id}}`

### Handlers de Rotas (Tarefa 2)

- [ ] `handleGetList` usa corretamente `req.params.id` (não `id = 1` fixo)
- [ ] Clicar numa lista mostra a página de detalhe correta
- [ ] Todos os handlers de rota usam funções nomeadas (não arrow functions)
- [ ] Todas as rotas respondem corretamente com tratamento de erros adequado

### Funcionalidade Favorites (Tarefas 3 & 4)

- [ ] Função `getFavorites` implementada e ordena por número de itens (decrescente)
- [ ] `handleGetLists` passa propriedade `favorites` para a vista
- [ ] Secção de favoritos mostra top 2 listas com mais itens
- [ ] Mudar para `getFavorites(lists, 1)` - verificar que apenas 1 cartão aparece em favoritos
- [ ] Mudar para `getFavorites(lists, 3)` - verificar que apenas 3 cartões aparecem em favoritos
- [ ] Favoritos atualizam corretamente quando as listas têm diferentes contagens de itens
