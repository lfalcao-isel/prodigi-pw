# 1. Modularidade - Módulos ECMAScript

Criar um pequeno programa que demonstra como reutilizar funções em módulos.

### Criar um módulo (`functions.js`)

   * Incluir as duas funções dos Exercícios 1.6 e 1.7 da semana anterior.
   * Exportá-las para que possam ser reutilizadas.

### Criar um módulo principal (`main.js`)

   * Importar o módulo de funções.
   * Definir uma função `main` que chama as funções importadas e regista os resultados.
   * Chamar `main()` no final para executar o programa.


# 2. Programação Assíncrona – Promises

## 2.1 Sistema de Ficheiros com Promises (Node.js)

Usando a **API de Promises** do Node.js para acesso a ficheiros, completar as tarefas
descritas abaixo.\
Deve implementar **duas funções separadas**, cada uma com uma responsabilidade clara e
bem definida.

### Função 1 - `readAndFilter()`

Implementar uma função chamada **`readAndFilter()`** que realiza o
seguinte:

1.  Lê o ficheiro [liga.json](liga.json) usando `fs.promises.readFile`.
2.  Analisa o conteúdo do ficheiro de JSON para um objeto ou array
    JavaScript, usando a função `JSON.parse`.
3.  Filtra as equipas e retorna apenas aquelas cujo número de golos
    marcados (**`goals`**) é **superior a 10**.
4.  Retorna o array filtrado.

### Função 2  - `saveResult(filteredTeams)`

Implementar uma função chamada **`saveResult()`** que:

1.  Recebe o array filtrado retornado por `readAndFilter()`.
2.  Converte este array em JSON formatado usando `JSON.stringify(filteredTeams)`.
3.  Escreve o resultado num novo ficheiro chamado **`liga10goals.json`** usando
    `fs.promises.writeFile`.

### Objetivo Final

Criar uma pequena função **`main()`** (ou código de controlo similar) que:

1.  Chama `readAndFilter()` para obter as equipas filtradas.
2.  Passa o resultado para `saveResult()`.

Quando executado, o programa deve produzir o ficheiro:

    liga10goals.json

contendo apenas as equipas que marcaram mais de 10 golos.

### Exemplo de Resultado (dentro de liga10goals.json)

```json
[
  {
    "name": "Benfica",
    "goals": 12,
    "points": 30
  },
  {
    "name": "Porto",
    "goals": 15,
    "points": 28
  },
  {
    "name": "Sporting",
    "goals": 11,
    "points": 27
  }
]
```

## Exercício 2.2 - Fetch API (Node.js)

Usando a **Fetch API**, escrever um programa que obtém informação
sobre filmes de animação da API web e guarda os títulos de todos
os filmes num ficheiro JSON local.

Deve implementar **duas funções separadas**, cada uma com uma responsabilidade clara e
bem definida.

### Função 1 - `fetchMovies()`

Implementar uma função chamada **`fetchMovies()`** que realiza o
seguinte:

1.  Faz um pedido HTTP GET para:

```{=html}
https://api.sampleapis.com/movies/animation
```
    
2.  Usa a **Fetch API** para obter os dados.
3.  Analisa a resposta como JSON usando `response.json()`.
4.  Extrai apenas os **títulos** dos filmes dos objetos retornados.
5.  Retorna um array de títulos de filmes.

### Função 2 - `saveTitles(titles)`

Implementar uma função chamada **`saveTitles()`** que:

1.  Recebe o array de títulos de filmes retornado por `fetchMovies()`.
2.  Converte o array em JSON formatado usando:

```{=html}
JSON.stringify(titles, null, 2)
```
   
3.  Guarda este JSON num ficheiro chamado:

```{=html}
animationTitles.json
```

usando `fs.promises.writeFile`.

### Objetivo Final

Escrever uma pequena função `main()` (ou similar) que:

1.  Chama `fetchMovies()` para obter os títulos.
2.  Passa o resultado para `saveTitles()`.

Quando executado, o programa deve criar o ficheiro:

    animationTitles.json

contendo todos os títulos de filmes obtidos da API.

### Exemplo de Resultado (dentro de animationTitles.json)

``` json
[
  "Spirited Away",
  "Toy Story",
  "How to Train Your Dragon",
  "Zootopia"
]
```

Os títulos reais dependerão da resposta da API.


# 3. Web API com Express

## API de Listas de Compras

Construir uma pequena **Web API em Express (Node.js)** que serve listas de compras armazenadas num array pré-preenchido em memória.

Cada lista de compras contém:

* **id**: um identificador único (número)
* **name**: o nome da lista (string)
* **items**: um array de produtos, onde cada produto tem:

  * **product**: o nome do produto (string)
  * **quantity**: a quantidade do produto (número)

Exemplo de estrutura de uma lista de compras:

```json
{
  "id": 1,
  "name": "Saturday groceries",
  "items": [
    { "product": "Milk", "quantity": 2 },
    { "product": "Bread", "quantity": 6 }
  ]
}
```

## Endpoints da API

* `GET /lists`

  * Retorna todas as listas de compras como JSON.
  * Suporta um parâmetro de consulta opcional `limit` para restringir o número de listas retornadas.

* `GET /lists/:id`

  * Retorna a lista de compras com o `id` especificado como JSON.

## Restrições

* Respostas apenas em JSON
* Servidor executa na porta **3000**
* Dados apenas em memória e pré-preenchidos no arranque do servidor

## Passos

1. Inicializar o projeto Node.js:

```bash
npm init -y
```

2. Instalar Express:

```bash
npm install express
```

3. Existe um **ficheiro de implementação parcial** (`shooping-web-api.mjs`) fornecido no seguinte link:

[Implementação parcial - shooping-web-api.mjs](https://github.com/lfalcao-isel/prodigi-pw/blob/main/exercises/shooping-web-pi.mjs)

Existe uma demonstração simples do express [aqui](https://github.com/lfalcao-isel/prodigi-pw/tree/main/exercises/demo-express)

Os alunos **apenas precisam de completar as partes marcadas com comentários numerados** no ficheiro.

4. Testar os endpoints usando o browser

