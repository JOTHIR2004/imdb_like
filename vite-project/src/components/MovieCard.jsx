import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  removeFromWatchList,
  watchlist,
}) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      return watchlist.some((movie) => movie.id === movieObj.id);
    }
  }

  return (
    <div
      className="flex flex-col justify-between items-end m-5 h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-200 hover:cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => removeFromWatchList(movieObj)} className="hover:scale-110 m-2 flex justify-center bg-gray-600 h-6 w-6 rounded-lg ">&#10060;</div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="hover:scale-110 m-2 flex justify-center bg-gray-600 h-6 w-6 rounded-lg "
        >
          &#128151;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 mt-auto font-bold text-center bg-gray-900/70 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
