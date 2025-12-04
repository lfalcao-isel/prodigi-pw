# **Web App with Express and Handlebars (Products Manager)**

## **Overview**

Build a small **Express** web application using **Handlebars (hbs)** as
the view engine.\
The app manages a collection of **in-memory products** and supports:

1.  **List all products**
2.  **View details of a single product**
3.  **Create a new product**

<!--- **Note**: You only need to follow the next steps and create the Handlebars templates

 The UI must use **Bootstrap** for styling.>--->
------------------------------------------------------------------------

## **1. Project Setup**

Install Node dependencies:

``` bash
npm init -y
npm install express hbs
```

------------------------------------------------------------------------

## **2. Application Requirements**

Each product contains:

-   `id`: number
-   `name`: string
-   `price`: number

Example:

``` json
{
  "id": 1,
  "name": "Laptop",
  "price": 899.99
}
```

### Routes to Implement

The application must support three routes:

1. **List all products**  
   - **Route:** `GET /products`  
   - **Description:** Renders an HTML page showing all products using a Handlebars template.

2. **Product details**  
   - **Route:** `GET /products/:id`  
   - **Description:** Displays the details of a single product in a dedicated view.

3. **Create a new product**  
   - **Routes:**  
     - `GET /newproductview` — Renders an HTML page to create a new product 
     - `POST /products` — processes the form submission and inserts the new product into memory  
   - **Description:** New products are stored in memory only.


------------------------------------------------------------------------

## **3. Full Implementation (`app.js`)**

``` javascript
import express from 'express';

const app = express();
const PORT = 3000;

// Configure Handlebars

app.set('view engine', 'hbs');

// Middleware to parse POST form data
app.use(express.urlencoded({ extended: true }));

// In-memory products (pre-filled)
const products = [
  { id: 1, name: 'Laptop', price: 899.99 },
  { id: 2, name: 'Mouse', price: 19.99 },
  { id: 3, name: 'Monitor', price: 149.99 }
];

// ---------- ROUTES ----------

// 1. List all products
app.get('/products', getProducts)

// 2. Product details
app.get('/products/:id',getProductById) 

// 3. Form for new product
app.get('/newproductview', newProductView)

// 3b. Handle form submission
app.post('/products', createProduct)


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
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

# **4. Views (`/views` folder)**

Create the folder:

    /views

The following **HTML examples** are provided as a reference. Students should **use these as a base to create their Handlebars (`.hbs`) templates**.

------------------------------------------------------------------------

### **4.1 List Products (`products.hbs`)**

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
  <title>Product Detail</title>
</head>
<body>
  <h1>Product Detail</h1>

  <p><strong>ID:</strong> 1</p>
  <p><strong>Name:</strong> Laptop</p>
  <p><strong>Price:</strong> 899.99</p>

  <a href="/products">Back to List</a>
</body>
</html>
```



### **4.3 New Product Form (new-product.hbs)**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
</head>
<body>
  <h1>Add New Product</h1>

  <form action="/products" method="POST">
    <p><label>Product Name:</label>
    <input type="text" name="name" required></p>

    <p><label>Price:</label>
    <input type="number" name="price" step="0.01" required></p>

    <button type="submit">Create Product</button>
  </form>

  <a href="/products">Back to List</a>
</body>
</html>
```

### 4.4 Error View `error-view.hbs` 

This view must render an HTML page that contains:

- An error message displayed inside a **paragraph**
- A **link** that returns the user to `/products`

This view is used in the following cases:

- When a **product is not found**
- When **invalid form data** is submitted**

------------------------------------------------------------------------

# **5. Running the Application**

Start the server:

``` bash
node app.js
```

Open:

    http://localhost:3000/products
