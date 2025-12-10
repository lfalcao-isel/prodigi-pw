iimport express from 'express';

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
