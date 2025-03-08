import React, { useState } from "react";
import genreids from '../utility/genre';
function WatchList({watchlist , removeFromWatchList}) {

  const [search , setSearch]=useState('')
  
  let handleSearch = (e)=>{
      setSearch(e.target.value)
  }



  return (
    <>
      <div className="flex justify-center flex-wrap m-4 ">
        <div className="bg-blue-500 rounded-xl flex justify-center h-[2rem] w-[9rem] text-white font-bold items-center mx-4">
          All Genre
        </div>
        <div className="bg-gray-400 rounded-xl flex justify-center h-[2rem] w-[9rem] text-white font-bold items-center mx-4">
          Action
        </div>
        <div className="bg-gray-400 rounded-xl flex justify-center h-[2rem] w-[9rem] text-white font-bold items-center mx-4">
          Action
        </div>
      </div>

      <div className="flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Movies"
          className=" px-4 h-[2rem] w-[18rem] border rounded-xl bg-gray-100 "
        />
      </div>
      <div className="overflow-hidden rounded-lg border m-8 border-gray-400">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return (
                <tr className="border-b-2">
                  <td className="flex items-center  py-4 px-6">
                    <img
                      className="h-[6rem] w-[5rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt=""
                    />
                    <div className="mx-10">{movieObj.original_title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>

                  <td >
                    <button onClick={()=>removeFromWatchList(movieObj)} className="text-gray-200 p-2 rounded-4xl border-2 border-gray-600 hover:scale-110 bg-red-500">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
