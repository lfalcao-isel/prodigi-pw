# Session 3 - Shopping List App

Language: [🇬🇧 English](README-EN.md) | [🇵🇹 Português](README-PT.md)

**Session Documentation:** [Session-3-EN.md](../../Session-3-EN.md)

## How to Integrate Session 3 Code with Your Session 2 Work

This session builds upon the work completed in Session 2.

### Prerequisites

It is assumed that you have completed all Session 2 tasks in your **own working directory**, namely:
- Implemented the `getFavorites` function to sort lists by number of items
- Made the views dynamic (loading real data on lists and details pages)
- Registered all necessary GET routes

### ⚠️ IMPORTANT: Protect Your Session 2 Work

**DO NOT copy all files from session-3 to your working directory!** This will overwrite the code you implemented in Session 2.
Before proceeding with the following steps, make a backup copy of your Session 2 working directory.

### Integration Steps (Copy Only New Files)

#### 1. Files to Copy from session-3 Folder to Your Working Directory

Open the `session-3` folder in your file explorer and copy **only** the following files to your working directory:

**Required files to copy:**

- `shopping-list-data.js` - contains new CRUD functions (createList, updateList, deleteList, addItem, deleteItem, toggleBought)
- `shopping-list-services.js` - contains new service functions with validation
- `shopping-list-web-app.js` - contains new POST handlers and the getFavorites method
- `server.js` - contains registered POST routes
- `views/edit-list.hbs` - new unified view for creating/editing lists

**⚠️ WARNING: Files you should NOT copy (to preserve your Session 2 work):**
- ❌ `views/lists.hbs` - you already have your dynamic version from Session 2
- ❌ `views/new-list.hbs` - if you implemented it in Session 2
- ❌ `views/list-detail.hbs` - you already have your dynamic version from Session 2 (the session-3 version is static for demonstration)
- ❌ `views/home.hbs` and `views/error.hbs` - if you already customized them
- ❌ `package.json` - if you already customized it (but you can compare to see if there are new dependencies)

**Files you can copy (won't affect previous work):**
- `auth-middleware.js`, `users-data.js`, `users-services.js` - if you didn't modify them

#### 2. Important Note About Copy Options

**Option A - Copy base files from session-3 (recommended for speed):**
- By copying `shopping-list-data.js`, `shopping-list-services.js`, `shopping-list-web-app.js` and `server.js`, you'll get already implemented code
- **Disadvantage:** You'll lose your Session 2 Student Tasks solutions in these files
- **You'll need to re-implement:** the `getFavorites` function and the modifications you made to GET handlers

**Option B - DO NOT copy base files (more work):**

- Keep your Session 2 files
- Manually add the new functions and routes by consulting Session-3-EN.md
- **Advantage:** Preserves 100% of your Session 2 work
- **Disadvantage:** More manual integration work

#### 3. Verify What You Have in Your Directory

Confirm you have **all** these files (combination of Session 2 + Session 3):

**Essential files:**
- ✅ `shopping-list-data.js`
- ✅ `shopping-list-services.js`
- ✅ `shopping-list-web-app.js`
- ✅ `server.js`
- ✅ `auth-middleware.js`
- ✅ `users-data.js`
- ✅ `users-services.js`
- ✅ `package.json`

**Essential views:**
- ✅ `views/home.hbs`
- ✅ `views/error.hbs`
- ✅ `views/lists.hbs` (your Session 2 version or from session-3)
- ✅ `views/list-detail.hbs` (your Session 2 version or from session-3)
- ✅ `views/edit-list.hbs` (copied from session-3)

#### 4. Install Dependencies and Test

```bash
npm install
npm run dev
```

Test in browser:
- [ ] Can login
- [ ] Lists page shows lists (Session 2 or 3 version)
- [ ] Can access list details

If everything works, you're ready for Session 3 tasks!

---

## What You Will Implement in Session 3

In this session, you will add **form processing** and **data persistence** functionality to the application:

### Main Objectives

1. **Complete Data Persistence**
   - Add CRUD operations (Create, Read, Update, Delete) for lists and items
   - Implement functions in `shopping-list-data.js`: `createList`, `updateList`, `deleteList`, `addItem`, `deleteItem`, `toggleBought`

2. **Service Layer Validation**
   - Extend `shopping-list-services.js` with robust validations
   - Ensure non-empty names and positive quantities

3. **POST Routes**
   - Implement handlers to process form submissions
   - Add routes in `server.js` for creating, editing, deleting lists and items
   - Implement "bought" state toggle for items

4. **Error Handling**
   - Client and server validation
   - Clear error messages
   - Appropriate HTTP codes (400, 404, 500)

### Student Tasks to Complete

Consult [Session-3-EN.md](../../Session-3-EN.md) or [Session-3-PT.md](../../Session-3-PT.md) for complete details of mandatory and optional tasks.

**Mandatory Tasks:**
1. Register `GET /lists/create` route (currently commented)
2. Make `edit-list.hbs` dynamic in edit mode
3. Make `list-detail.hbs` fully dynamic (actions and data)

**Optional Task:**
- Implement favorite lists system with persistence and interface

### Expected File Structure

After migration and before starting tasks:

```
session-3/
├── server.js                    # Express server with routes
├── shopping-list-data.js        # Data layer (to be extended)
├── shopping-list-services.js    # Services with validation (to be extended)
├── shopping-list-web-app.js     # Route handlers (to be extended)
├── auth-middleware.js           # Authentication middleware
├── users-data.js                # User data
├── users-services.js            # User services
├── package.json                 # Dependencies
└── views/
    ├── home.hbs                 # Home page
    ├── lists.hbs                # Lists dashboard (dynamic from Session 2)
    ├── list-detail.hbs          # Details (static, to make dynamic)
    ├── edit-list.hbs            # Create/edit list (to make dynamic)
    └── error.hbs                # Error page
```

### Important Notes

- **DO NOT** rewrite code already working from Session 2
- Keep all dynamic functionality already implemented
- Add only new POST functionality and validations
- Use `async`/`await` in all new handlers
- Test each feature after implementation

## Start Working

1. Complete the migration described above
2. Read [Session-3-EN.md](../../Session-3-EN.md) or [Session-3-PT.md](../../Session-3-PT.md)
3. Implement features step by step
4. Test regularly with `npm run dev`
5. Check the verification checklist in the session file

Good work! 🚀
