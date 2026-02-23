import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

 const BASE_URL=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

 /* console.log(BASE_URL); */
export const MovieKontext=createContext()
const MovieContext = ({children}) => {
  const [movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)

  
   useEffect(()=>{
    getirMovies(BASE_URL)
  },[])



const getirMovies = (URL) => {
  setLoading(true);

  axios
    .get(URL)
    .then((response) => {
      const { page, results } = response.data;
      setMovies(results);
      console.log(page);
      console.log(response);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
};
 
 
  return (
    <MovieKontext.Provider value={{movies,loading,getirMovies}}>
    {children}

    </MovieKontext.Provider>
  )
}

export default MovieContext