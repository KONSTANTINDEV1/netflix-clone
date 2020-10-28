const API_KEY = "25dd4d8c70110e95dcc27f0ca376f353";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=enUS`,

    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,

    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,

    fetchFantasyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

   
}

export default requests;