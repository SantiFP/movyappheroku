export const getMovies  = () => {
    return fetch('http://localhost:5000/movies')
    .then((response) => response.json());
};

   

