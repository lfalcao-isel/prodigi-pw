# Sistema de Gestão de Listas de Compras - Projeto

Idioma: [🇵🇹 Português](PW-Project-PT.md) | [🇬🇧 English](PW-Project-EN.md)

## Visão Geral

Este projeto envolve a construção de um sistema multiutilizador de gestão de listas de compras em 4 sessões práticas de 2,5 horas cada. Cada sessão tem objetivos claros e verificáveis que se constroem incrementalmente sobre o trabalho da sessão anterior. O sistema usa **Autenticação Básica (Basic Authentication)** para suportar múltiplos utilizadores, onde cada utilizador tem as suas próprias listas de compras.

---

## Sessões do Projeto

- **[Sessão 1: Estrutura HTML, Navegação e Estilo CSS com Bootstrap](./Session-1-PT.md)** (2,5 horas)
- **[Sessão 2: Configuração do Backend e Implementação do Servidor](./Session-2-PT.md)** (2,5 horas)
- **[Sessão 3: Processamento de Formulários e Persistência de Dados](./Session-3.md)** (2,5 horas)

---

## Critérios de Avaliação

### Funcionalidade (60%)

- Todas as páginas e funcionalidades requeridas implementadas
- Formulários funcionam corretamente e persistem dados
- Autenticação impede acesso entre utilizadores
- Tratamento de erros apropriado
- Dados separados por `userId`

### Qualidade do Código (20%)

- Estrutura de código limpa e legível
- Uso adequado de `async/await`
- Funções nomeadas (sem arrow functions) nos handlers de rota
- Módulo de acesso a dados usa métodos de Promise corretamente
- Separação clara de responsabilidades (dados, serviços, rotas, vistas)
- Tratamento de erros com mensagens significativas

### Experiência de Utilizador (15%)

- Estilo consistente entre páginas
- Navegação clara entre páginas
- Informação do utilizador visível em páginas protegidas
- Mensagens de erro informativas
- Design responsivo

### Segurança e Arquitetura (5%)

- Autenticação Básica implementada corretamente
- Dados de utilizador não expostos (sem passwords nas vistas)

- Cada utilizador vê apenas as suas próprias listas
- Uso correto de `userId` para isolamento de dados

---

## Requisitos de Submissão

Para cada sessão concluída, demonstrar:

1. **Sessão 1:**
   - Navegação do browser por todas as páginas HTML
   - Página inicial explica autenticação
   - Listas de utilizadores diferentes visíveis nos dados simulados
   - Todas as páginas com estilo consistente e profissional
   - Caixa de informação do utilizador visível em páginas autenticadas
  
2. **Sessão 2:**
   - Servidor em execução e a mostrar listas dinâmicas da camada de dados
   - Basic Auth funcional (browser pede credenciais)
   - Utilizadores diferentes veem listas diferentes (alice vs bob)
   - Sem passwords expostas no HTML

3. **Sessão 3:**
   - Todas as operações CRUD funcionais
   - Dados persistem em memória durante a sessão
   - Formulários validam entrada
   - Utilizadores não conseguem aceder às listas de outros
   - Aplicação totalmente funcional com autenticação

---

## Dicas e Boas Práticas

1. **Autenticação:** Testar com utilizadores diferentes para verificar isolamento
2. **Testes:** Testar frequentemente novas funcionalidades durante o desenvolvimento
3. **Estrutura de Dados:** Manter `userId` como chave primária para todas as operações de listas
4. **Mensagens de Erro:** Fornecer feedback claro aos utilizadores
5. **Nomenclatura:** Usar nomes claros e descritivos para funções e variáveis
6. **Funções Pequenas:** Manter funções focadas numa única responsabilidade
7. **Segurança:** Nunca expor passwords; validar sempre no servidor
8. **Sessão:** Lembrar que a autenticação é por sessão (sem persistência necessária)

---

## Stack Tecnológico

- **Backend:** Node.js + Express
- **Templating:** Handlebars (HBS)
- **Autenticação:** HTTP Basic Authentication
- **Estilo:** CSS + Bootstrap
- **Armazenamento de Dados:** Objetos JavaScript em memória
