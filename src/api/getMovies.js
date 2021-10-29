export const getMovies  = () => {
    return fetch('https://testecito.herokuapp.com/movies')
    .then((response) => response.json());
};

   

