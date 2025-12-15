# 🎨🛠️ Session 1: HTML Structure, Navigation and Styling (CSS) (2.5 hours)

Language: [🇬🇧 English](Session-1-EN.md) | [🇵🇹 Português](Session-1-PT.md)

## 🎯 Objectives

By the end of this session, you should have:

- ✅ **Validated** the structure and navigation of `index.html`.
- ✅ **Completed** the Semantic HTML structure for the core management pages (`lists`, `list_detail`, `new_list`).
- ✅ **Applied** the necessary **Bootstrap classes** to style the pages and tables.
- ✅ **Implemented** table headers and the required **Mock Data**.
- ✅ **Finalized** the complete structure of all required forms.

---

## 📝 Styling Note

> 💡 The environment is configured with **Bootstrap**. Your task is to apply the framework's classes (e.g. `table`, `btn`, `input`) to fulfill the layout and design requirements.

---

## 🏗️ Requirements and Implementation Tasks

### 1. Home Page (`index.html`)

> **Status:** ✅ **Completed.** This page is ready and serves as the starting point and authentication entry for the application.

### 2. Shopping Lists Dashboard (`lists.html`)

- **Function:** View user lists.
- **Base Structure:** The main table is present but the list cards are imcompleted.
- **Completion Tasks (Table):**
    1. Add Items count to each card 
    2. And the buttons View and Delete

- **Final Result**

![lists.html final](images/lists-final.jpg)


### 3. List Detail Page (`list_detail.html`)

- **Function:** View and manage items in a list.
- **Base Structure:** The page structure, items table, and form area are present.
- **Completion Tasks:**
    1.  **Table - Headers:** **Complete** the headers (`<th>`) for: **Quantity**, **Status (Bought/Pending)**, and **Actions**.
    2.  **Table - Content:** **Add** rows of mock items to the table.

- **Final Result**

![list_detail.html final](images/list-detail-final.jpg)


### 4. Create New List Form (`new_list.html`)

- **Function:** Simple form to create a new list.
- **Base Structure:** The page title and "Cancel" link are ready.
- **Completion Tasks (Form):**
    1.  **Input:** **Add** the *label* and the text input field (`<input type="text">`) for the **List Name**, applying the **`.form-control`** class.
    2.  **Action:** **Create List** and style the **Submit** button.

- **Final Result**

![new_list.html final](images/new-list-final.jpg)

### 5. (Optional) Breadcrumb Component Implementation

The **Bootstrap Breadcrumb component** (`<nav aria-label="breadcrumb">`) must be implemented on **all core management pages** (`lists.html`, `list_detail.html`, `new_list.html`) to enhance navigation and orientation.

### **Completion Tasks:**

1.  **Implement** the Breadcrumb component (`<nav>`) and list (`<ol class="breadcrumb">`) structure on all three pages.
2.  **Define** the correct navigation path for each page, ensuring the **current page** is marked with the `active` class and `aria-current="page"`:

| Page | Breadcrumb Path |
| :--- | :--- |
| **`lists.html`** (Shopping Lists Dashboard) | **Home** $\rightarrow$ **Shopping Lists** (Active) |
| **`list_detail.html`** (List Detail) | **Home** $\rightarrow$ **Shopping Lists** $\rightarrow$ **[List Name]** (Active) |
| **`new_list.html`** (Create New List) | **Home** $\rightarrow$ **Shopping Lists** $\rightarrow$ **Create New List** (Active) |

**NOTE** : `index.html` file has an example of Breadcrumb component usage
