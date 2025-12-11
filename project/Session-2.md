# Session 2: Backend Setup & Server Implementation (2.5 hours)

## Objectives

By the end of this session, you should have:

- ✅ Set up a Node.js/Express server
- ✅ Converted static HTML views to dynamic Handlebars templates
- ✅ Implemented dynamic page rendering with Handlebars (loops, conditionals)
- ✅ Completed async data access modules (data layer)
- ✅ User authentication with Basic Auth middleware
- ✅ Connected user authentication to list management
- ✅ Fixed route parameter handling to retrieve dynamic IDs
- ✅ Implemented sorting and filtering logic for favorite lists

## Requirements

### 2.1. Project Structure

``` text
shopping-list-app/
├── server.js                    # Express server setup
├── shopping-list-web-app.js     # Route handlers (named functions)
├── shopping-list-services.js    # Business logic layer
├── shopping-list-data.js        # Data access module (async)
├── users-services.js            # User business logic
├── users-data.js                # User data access
├── auth-middleware.js           # Basic Auth middleware
├── package.json
└── views/
    ├── home.hbs
    ├── lists.hbs               # Replaces lists.html
    ├── list-detail.hbs         # Replaces list_detail.html (includes add item form)
    ├── new-list.hbs            # Form for creating lists
    └── error.hbs               # Error page
```

### 2.2. Users Module

- **users-data.js:** Async data access for users
  - Mock users with: id, username, password
  - `validateCredentials(username, password)` - async
  - Returns user WITHOUT password
  - Use `Promise.resolve()` and `Promise.reject()`
- **users-services.js:** Business logic for users
  - `validateUser(username, password)` - async
  - Validates credentials using data layer

### 2.3. Authentication Middleware (`auth-middleware.js`)

- Implement [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication):
  - Parse `Authorization` header
  - Decode Base64 credentials
  - Validate username/password
  - Attach user object to `req.user` (without password)
  - Return 401 with `WWW-Authenticate` header on failure
- Apply middleware to all routes requiring authentication

### 2.4. Data Access Module (`shopping-list-data.js`)

- Async functions (all return Promises):
  - `getAllLists(userId)` - Get all lists for a user
  - `getListById(userId, listId)` - Get specific list with items
  - `createList(userId, name)` - Create new list
  - `deleteList(userId, listId)` - Delete list
  - `addItem(userId, listId, {name, quantity})` - Add item to list
  - `toggleBought(userId, listId, itemId)` - Mark item as bought/unbought
  - `deleteItem(userId, listId, itemId)` - Remove item
- **Data Structure:** Organize lists by userId
- **Important:** Use `Promise.resolve()` and `Promise.reject()` (no Promise constructor)
- **Important:** No `setTimeout` usage

### 2.5. Services Layer (`shopping-list-services.js`)

- Async functions that:
  - Call data layer with `await`
  - Add validation/business logic
  - Handle errors appropriately
- Functions:
  - `getAllLists(userId)`
  - `getList(userId, listId)`
  - `createNewList(userId, name)` - with validation
  - `removeList(userId, listId)`
  - `addItemToList(userId, listId, name, quantity)` - with validation
  - `toggleItem(userId, listId, itemId)`
  - `removeItem(userId, listId, itemId)`

### 2.6. Route Handlers (`shopping-list-web-app.js`)

- **IMPORTANT:** Use named functions (NOT arrow functions)
- Handlers for GET endpoints only (POST handlers will be added in Session 3):

  ```javascript
  async function handleGetHome(req, res) { }
  async function handleGetLists(req, res) { }
  async function handleGetList(req, res) { }
  async function handleGetCreateList(req, res) { }
  async function handleGetAddItem(req, res) { }
  ```

- All handlers use `async/await` with proper error handling
- Routes with authentication middleware:

  ``` text
  GET  /                          -> handleGetHome (public)
  GET  /lists                     -> handleGetLists (protected)
  GET  /lists/create              -> handleGetCreateList (protected)
  GET  /lists/:id                 -> handleGetList (protected)
  GET  /lists/:id/items/create    -> handleGetAddItem (protected)
  ```

- **Note:** POST routes for mutations will be implemented in Session 3

### 2.7. Express Server (`server.js`)

