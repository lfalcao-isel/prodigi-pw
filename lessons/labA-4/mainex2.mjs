
import { readAndFilter, saveResult } from "./ex2.1.mjs";
import { fetchMovies } from "./ex2.2.mjs";


const filteredResults = await readAndFilter();
console.log("Now in main",  filteredResults)
await saveResult(filteredResults)


await fetchMovies()


