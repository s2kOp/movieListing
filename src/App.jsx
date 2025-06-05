import React from "react"
import {useState,useEffect} from "react"
import  "./App.css"



function App(){

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const [name,setName] = useState("");
  const [moviesList,setMoviesList] = useState([]);
  const handleSearch = async () => {
    if(name==""){
      console.error("No name provided...");
    }
    else{
      try{
        const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=${apiKey}`);
        if(response.ok){
          const result = await response.json();
          setMoviesList(result.Search);
        }
      }catch(err){
        console.error(err);
      }finally{
        setName("");
      }
    }
  }

  

  return(
    <div>
      <div className="headPart">
          <h1>MovieSearch</h1>
          <p>Discover, rate, and explore the world of cinema – all in one place.</p>
      </div>        
      <div className="inputData">
          <input type = "text" placeholder="Enter movie name..." value = {name} onChange={(e)=>setName(e.target.value)}></input>
          <button onClick={handleSearch}>Search</button>
      </div>
      <div className="movieList">
        {moviesList.map((item)=>(
            <div className="movieCards" key={item.imdbID}>
              <img src = {item.Poster} alt = {"unable to load"}></img>
              <h4>{item.Title}</h4>
              <p>{item.Year}</p>
            </div>
        ))}
      </div>
    </div>
        )
}
export default App;
