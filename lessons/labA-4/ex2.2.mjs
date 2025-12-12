export async function fetchMovies() {
    const rsp = await fetch('https://api.sampleapis.com/movies/animation')
    const obj = await rsp.json()
    console.log(obj)
}