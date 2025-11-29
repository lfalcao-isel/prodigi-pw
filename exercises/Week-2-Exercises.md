# 1. Modularity - ECMAScript Modules

Create a small program that shows how to reuse functions in modules.

### Create a module (`functions.js`)

   * Include the two functions from Exercises 1.6 and 1.7 from the previous week.
   * Export them so they can be reused.

### Create a main module (`main.js`)

   * Import the functions module.
   * Define a `main` function that calls the imported functions and logs the results.
   * Call `main()` at the end to run the program.


# 2. Asynchronous Programming – Promises

## 2.1 File System with Promises (Node.js)

Using the Node.js **Promises API** for file access, complete the tasks
described below.\
You must implement **two separate functions**, each with a clear and
well-defined responsibility.

### Function 1 - `readAndFilter()`

Implement a function named **`readAndFilter()`** that performs the
following:

1.  Reads the file [liga.json](liga.json) using `fs.promises.readFile`.
2.  Parses the file contents from JSON into a JavaScript object or
    array.
3.  Filters the teams and returns only those whose number of goals
    scored (**`goals`**) is **greater than 10**.
4.  Returns the filtered array.

### Function 2  - `saveResult(filteredTeams)`

Implement a function named **`saveResult()`** that:

1.  Receives the filtered array returned by `readAndFilter()`.
2.  Converts this array into formatted JSON using `JSON.stringify(filteredTeams)`.
3.  Writes the result into a new file named **`liga10goals.json`** using
    `fs.promises.writeFile`.

### Final Objective

Create a small **`main()`** function (or similar driver code) that:

1.  Calls `readAndFilter()` to obtain the filtered teams.
2.  Passes the result to `saveResult()`.

When executed, your program should produce the file:

    liga10goals.json

containing only the teams that scored more than 10 goals.

### Example Output (inside liga10goals.json)

```json
[
  {
    "name": "Benfica",
    "goals": 12,
    "points": 30
  },
  {
    "name": "Porto",
    "goals": 15,
    "points": 28
  },
  {
    "name": "Sporting",
    "goals": 11,
    "points": 27
  }
]
```

## Exercise 2.2 - Fetch API (Node.js)

Using the **Fetch API**, write a program that retrieves information
about animated movies from the web API and saves the titles of all
movies into a local JSON file.

You must implement **two separate functions**, each with a clear and
well-defined responsibility.

### Function 1 - `fetchMovies()`

Implement a function named **`fetchMovies()`** that performs the
following:

1.  Makes an HTTP GET request to:

```{=html}
https://api.sampleapis.com/movies/animation
```
    
2.  Uses the **Fetch API** to retrieve the data.
3.  Parses the response as JSON using `response.json()`.
4.  Extracts only the **titles** of the movies from the returned
    objects.
5.  Returns an array of movie titles.

### Function 2 - `saveTitles(titles)`

Implement a function named **`saveTitles()`** that:

1.  Receives the array of movie titles returned by `fetchMovies()`.
2.  Converts the array into formatted JSON using:

```{=html}
JSON.stringify(titles, null, 2)
```
   
3.  Saves this JSON into a file named:

```{=html}
animationTitles.json
```

using `fs.promises.writeFile`.

### Final Objective

Write a small `main()` function (or similar) that:

1.  Calls `fetchMovies()` to get the titles.
2.  Passes the result to `saveTitles()`.

When executed, your program must create the file:

    animationTitles.json

containing all movie titles retrieved from the API.

### Example Output (inside animationTitles.json)

``` json
[
  "Spirited Away",
  "Toy Story",
  "How to Train Your Dragon",
  "Zootopia"
]
```

The actual titles will depend on the API response.


# 3. Web API with Express

## Shopping Lists API

Build a small **Express (Node.js)** Web API that serves shopping lists stored in a pre-populated in-memory array.

Each shopping list contains:

* **id**: a unique identifier (number)
* **name**: the name of the list (string)
* **items**: an array of products, where each product has:

  * **product**: the name of the product (string)
  * **quantity**: the amount of the product (number)

Example structure of a shopping list:

```json
{
  "id": 1,
  "name": "Saturday groceries",
  "items": [
    { "product": "Milk", "quantity": 2 },
    { "product": "Bread", "quantity": 6 }
  ]
}
```

## API Endpoints

* `GET /lists`

  * Returns all shopping lists as JSON.
  * Supports an optional query parameter `limit` to restrict the number of lists returned.

* `GET /lists/:id`

  * Returns the shopping list with the specified `id` as JSON.

## Constraints

* JSON responses only
* Server runs on port **3000**
* Data is in memory only and pre-filled at server startup

## Steps

1. Initialize the Node.js project:

```bash
npm init -y
```

2. Install Express:

```bash
npm install express
```

3. There is a **partial implementation file** (`shooping-web-api.mjs`) provided at the following link:

[Partial implementation - shooping-web-api.mjs](https://github.com/lfalcao-isel/prodigi-pw/blob/main/exercises/shooping-web-pi.mjs)

There is a simple express demo [here](https://github.com/lfalcao-isel/prodigi-pw/tree/main/exercises/demo-express)

Students **only need to complete the parts marked with numbered comments** in the file.

4. Test the endpoints using the browser

