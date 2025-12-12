
import { readFile, writeFile } from "fs/promises";

export async function readAndFilter() {
    // const fileContents = await readFile('../liga.json',  { encoding: 'utf8' })
    // var teams = JSON.parse(fileContents)

    // const filteredTeams = teams.filter( t => t.goals > 10)
    // return filteredTeams

    const fileContents = await readFile('../liga.json',  { encoding: 'utf8' })
    var teams = JSON.parse(fileContents)
    return teams.filter( team =>  team.goals > 10 )
}


export async function saveResult(filteredTeams) {
    const strJsonWithFilteredTeams = JSON.stringify(filteredTeams,undefined , " ")
    await writeFile('./liga10goals.json', strJsonWithFilteredTeams)
}