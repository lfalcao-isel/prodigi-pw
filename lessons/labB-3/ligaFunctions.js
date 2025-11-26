import { readFile, writeFile } from "fs/promises"

/**
 * 1 - Reads the file liga.json.
 * 2 - Parses the file contents from JSON into a JavaScript object or array.
 * 3 - Filters the teams and returns only those whose number of goals scored (goals)
 * is greater than 10.
 * @returns {Array} an array with teams with goals scored (goals) greater than 10.
 */
async function readAndFilter()  {
    const promise = readFile("liga.json")
    // console.log(promise)
    const bytes = await promise;
    // console.log(bytes)
    const arr = JSON.parse(bytes)
    return arr.filter(item => item.goals > 10 )
}

/**
 * 1. Receives the filtered array.
 * 2. Converts this array into formatted JSON using JSON.stringify(filteredTeams).
 * 3. Writes the result into a new file named liga10goals.json using fs.promises.writeFile.
 * @param {*} filteredTeams 
 */
async function saveResult(filteredTeams) {
    
}

async function main() {
    const teamsWithMore10goals = await readAndFilter()
    console.log(teamsWithMore10goals)
}

main()