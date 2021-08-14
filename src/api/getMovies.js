const API_KEY = 'd30a494d79f41e5edcdfa4b7f9ce0639';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopular  = () => {
    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json());
};

export const getUpcoming  = () => {
    return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json());
};

export const getTopRated = () => {
    return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json());
};
   
   

