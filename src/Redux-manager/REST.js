export const fetchMovies = async (payload) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${payload}&apikey=f77571a1`);
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data;

}