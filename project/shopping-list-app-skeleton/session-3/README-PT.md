# Session 3 - Shopping List App

Language: [🇬🇧 English](README-EN.md) | [🇵🇹 Português](README-PT.md)

**Documentação da Sessão:** [Session-3-PT.md](../../Session-3-PT.md)

## Como Integrar o Código da Sessão 3 com o Trabalho da Sessão 2

Esta sessão é realizada sobre o trabalho completado na Sessão 2.

### Pré-requisitos

Assume-se que completou todas as tarefas da Sessão 2 numa **diretoria de trabalho própria**, nomeadamente:

- Implementou a função `getFavorites` para ordenar listas por número de itens
- Tornou as views dinâmicas (carregamento de dados reais nas páginas de listas e detalhes)
- Registou todas as rotas GET necessárias

### ⚠️ IMPORTANTE: Proteja o Seu Trabalho da Sessão 2

**NÃO copie todos os ficheiros da session-3 para a diretoria de trabalho!** Isso irá sobrescrever o código que já implementou na Sessão 2. 
Antes de realizar os passos seguintes, faça uma cópia de segurança da sua diretoria de trabalho da Sessão 2.

### Passos para Integração (Copiar Apenas Ficheiros Novos)

#### 1. Ficheiros a Copiar da pasta session-3 para a Sua Diretoria de Trabalho

Abra a pasta `session-3` no explorador de ficheiros e copie **apenas** os seguintes ficheiros para a sua diretoria de trabalho:

**Ficheiros obrigatórios a copiar:**

- `shopping-list-data.js` - contém as novas funções CRUD (createList, updateList, deleteList, addItem, deleteItem, toggleBought)
- `shopping-list-services.js` - contém as novas funções de serviços com validação
- `shopping-list-web-app.js` - contém os novos handlers POST e o método getFavorites
- `server.js` - contém as novas rotas POST registadas
- `views/edit-list.hbs` - view nova unificada para criar/editar listas

**⚠️ ATENÇÃO: Ficheiros que NÃO deve copiar (para preservar o seu trabalho da Sessão 2):**
- ❌ `views/lists.hbs` - já tem a sua versão dinâmica da Sessão 2
- ❌ `views/new-list.hbs` - se implementou na Sessão 2
- ❌ `views/list-detail.hbs` - já tem a sua versão dinâmica da Sessão 2 (a versão da session-3 é estática para demonstração)
- ❌ `views/home.hbs` e `views/error.hbs` - se já personalizou
- ❌ `package.json` - se já personalizou (mas pode comparar para ver se há novas dependências)

**Ficheiros que pode copiar (não afetam o trabalho anterior):**
- `auth-middleware.js`, `users-data.js`, `users-services.js` - se não os modificou

#### 2. Nota Importante sobre a Opção de Cópia

**Opção A - Copiar ficheiros base da session-3 (recomendado para rapidez):**
- Ao copiar `shopping-list-data.js`, `shopping-list-services.js`, `shopping-list-web-app.js` e `server.js`, receberá código já implementado
- **Desvantagem:** Perderá as suas soluções das Student Tasks da Sessão 2 nestes ficheiros
- **Terá de re-implementar:** a função `getFavorites` e as modificações que fez nos handlers GET

**Opção B - NÃO copiar os ficheiros base (mais trabalhoso):**

- Mantenha os seus ficheiros da Sessão 2
- Adicione manualmente as novas funções e rotas consultando Session-3.md
- **Vantagem:** Preserva 100% do seu trabalho da Sessão 2
- **Desvantagem:** Mais trabalho manual de integração

#### 3. Verificar o Que Tem na Sua Diretoria

Confirme que tem **todos** estes ficheiros (combinação de Sessão 2 + Sessão 3):

**Ficheiros essenciais:**
- ✅ `shopping-list-data.js`
- ✅ `shopping-list-services.js`
- ✅ `shopping-list-web-app.js`
- ✅ `server.js`
- ✅ `auth-middleware.js`
- ✅ `users-data.js`
- ✅ `users-services.js`
- ✅ `package.json`

**Views essenciais:**
- ✅ `views/home.hbs`
- ✅ `views/error.hbs`
- ✅ `views/lists.hbs` (a sua versão da Sessão 2 ou da session-3)
- ✅ `views/list-detail.hbs` (a sua versão da Sessão 2 ou da session-3)
- ✅ `views/edit-list.hbs` (copiado da session-3)

#### 4. Instalar Dependências e Testar

```bash
npm install
npm run dev
```

Teste no browser:
- [ ] Consegue fazer login
- [ ] Página de listas mostra listas (versão da Sessão 2 ou 3)
- [ ] Consegue aceder a detalhes de uma lista

Se tudo funcionar, está pronto para as tarefas da Sessão 3!

---


Bom trabalho! 🚀