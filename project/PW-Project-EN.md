# Shopping List Management System - Project

Language: [🇬🇧 English](PW-Project.md) | [🇵🇹 Português](PW-Project-PT.md)

## Overview

This project involves building a multi-user shopping list management system in 4 practical sessions of 2.5 hours each. Each session has clear, verifiable objectives that build incrementally on the previous session's work. The system uses **Basic Authentication** to support multiple users, where each user has their own shopping lists.

---

## Project Sessions

- **[Session 1: HTML Structure, Navigation and CSS Styling with Bootstrap](./Session-1-EN.md)** (2.5 hours)
- **[Session 2: Backend Setup & Server Implementation](./Session-2-EN.md)** (2.5 hours)
- **[Session 3: Form Handling & Data Persistence](./Session-3-EN.md)** (2.5 hours)

---

## Overall Grading Criteria

### Functionality (60%)

- All required pages and features implemented
- Forms work correctly and persist data
- User authentication prevents cross-user access
- Error handling is appropriate
- Data separated by user ID

### Code Quality (20%)

- Clean, readable code structure
- Proper use of async/await
- Named functions (no arrow functions) in route handlers
- Data access module uses Promise methods correctly
- Clear separation of concerns (data, services, routes, views)
- Proper error handling with meaningful messages

### User Experience (15%)

- Consistent styling across pages
- Clear navigation between pages
- User information visible on protected pages
- Informative error messages
- Responsive design

### Security & Architecture (5%)

- Basic Authentication implemented correctly
- User data not exposed (no passwords in views)
- Each user sees only their own lists
- Proper use of userId for data isolation

---

## Submission Requirements

For each completed session, demonstrate:

1. **Session 1:**
   - Browser can navigate through all HTML pages
   - Home page explains authentication
   - Different users' lists visible in mock data
   - All pages styled consistently and professionally
   - User info box visible on authenticated pages
  
2. **Session 2:**
   - Server runs and displays dynamic lists from data layer
   - Basic Auth works (browser prompts for credentials)
   - Different users see different lists (alice vs bob)
   - No passwords exposed in HTML

3. **Session 3:**
   - All CRUD operations functional
   - Data persists in-memory during session
   - Forms validate input
   - Users cannot access other users' lists
   - Application fully functional with authentication

---

## Tips & Best Practices

1. **Authentication:** Test with different users to verify isolation
2. **Testing:** Frequently test new features during development
3. **Data Structure:** Keep userId as primary key for all list operations
4. **Error Messages:** Provide clear feedback to users
5. **Naming:** Use clear, descriptive names for functions and variables
6. **Small Functions:** Keep functions focused on single responsibility
7. **Security:** Never expose passwords, always validate on server-side
8. **Session:** Remember authentication is per-session (no persistence needed)

---

## Technology Stack

- **Backend:** Node.js + Express
- **Templating:** Handlebars (HBS)
- **Authentication:** HTTP Basic Authentication
- **Styling:** CSS+Bootstrap
- **Data Storage:** In-memory JavaScript objects
