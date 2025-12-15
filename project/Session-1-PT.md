# 🎨🛠️ Sessão 1: Estrutura HTML, Navegação e Estilo (CSS) (2,5 horas)

Idioma: [🇵🇹 Português](Session-1-PT.md) | [🇬🇧 English](Session-1-EN.md)

## 🎯 Objetivos

No final desta sessão, deverá ter:

- ✅ **Validado** a estrutura e navegação de `index.html`.
- ✅ **Concluído** a estrutura HTML semântica das páginas de gestão principais (`lists`, `list_detail`, `new_list`).
- ✅ **Aplicado** as **classes do Bootstrap** necessárias para estilizar as páginas e tabelas.
- ✅ **Implementado** cabeçalhos de tabela e os **dados simulados** necessários.
- ✅ **Finalizado** a estrutura completa de todos os formulários necessários.

---

## 📝 Nota de Estilo

> 💡 O ambiente está configurado com **Bootstrap**. A sua tarefa é aplicar as classes do framework (por exemplo `table`, `btn`, `input`) para cumprir os requisitos de layout e design.

---

## 🏗️ Requisitos e Tarefas de Implementação

### 1. Página Inicial (`index.html`)

> **Estado:** ✅ **Concluída.** Esta página está pronta e serve como ponto de partida e entrada de autenticação da aplicação.

### 2. Painel de Listas de Compras (`lists.html`)

- **Função:** Ver listas do utilizador.
- **Estrutura Base:** A tabela principal está presente mas os cartões das listas estão incompletos.
- **Tarefas de Conclusão (Tabela):**
    1. Adicionar o número de itens a cada cartão
    2. E os botões Ver e Eliminar

- **Resultado Final**

![lists.html final](images/lists-final.jpg)


### 3. Página de Detalhe da Lista (`list_detail.html`)

- **Função:** Ver e gerir itens numa lista.
- **Estrutura Base:** A estrutura da página, a tabela de itens e a área de formulário estão presentes.
- **Tarefas de Conclusão:**
    1.  **Tabela - Cabeçalhos:** **Completar** os cabeçalhos (`<th>`) para: **Quantidade**, **Estado (Comprado/Pendente)** e **Ações**.
    2.  **Tabela - Conteúdo:** **Adicionar** linhas de itens simulados à tabela.

- **Resultado Final**

![list_detail.html final](images/list-detail-final.jpg)


### 4. Formulário de Criação de Nova Lista (`new_list.html`)

- **Função:** Formulário simples para criar uma nova lista.
- **Estrutura Base:** O título da página e a ligação "Cancelar" estão prontos.
- **Tarefas de Conclusão (Formulário):**
    1.  **Input:** **Adicionar** o *rótulo* e o campo de texto (`<input type="text">`) para o **Nome da Lista**, aplicando a **classe `.form-control`**.
    2.  **Ação:** **Criar Lista** e estilizar o botão **Submeter**.

- **Resultado Final**

![new_list.html final](images/new-list-final.jpg)

### 5. (Opcional) Implementação do Componente Breadcrumb

O **Componente Breadcrumb do Bootstrap** (`<nav aria-label="breadcrumb">`) deve ser implementado em **todas as páginas principais de gestão** (`lists.html`, `list_detail.html`, `new_list.html`) para melhorar a navegação e orientação.

### **Tarefas de Conclusão:**

1.  **Implementar** o componente Breadcrumb (`<nav>`) e a estrutura de lista (`<ol class="breadcrumb">`) em todas as três páginas.
2.  **Definir** o percurso de navegação correto para cada página, garantindo que a **página atual** está marcada com a classe `active` e `aria-current="page"`:

| Página | Percurso Breadcrumb |
| :--- | :--- |
| **`lists.html`** (Painel de Listas de Compras) | **Home** → **Shopping Lists** (Ativa) |
| **`list_detail.html`** (Detalhe da Lista) | **Home** → **Shopping Lists** → **[Nome da Lista]** (Ativa) |
| **`new_list.html`** (Criar Nova Lista) | **Home** → **Shopping Lists** → **Create New List** (Ativa) |

**NOTA**: O ficheiro `index.html` tem um exemplo de utilização do componente Breadcrumb
