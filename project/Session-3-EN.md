# Session 3: Form Processing and Data Persistence (2.5 hours)

Language: [🇬🇧 English](Session-3-EN.md) | [🇵🇹 Português](Session-3-PT.md)

## Objectives

By the end of this session, you should have:

- ✅ Implemented form submission processing
- ✅ Created data persistence (add/delete operations)
- ✅ Validated user input
- ✅ Completed a fully functional multi-user application
- ✅ **(Optional)** Implemented favorite lists system
- ✅ **(Optional)** Maintained file-based data persistence (new implementation of data modules)

## Requirements

### 3.1. Data Persistence

- Extend `shopping-list-data.js` with:
  - `createList(userId, name)` - Add list to user's lists
  - `updateList(userId, listId, patch)` - Update list properties (name)
  - `deleteList(userId, listId)` - Remove list
  - `addItem(userId, listId, {name, quantity})` - Add item to list
  - `deleteItem(userId, listId, itemId)` - Remove item from list
  - `toggleBought(userId, listId, itemId)` - Toggle bought state
- Maintain in-memory data structure (object indexed by userId)
- Use `Promise.resolve()` for success, `Promise.reject()` for errors

### 3.2. Service Layer Validation

- Extend `shopping-list-services.js`:
  - `createNewList(userId, name)` - Validate non-empty name
  - `updateList(userId, listId, patch)` - Update list (delegates to data layer)
  - `removeList(userId, listId)` - With error handling
  - `addItemToList(userId, listId, name, quantity)` - Validate inputs:
    - Non-empty name
    - Quantity > 0
  - `removeItem(userId, listId, itemId)` - With error handling
  - `toggleItem(userId, listId, itemId)` - With error handling
- All functions are async and use await
- All functions throw errors for validation failures

### 3.3. Form Submission Routes

- Implement POST routes in `shopping-list-web-app.js`:
  - `POST /lists/create` - Process new list creation
  - `POST /lists/:id/edit` - Process list editing (name)
  - `POST /lists/:id/delete` - Process list deletion
  - `POST /lists/:id/items/create` - Process item addition
  - `POST /lists/:id/items/:itemId/toggle` - Process bought toggle
  - `POST /lists/:id/items/:itemId/delete` - Process item deletion
  - `POST /logout` - Process logout
- All handlers use `async function`
- All handlers use `await` for async service calls
- Validate inputs and provide error feedback
- Redirect on success, show error page on failure
- Use appropriate HTTP status codes for errors (400, 404, 500)
  
### 3.4. Form Implementation

- Create `edit-list.hbs` (unified view for creating and editing lists):
  - Form with POST method to `/lists/create` (create mode) or `/lists/:id/edit` (edit mode)
  - Text input for list name with `required` attribute
  - Use `{{#if list}}` to differentiate between create (new) and edit (existing)
  - Complete Bootstrap page with navigation and footer
  - **Note:** The form only edits the list name, doesn't allow adding/editing items
- Create `list-detail.hbs` (maintaining static content as in Session 2):
  - Keep static list name and items (e.g., "Grocery Shopping", "Milk", "Bread")
  - Add new buttons/links: "Edit List" to `/lists/1/edit` and "Delete List" form with `POST /lists/1/delete`
  - Add functional inline forms for static items:
    - Toggle bought state: `POST /lists/1/items/1/toggle`, `POST /lists/1/items/2/toggle`
    - Delete item: `POST /lists/1/items/1/delete`, `POST /lists/1/items/2/delete`
  - Fix add item form:
    - `method="post"` and `action="/lists/1/items/create"`
    - Fields: `name="name"` (text) and `name="quantity"` (number, `min="1"`)
  - **Note:** In this session, the view uses static content to demonstrate forms; logic and persistence are implemented, but the view doesn't load data dynamically

### 3.5. Item State

- Implement bought state toggle:
  - Route: `POST /lists/:id/items/:itemId/toggle`
  - Updates item's bought state
  - Redirects back to list details
  - Display visual indicator in list (checkbox, strikethrough, etc.)

### 3.6. Error Handling

- Create `error.hbs` template:
  - Display clear error messages
  - Provide navigation back to safe page
  - Show appropriate status codes
- Handle service errors:
  - Validation errors (400)
  - Not found errors (404)
  - Server errors (500)

### 3.7. Data Validation

- Client-side: HTML5 required attributes
- Server-side:
  - List name non-empty
  - Item name non-empty
  - Quantity must be a positive integer
  - Clear error messages for the user

## Student Tasks

In this session, students must complete the following tasks (similar to Session 2).

**⚠️ IMPORTANT**: Before performing any task, read the steps to follow in the [README](./shopping-list-app-skeleton/session-3/README-EN.md).

### Task 1: Register route for creating list

- The "Create New List" button on the lists page should point to the creation route.
- Update the button's `href` to `/lists/create`.
- Verify that the `GET /lists/create` route is registered in `server.js` and uses the `handleGetCreateList` handler.

### Task 2: Make `edit-list.hbs` dynamic (edit mode)

- In edit mode, load the actual list name and prefill the text field with that value.
- Ensure the form in edit mode POSTs to `/lists/:id/edit` and that the handler applies `await` correctly.
- Maintain create behavior with `POST /lists/create`.

### Task 3: Implement `list-detail.hbs` dynamically

