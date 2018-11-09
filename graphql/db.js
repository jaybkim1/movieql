// node-fetch to axios for HTTP client 
// https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6
import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
};

// Error: Error: Expected Iterable, but did not find one for field Query.movie. #13
export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies; 
};


// movie triggers an Error : Let's debug at home
// query {
//     # movie(id: 7893) {
//         #   id
//         #   title
//         #   rating
//         # medium_cover_image
//         #
//     }
//     suggestions(id: 7893) {
//         id
//         title
//         medium_cover_image
//         rating
//     }
// }