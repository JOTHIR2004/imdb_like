import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList , removeFromWatchList , watchlist}) {

  const [movies,setMovies]=useState([])
  const [pageNo,setPageNo]=useState(1)


  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }
  
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }

  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=077230632d13cf0e7c6d355f8157004e&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])



  return (
    <div>
        <div className='text-2xl text-center font-bold p-4 m-4'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around'>
           {movies.map((movieObj)=>{
            return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatchList={handleAddWatchList} removeFromWatchList={removeFromWatchList} watchlist={watchlist}/>
           })}
        </div>

        <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo}/>
    
    </div>
  )
}

export default Movies

// 