// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { NavBar } from "./components/NavBar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes ,Route } from "react-router-dom";

function App() {

  let [watchlist,setWatchList]=useState([])
  
  let handleAddWatchList =(movieObj)=>{
      let newWatchList=[...watchlist , movieObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList)
  }


  let removeFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList)); // Update localStorage
};
   

  useEffect(()=>{
    let moviesfromlocalsto = localStorage.getItem('moviesApp')
    if(!moviesfromlocalsto){
      return
    }
    setWatchList(JSON.parse(moviesfromlocalsto))
  },[])


  return (
   <div className="bg-blue-40"> 
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<>
          <Banner/> 

          <Movies watchlist={watchlist} handleAddWatchList={handleAddWatchList} removeFromWatchList={removeFromWatchList}/>
          </>}/>

          <Route path='/WatchList' element={<WatchList watchlist={watchlist} removeFromWatchList={removeFromWatchList} />}/>
        
        </Routes>
      </BrowserRouter>
    </>
  </div>
  );
}

export default App;
