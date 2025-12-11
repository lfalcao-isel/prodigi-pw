// shopping-list-web-app.js - Route handlers (named functions)

import * as shoppingListServices from './shopping-list-services.js';

// GET /
async function handleGetHome(req, res) {
    try {
        res.render('home', { user: req.user });
    } catch (err) {
        res.status(500).render('error', { message: 'Error loading home page', status: 500 });
    }
}

// GET /lists
async function handleGetLists(req, res) {
    try {
        //const lists = await shoppingListServices.getAllLists(req.user.id);
        //const fav = getFavorites(lists, 2)
        // TODO: Pass fav array as favorites property to the 'lists' view
        res.render('lists'
            //{ lists: lists, user: req.user }
             );
    } catch (err) {
        res.status(500).render('error', { message: 'Error loading lists', status: 500 });
    }
}

// GET /lists/:id
async function handleGetList(req, res) {
    try {
        const id = 1;  // TODO
        const list = await shoppingListServices.getList(req.user.id, id);
        res.render('list-detail', { list, user: req.user });
    } catch (err) {
        res.status(404).render('error', { message: 'List not found', status: 404 });
    }
}

// GET /lists/create
async function handleGetCreateList(req, res) {
    try {
        res.render('new-list', { user: req.user });
    } catch (err) {
        res.status(500).render('error', { message: 'Error loading form', status: 500 });
    }
}

// GET /lists/:id/items/create
async function handleGetAddItem(req, res) {
    try {
        const list = await shoppingListServices.getList(req.user.id, req.params.id);
        res.render('add-item', { list, user: req.user });
    } catch (err) {
        res.status(404).render('error', { message: 'List not found', status: 404 });
    }
}

// Helper function to get favorite lists
function getFavorites(lists, maxFavorites) {
    // TODO: Implement this function
    // Should sort lists by number of items (descending)
    // Return only the first maxFavorites lists
    // Hint: Use .sort() and .slice()
    //throw new Error('getFavorites not implemented');
}

export {
    handleGetHome,
    handleGetLists,
    handleGetList,
    handleGetCreateList,
    handleGetAddItem
};
