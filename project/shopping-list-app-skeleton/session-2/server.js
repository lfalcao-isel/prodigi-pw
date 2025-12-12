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

// Protected routes (require authentication)
app.get('/lists', basicAuthMiddleware, handlers.handleGetLists);
app.get('/lists/create', basicAuthMiddleware, handlers.handleGetCreateList);
app.get('/lists/:id', basicAuthMiddleware, handlers.handleGetList);
app.get('/lists/:id/items/create', basicAuthMiddleware, handlers.handleGetAddItem);


//TODO: Add POST /lists/create route
//app.post( TODO ,basicAuthMiddleware, TODO);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Test credentials:');
    console.log('  alice / password123');
    console.log('  bob / secret456');
    console.log('  charlie / test789');
});
