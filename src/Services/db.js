import axios from "axios"
export const getMovieData= async (name)=> {
    
    const respons = await axios.get(`http://www.omdbapi.com/?apikey=99d929d9&s=${name}`)
//    console.log(respons.data.Search); 
   return respons.data.Search;
   
} 
export default getMovieData;