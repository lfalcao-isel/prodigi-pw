import * as shoppingListServices from './shopping-list-services.js'

// GET /
function handleGetHome(req, res) {
  res.render('home', { title: 'Shopping Lists', user: req.user })
}

// GET /lists
async function handleGetLists(req, res) {
  try {
    const lists = await shoppingListServices.getAllLists(req.user.id)
    // const favorites = getFavorites(lists, 2) // TODO: compute favorites from lists (only enable after implementing helper)
    // TODO: Pass `favorites` to the view when ready
    res.render('lists', { title: 'All Lists', lists, user: req.user /*, favorites */ })
  } catch (e) {
    res.status(500).render('error', { message: 'Unexpected error', status: 500 })
  }
}

// GET /lists/create
function handleGetCreateList(req, res) {
  res.render('edit-list', { user: req.user })
}



// GET /lists/:id (detail)
async function handleGetList(req, res) {
  try {
    const list = await shoppingListServices.getList(req.user.id, req.params.id)
    if (!list) return res.status(404).render('error', { message: 'List not found', status: 404 })
    res.render('list-detail', { title: 'List', list, user: req.user })
  } catch (e) {
    res.status(500).render('error', { message: 'Unexpected error', status: 500 })
  }
}

// GET /lists/:id/edit
// Handler loads the real list; the view will render static placeholder values.
async function handleGetEditList(req, res) {
  try {
    const id = req.params.id
    const list = await shoppingListServices.getList(req.user.id, id)
    if (!list) return res.status(404).render('error', { message: 'List not found', status: 404 })
    res.render('edit-list', { list, user: req.user })
  } catch (e) {
    res.status(500).render('error', { message: 'Unexpected error', status: 500 })
  }
}

// POST /lists/create
async function handleCreateList(req, res) {
  try {
    const { name } = req.body
    await shoppingListServices.createNewList(req.user.id, name)
    res.redirect('/lists')
  } catch (e) {
    res.status(400).render('error', { message: e.message || 'Invalid data', status: 400 })
  }
}

// POST /lists/:id/edit
async function handleEditList(req, res) {
  try {
    const id = req.params.id
    const { name } = req.body
    await shoppingListServices.updateList(req.user.id, id, { name })
    res.redirect(`/lists/${id}`)
  } catch (e) {
    res.status(400).render('error', { message: e.message || 'Invalid data', status: 400 })
  }
}

// POST /lists/:id/items/:itemId/toggle
async function handleToggleItem(req, res) {
  try {
    const id = req.params.id
    const itemId = req.params.itemId
    await shoppingListServices.toggleItem(req.user.id, id, itemId)
    res.redirect(`/lists/${id}`)
  } catch (e) {
    res.status(404).render('error', { message: e.message || 'Item not found', status: 404 })
  }
}

// POST /lists/:id/delete
async function handleDeleteList(req, res) {
  try {
    const id = req.params.id
    await shoppingListServices.removeList(req.user.id, id)
    res.redirect('/lists')
  } catch (e) {
    res.status(404).render('error', { message: e.message || 'List not found', status: 404 })
  }
}

// POST /lists/:id/items/create
async function handleAddItem(req, res) {
  try {
    const id = req.params.id
    const { name, quantity } = req.body
    await shoppingListServices.addItemToList(req.user.id, id, name, quantity)
    res.redirect(`/lists/${id}`)
  } catch (e) {
    res.status(400).render('error', { message: e.message || 'Invalid data', status: 400 })
  }
}

// POST /lists/:id/items/:itemId/delete
async function handleDeleteItem(req, res) {
  try {
    const id = req.params.id
    const itemId = req.params.itemId
    await shoppingListServices.removeItem(req.user.id, id, itemId)
    res.redirect(`/lists/${id}`)
  } catch (e) {
    res.status(404).render('error', { message: e.message || 'Item not found', status: 404 })
  }
}

// POST /logout
async function handleLogout(req, res) {
  res.setHeader('WWW-Authenticate', 'Basic realm="Shopping List"')
  res.status(401).send('Logged out. Refresh the page to login again.')
}


// Helper function to get favorite lists
function getFavorites(lists, maxFavorites) {
  // TODO: Implement this helper
  // Should sort lists by number of items (descending)
  // Return only the first maxFavorites lists
  // Hint: Use .sort() and .slice()
  return lists // Replace this with the correct implementation
}
export {
  handleGetHome,
  handleGetLists,
  handleGetCreateList,
  handleGetList,
  handleGetEditList,
  handleCreateList,
  handleEditList,
  handleToggleItem,
  handleDeleteList,
  handleAddItem,
  handleDeleteItem,
  handleLogout
}
