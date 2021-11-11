export const getMovies  = () => {
    return fetch('https://movybackend.herokuapp.com/movies')
    .then((response) => response.json());
};

   

