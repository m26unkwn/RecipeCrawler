import React,{useEffect,useState} from "react";
import "./App.css";



const App= () => {

  // Declared the applicationID and applicationKey
  // For calling the recipe from madamam website

  const APP_ID= "1a595619";

  const APP_KEY = "cd699068d5da74a8621fd45e26bbb2af";

  const setExample= 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';

  const[counter, setCounter]= useState(0);

  useEffect(()=>{
    console.log("Effect has been run")
  });


  return(
    <div className="App">
      <form className ="search-form">
        <input className="search-bar" type="text"/>
        <button onClick={()=>setCounter(counter + 1)} className="search-btn" type="submit">{counter}</button>
      </form>
    </div>
  );
}

export default App;