- Set up Express app:
  - Configure Handlebars view engine
  - Set views directory to `./views`
  - Middleware for URL-encoded forms
  - Serve static files from `./public` (optional, no static files required yet)
  - Register GET routes with auth middleware
  - Listen on port 3000
- **Note:** Only GET routes are registered in this session

### 2.8. View Templates

- Convert HTML files to Handlebars (`.hbs`):
  - Use `{{#each}}` loops for displaying lists/items
  - Use `{{#if}}` for conditional rendering
  - Display `{{user.username}}` on protected pages
  - Use `{{../variable}}` syntax when needed for context
- **Note:** The `list-detail.hbs` template includes both the items table AND the add item form in the same page (no separate `add_item.hbs`)

## Student Tasks

The skeleton code has several incomplete implementations that you need to fix:

### Task 1: Convert Static Views to Dynamic

- The views in `views/` folder are currently static HTML
- Convert them to use Handlebars syntax:
  - Replace hardcoded username "alice" with `{{user.username}}`
  - Replace hardcoded list data with `{{#each lists}}` loops
  - Replace hardcoded item data with `{{#each list.items}}` loops
  - Use `{{#if item.bought}}` for conditional status rendering
  - Update all links to use dynamic IDs: `/lists/{{this.id}}`

### Task 2: Fix `handleGetList` Implementation

- The `handleGetList` function in `shopping-list-web-app.js` has a bug
- Currently uses hardcoded `id = 1` instead of reading from route parameter
- Fix: Use `req.params.id` to get the list ID from the URL

### Task 3: Implement `getAllLists` in Data Layer

- The `getAllLists` function in `shopping-list-data.js` currently throws an error
- Implementation should:
  - Return the lists array for the given userId
  - Return empty array if userId not found
  - Use `Promise.resolve()` to return the result


### Task 4: Implement `getFavorites` Function

- In `shopping-list-web-app.js`, create the `getFavorites(lists, maxFavorites)` function
- Currently throws "Not implemented" error
- Implementation should:
  - Sort lists by number of items (descending order)
  - Return only the first `maxFavorites` lists
  - Use `.sort()` and `.slice()` methods

### Task 5: Fix `handleGetLists` to Pass Favorites

- The `handleGetLists` function needs to pass a `favorites` property to the view
- Currently calculates `fav` but doesn't pass it to the template
- Call `getFavorites(lists, 2)` to get top 2 lists with most items (already done)
- Fix: Pass `favorites: fav` property to the `lists.hbs` template along with `lists` and `user`

## Verification Checklist

### Server & Authentication

- [ ] Server starts without errors: `npm start`
- [ ] Server listens on `http://localhost:3000`
- [ ] Home page accessible without authentication
- [ ] Lists page requires Basic Auth (browser prompts for credentials)
- [ ] Error handling works (invalid auth returns 401)

### User Isolation & Data Access

- [ ] After auth, user sees only their own lists
- [ ] Different users (alice vs bob) see different lists
- [ ] User object available in views without password (displays `{{user.username}}`)
- [ ] `getAllLists` in data layer returns correct lists for each user
- [ ] Data layer uses only `Promise.resolve()` and `Promise.reject()`

### Dynamic Views (Task 1)

- [ ] No hardcoded usernames in views (uses `{{user.username}}`)
- [ ] Lists displayed using `{{#each lists}}` loops
- [ ] Items displayed using `{{#each list.items}}` loops
- [ ] Item status shows conditionally with `{{#if item.bought}}`
- [ ] All links use dynamic IDs: `/lists/{{this.id}}`

### Route Handlers (Task 2)

- [ ] `handleGetList` correctly uses `req.params.id` (not hardcoded `id = 1`)
- [ ] Clicking on a list shows the correct list detail page
- [ ] All route handlers use named functions (not arrow functions)
- [ ] All routes respond correctly with proper error handling

### Favorites Feature (Tasks 3 & 4)

- [ ] `getFavorites` function implemented and sorts by item count (descending)
- [ ] `handleGetLists` passes `favorites` property to view
- [ ] Favorites section displays top 2 lists with most items
- [ ] Change `getFavorites(lists, 1)` - verify only 1 card appears in favorites
- [ ] Change `getFavorites(lists, 3)` - verify only 3 cards appear in favorites
- [ ] Favorites update correctly when lists have different item counts
