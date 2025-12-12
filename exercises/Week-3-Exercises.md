# **Aplicação Web com Express e Handlebars (Gestor de Produtos)**

## **Visão Geral**

Construir uma pequena aplicação web em **Express** usando **Handlebars (hbs)** como
motor de visualização.\
A aplicação gere uma coleção de **produtos em memória** e suporta:

1.  **Listar todos os produtos**
2.  **Ver detalhes de um único produto**
3.  **Criar um novo produto**

<!--- **Nota**: Apenas precisa de seguir os próximos passos e criar os templates Handlebars

 A UI deve usar **Bootstrap** para estilização.>--->
------------------------------------------------------------------------

## **1. Configuração do Projeto**

Instalar dependências do Node:

``` bash
npm init -y
npm install express hbs
```

------------------------------------------------------------------------

## **2. Requisitos da Aplicação**

Cada produto contém:

-   `id`: número
-   `name`: string
-   `price`: número

Exemplo:

``` json
{
  "id": 1,
  "name": "Laptop",
  "price": 899.99
}
```

### Rotas a Implementar

A aplicação deve suportar três rotas:

1. **Listar todos os produtos**  
   - **Rota:** `GET /products`  
   - **Descrição:** Renderiza uma página HTML mostrando todos os produtos usando um template Handlebars.

2. **Detalhes do produto**  
   - **Rota:** `GET /products/:id`  
   - **Descrição:** Apresenta os detalhes de um único produto numa vista dedicada.

3. **Criar um novo produto**  
   - **Rotas:**  
     - `GET /newproductview` — Renderiza uma página HTML para criar um novo produto 
     - `POST /products` — processa o envio do formulário e insere o novo produto em memória  
   - **Descrição:** Novos produtos são armazenados apenas em memória.


------------------------------------------------------------------------

## **3. Implementação Completa (`app.js`)**

``` javascript
import express from 'express';

const app = express();
const PORT = 3000;

// Configurar Handlebars

app.set('view engine', 'hbs');

// Middleware para processar dados de formulários POST
app.use(express.urlencoded({ extended: true }));

// Produtos em memória (pré-preenchidos)
const products = [
  { id: 1, name: 'Laptop', price: 899.99 },
  { id: 2, name: 'Mouse', price: 19.99 },
  { id: 3, name: 'Monitor', price: 149.99 }
];

// ---------- ROTAS ----------

// 1. Listar todos os produtos
app.get('/products', getProducts)

// 2. Detalhes do produto
app.get('/products/:id',getProductById) 

// 3. Formulário para novo produto
app.get('/newproductview', newProductView)

// 3b. Processar envio do formulário
app.post('/products', createProduct)


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor a executar em http://localhost:${PORT}`);
});

//Handlers

function getProducts(req, res){
  res.render('products', { title: 'Product List', products })
}
  
function getProductById(req, res){
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).render('error-view', { message : 'product not found' })
  }
  res.render('product-detail', { title: 'Product Detail', product })
}

function newProductView(req, res){
  res.render('new-product', { title: 'Add Product' });
}

function createProduct(req, res) {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).render('error-view', { message : 'invalid product' })
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price)
  };

  products.push(newProduct);
  res.redirect('/products');
}

```

------------------------------------------------------------------------

# **4. Vistas (pasta `/views`)**

Criar a pasta:

    /views

Os seguintes **exemplos HTML** são fornecidos como referência. Os alunos devem **usá-los como base para criar os seus templates Handlebars (`.hbs`)**.

------------------------------------------------------------------------

### **4.1 Listar Produtos (`products.hbs`)**

```html
<!DOCTYPE html>
<html>
<head>
  <title>All Products</title>
</head>
<body>
  <h1>All Products</h1>

  <a href="\newproductview">Add New Product</a>

  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Laptop</td>
        <td><a href="/products/1">View</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Mouse</td>
        <td><a href="/products/2">View</a></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Monitor</td>
        <td><a href="/products/3">View</a></td>
      </tr>
    </tbody>
  </table>
</body>
</html>


```

### **4.2 Product Detail (product-detail.hbs)**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Detalhes do Produto</title>
</head>
<body>
  <h1>Detalhes do Produto</h1>

  <p><strong>ID:</strong> 1</p>
  <p><strong>Nome:</strong> Laptop</p>
  <p><strong>Preço:</strong> 899.99</p>

  <a href="/products">Voltar à Lista</a>
</body>
</html>
```



### **4.3 Formulário de Novo Produto (new-product.hbs)**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Título</title>
</head>
<body>
  <h1>Adicionar Novo Produto</h1>

  <form action="/products" method="POST">
    <p><label>Nome do Produto:</label>
    <input type="text" name="name" required></p>

    <p><label>Preço:</label>
    <input type="number" name="price" step="0.01" required></p>

    <button type="submit">Criar Produto</button>
  </form>

  <a href="/products">Voltar à Lista</a>
</body>
</html>
```

### 4.4 Vista de Erro `error-view.hbs` 

Esta vista deve renderizar uma página HTML que contém:

- Uma mensagem de erro apresentada dentro de um **parágrafo**
- Um **link** que devolve o utilizador a `/products`

Esta vista é usada nos seguintes casos:

- Quando um **produto não é encontrado**
- Quando **dados inválidos do formulário** são submetidos**

------------------------------------------------------------------------

# **5. Executar a Aplicação**

Iniciar o servidor:

``` bash
node app.js
```

Abrir:

    http://localhost:3000/products
