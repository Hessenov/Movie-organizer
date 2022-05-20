export const fetchMovies = async (payload) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${payload}&apikey=f77571a1`);
    const data = await response.json();

    return data;

}