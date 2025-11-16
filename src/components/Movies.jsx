import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

function Movies() {
  // [movieList, setMovies] = useState([])
  useEffect(() => {
    axios.get(`http://img.omdbapi.com/?apikey=89ed9c3f`).then(function(res){
      console.log(res);
      
    })
    // axios.get(`https://www.omdbapi.com/?apikey=89ed9c3f`).then(function(res){
    //   console.log(res, 'Hello');
    //   // setMovies(res?.data?.)
    // })
  }, [])
  return (
    < >
      <div className='p-2'>
        <div className='text-2xl font-bold text-center p-2'>Trending Movies</div>
        <div className='flex flex-row justify-arround item-center gap-8'>
          {/* {movieList.map((movieObj=>{
            return <MovieCard/>
          }))} */}
        </div>
      </div>
    </>
  )
}

export default Movies