- Replace static content with real data: `{{list.name}}` and `{{#each list.items}}`.
- Make buttons/links and form actions dynamic (remove hardcoded paths like `/lists/1/...`):
  - "Edit List" link: `href="/lists/{{list.id}}/edit"`
  - "Delete List" form: `method="post"` and `action="/lists/{{list.id}}/delete"`
  - Inside `{{#each list.items}}`:
    - "Toggle" button: `method="post"` and `action="/lists/{{../list.id}}/items/{{this.id}}/toggle"`
    - "Delete" button: `method="post"` and `action="/lists/{{../list.id}}/items/{{this.id}}/delete"`
  - "Add item" form: `method="post"` and `action="/lists/{{list.id}}/items/create"`
- Ensure `handleGetList` uses `req.params.id` and that the service returns the correct list for the authenticated user.

### Optional Task: Favorite Lists

Objective: Support favorite lists and, on the lists page, display cards only for favorite lists.

Scope and rules:

- Favorite lists are those marked by the user themselves.
- The `getFavorites(lists, maxFavorites)` method should now return only lists marked as favorites, optionally limiting the number of returned lists.

What needs to be changed/created:

- File `shopping-list-data.js` (data layer):
  - Add a state property (e.g., favorite) to user lists.
  - Create operations to mark and unmark a list as favorite (in-memory persistence with `Promise.resolve()`/`Promise.reject()`).
- File `shopping-list-services.js` (services):
  - Expose functions to mark/unmark favorites with permission validation (only the user's own lists).
  - Adjust any list returns to include the favorite property when applicable.
- File `shopping-list-web-app.js` (Session 3, handlers):
  - Update the `getFavorites(lists, maxFavorites)` function to filter by lists with active favorite and optionally limit to `maxFavorites`.
  - In `handleGetLists`, calculate favorites and pass them to the view (`favorites`) without breaking current behavior.
  - Optional: add `POST` routes to mark/unmark a list as favorite.
- File `views/lists.hbs` (Session 3):
  - Add a cards section that renders only the favorite lists received in the model.
  - Include visual controls to indicate a list's favorite state and a way to change that state.

Acceptance criteria:

- User can mark and unmark a list as favorite.
- The lists page shows cards only for favorites when they exist; otherwise, shows appropriate feedback.
- The `getFavorites` helper returns only favorite lists for the authenticated user.
- Don't expose data from other users.

### Optional Task: File-Based Data Persistence

Objective: Implement file-based data persistence by creating a new implementation of data modules that saves and reads information from JSON files.

Scope and rules:

- User data (shopping lists and registration information) must be saved in JSON files.
- Each user should have their own lists data file (e.g., `data-user1.json`, `data-user2.json`).
- User registration data should be saved in a separate file (e.g., `users.json`).
- Read and write operations must be asynchronous using `fs.promises` (or `fs/promises`).
- In-memory data structure should be maintained for performance, syncing with file after each write operation.

What needs to be changed/created:

- File `users-data.js` (user data layer):
  - Import `fs/promises` module for asynchronous file operations.
  - Create `loadUsers()` function that reads the users JSON file and returns the data (use `Promise.resolve()`/`Promise.reject()`).
  - Create `saveUsers(users)` function that saves all users data to JSON file.
  - Modify `addUser(username, password)` function to:
    - Load data from file at the start of the operation
    - Add new user in memory
    - Save data to file before returning the result
  - Handle I/O errors (file not found, permissions, invalid JSON).
  - Create initial users file if it doesn't exist (with empty array: `[]`).
- File `shopping-list-data.js` (data layer):
  - Import `fs/promises` module for asynchronous file operations.
  - Create `loadUserData(userId)` function that reads the user's JSON file and returns the data (use `Promise.resolve()`/`Promise.reject()`).
  - Create `saveUserData(userId, data)` function that saves user data to JSON file.
  - Modify all existing functions (`createList`, `updateList`, `deleteList`, `addItem`, `deleteItem`, `toggleBought`) to:
    - Load data from file at the start of the operation
    - Perform the operation in memory
    - Save data to file before returning the result
  - Handle I/O errors (file not found, permissions, invalid JSON).
  - Create initial data file if it doesn't exist (with empty structure: `{lists: []}`).
- File `shopping-list-services.js` (services):
  - No significant changes needed, as functions already use `await` and handle errors.
  - Ensure all errors from data layer (including I/O errors) are handled appropriately.

Acceptance criteria:

- User registration data is saved in JSON file on the file system.
- Shopping list data is saved in JSON files on the file system.
- Each user has their own separate lists data file.
- Create, edit, and delete operations persist data to file.
- New user registrations are saved to file.
- Application can recover data after server restart.
- I/O errors are handled appropriately with clear error messages.
- Performance is not significantly affected (use of in-memory cache).

## Verification Checklist

- [ ] Create new list form works and persists data
- [ ] Created lists appear in the lists dashboard
- [ ] Delete list removes list from user's lists
- [ ] Add item form works and persists data
- [ ] Items appear on list details page
- [ ] Delete item removes item from list
- [ ] Toggle item marks as bought/not bought
- [ ] Form validation prevents empty submissions
- [ ] Error messages display for invalid input
- [ ] All named functions used in route handlers
- [ ] Data access uses only `Promise.resolve()` and `Promise.reject()`
- [ ] Redirects work properly after successful operations
- [ ] Different users cannot see each other's lists
- [ ] Each user can only modify their own lists
- [ ] Application fully functional in browser

**Optional - Favorite Lists:**

- [ ] Favorite property added to lists in data layer
- [ ] Functions to mark/unmark favorite implemented in services
- [ ] User can mark and unmark list as favorite
- [ ] `getFavorites` function returns only user's favorite lists
- [ ] Lists page shows cards for favorite lists
- [ ] Visual indicator of favorite state present in interface
