import axios from 'axios';

const api_key = {key: process.env.REACT_APP_API_KEY}

export async function FetchData(req, page){
    if(req === ''){
        req = 'popular'
    }
    if(page=== null){
        page = 2;
    }
    try{
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${req}?api_key=${api_key.key}&language=en-US&page=${page}`)
        const response = {
            page: data.page,
            results: data.results,
            total_pages: data.total_pages,
            total_results: data.total_results
        }
        return response;

    }catch(err){
        throw err;
    }
}

export async function FetchSearchData(searchKey){ 
    try{
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key.key}&query=${searchKey}&page=1`)
        const response = {
            page: data.page,
            results: data.results,
            total_pages: data.total_pages,
            total_results: data.total_results
        }
        return response;

    }catch(err){
        throw err;
    }
}
export async function FetchDetailData(id){
    try{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key.key}&language=en-US`)
        console.log(data)
    }catch(err){
        throw err;
    }
}
export async function FetchGenreData(){
    try{
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key.key}&language=en-US`)
        return data.genres;
    }catch(err){
        throw err;
    }
}