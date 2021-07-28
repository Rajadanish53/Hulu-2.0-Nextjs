const API_KEY = process.env.API_KEY;

export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomance:{
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchScifi:{
        title:"Scifi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=578`
    },
    fetchWestern:{
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV:{
        title:"TV more",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10778`
    }
}