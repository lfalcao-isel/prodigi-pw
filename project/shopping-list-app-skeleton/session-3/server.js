// server.js - Express server setup

import express from 'express';
import { basicAuthMiddleware } from './auth-middleware.js';
import * as handlers from './shopping-list-web-app.js';

const app = express();
const PORT = 3000;

// Configure Handlebars view engine
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
app.get('/', handlers.handleGetHome);
app.post('/logout', handlers.handleLogout);

// Protect all /lists routes with Basic Auth registered once
app.use('/lists', basicAuthMiddleware);
// Lists routes (middleware applied above)
app.get('/lists', handlers.handleGetLists);

// TODO Register List  Create Route

app.get('/lists/:id', handlers.handleGetList);

// Session 3 addition: Edit form with static values (middleware applied above)
app.get('/lists/:id/edit', handlers.handleGetEditList);

// POST routes (creation, edit, toggle, delete) (middleware applied above)
app.post('/lists', handlers.handleCreateList);
app.post('/lists/:id/edit', handlers.handleEditList);
app.post('/lists/:id/delete', handlers.handleDeleteList);
app.post('/lists/:id/items/create', handlers.handleAddItem);
app.post('/lists/:id/items/:itemId/toggle', handlers.handleToggleItem);
app.post('/lists/:id/items/:itemId/delete', handlers.handleDeleteItem);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Test credentials:');
  console.log('  alice / password123');
  console.log('  bob / secret456');
  console.log('  charlie / test789');
});
