## URI

### 1. Ao analisar o URI http://localhost:8080/students?name=mike, qual das seguintes afirmações é verdadeira?

	- A) A query string neste URI é ?name=mike
	- B) A query string neste URI é /students
	- C) A query string neste URI é localhost
	- D) A query string neste URI é http

### 2. No URI http://example.com:8080/api/v1/items, qual parte identifica o host?

	- A) example.com
	- B) /api/v1/items
	- C) http

### 3. No URI http://example.com/search?q=test, qual parte representa o esquema (scheme)?

	- A) http
	- B) example.com
	- C) q=test

## HTTP

### 4. No contexto do protocolo HTTP, qual método deve ser utilizado num pedido HTTP para enviar dados ao servidor com o objetivo de criar um novo recurso?

	- A) POST
	- B) GET
	- C) HEAD
	- D) DELETE

### 5. No contexto do protocolo HTTP, qual o status code que deve ir na resposta a um pedido de criação de recurso quando um ou mais parâmetros obrigatórios não são fornecidos pelo cliente?

	- A) 200 OK
	- B) 404 Not Found
	- C) 500 Internal Server Error
	- D) 400 Bad Request

### 6. Ao criar um recurso cujo identificador é especificado pelo cliente no URI, qual método HTTP deve ser utilizado?

	- A) PUT
	- B) POST
	- C) GET

### 7. Após a criação bem sucedida de um novo recurso, qual o status code recomendado na resposta?

	- A) 201 Created
	- B) 200 OK
	- C) 204 No Content

## JavaScript

### 8. Executando o código JavaScript apresentado:

```javascript
const a = [1,  , "Str"]
console.log(a.length)
```

	- A) Provoca um erro de execução
	- B) Escreve na consola 3
	- C) Escreve na consola o caractere a

### 9. Executando o código JavaScript apresentado:

```javascript
const p = {x : 4,  y: 8}
p.z = 12
console.log(p.x, p["y"], p.z)
```

	- A) Provoca um erro de execução
	- B) Escreve na consola 4  undefined 12
	- C) Escreve na consola 4 8 12

### 10. Considere o código JavaScript apresentado, onde f() recebe como parâmetro uma Promise.

```javascript
async function f(promise){
  const v = promise  
  console.log(v)
}
```

	- A) Falta a palavra async antes de promise na linha 2
	- B) Falta a palavra let antes de promise na linha 2
	- C) Falta a palavra await antes de promise na linha 2

### 11. Qual é o resultado da expressão `typeof undefined`?

	- A) "undefined"
	- B) "null"
	- C) "object"

### 12. Executando o código JavaScript apresentado, qual é o resultado?

```javascript
const o = { a: 1 }
const k = 'a'
console.log(o[k])
```

	- A) 1
	- B) undefined
	- C) 'a'

## HTML

### 13. Nma página HTML básica, o elemento raiz é?

	- A) div
	- B) head
	- C) body
	- D) html

### 14. No desenvolvimento web, para aplicar consistentemente um conjunto de regras de estilo CSS a todos os elementos de um tipo específico dentro de um documento HTML — por exemplo, garantindo que todos os cabeçalhos de nível 1 (h1) compartilhem a mesma fonte e tamanho —, qual é o tipo de seletor mais apropriado e semanticamente correto a ser empregue?

	- A) O seletor de ID, utilizando o símbolo cardinal (#)
	- B) O seletor de Classe, utilizando o ponto (.)
	- C) O seletor de Tipo, utilizando diretamente o nome do elemento HTML
	- D) Nenhuma delas

### 15. Que elemento HTML é utilizado para inserir uma imagem na página?

	- A) img
	- B) picture
	- C) link

### 16. No elemento `<a>`, qual atributo define o destino do hyperlink?

	- A) href
	- B) src
	- C) action

## Handlebars

### 17. Qual é a sintaxe Handlebars correta para verificar se a lista de produtos (products) existe e não está vazia, exibindo o conteúdo (os parágrafos de produtos) somente se a lista for verdadeira (existir dados)?

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Products</title>
    </head>
    <body>
        <h2>Lista de Produtos</h2>
        {{TODO}}
            <p>
                A lista está pronta para ser exibida.
            </p>
        {{TODO}}
    </body>
</html>
```

	- A) {{#each products}} ...{{/each}}
	- B) {{#if products}} ...{{/if}}
	- C) {{#if products}} ...{{/else}}
	- D) {{#for products}} ...{{/}}

### 18. Como imprimir o valor de uma variável `title` passada ao template?

	- A) {{title}}
	- B) {{#this.title}}
	- C) <% title %>

### 19. Qual é a sintaxe correta para um bloco condicional com alternativa?

	- A) {{#if cond}} ... {{else}} ... {{/if}}
	- B) {{#if cond}} ... {{/else}}
	- C) {{#else cond}} ... {{/if}}












