import React,{useEffect,useState} from "react";
import "./App.css";
import Recipe from './recipes';


const App= () => {


  // Declared the applicationID and applicationKey
  // For calling the recipe from madamam website

  const APP_ID= "1a595619";

  const APP_KEY = "cd699068d5da74a8621fd45e26bbb2af";

  

 const [recipes, setRecipes] = useState([]);

 const[search, setSearch] = useState("");
 
 const[query, setQuery] = useState('chicken');

useEffect( () =>{

  getRecipes();
    
},[query]);

  const getRecipes=async () =>{
    const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  const updateSearch=(e)=>{
    setSearch(e.target.value);
    
  };

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <form onSubmit={getSearch} className ="search-form">
        <input className="search-bar" type="text"
         value={search} 
         onChange={updateSearch}/>
        <button  className="search-btn" type="submit">search</button>
      </form>
      <div className="recipe">
      {recipes.map(recipe=>(
        <Recipe
          key={recipe.recipe.label}
         title = {recipe.recipe.label} 
         calories={recipe.recipe.calories}  
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        /> 
      
      
      ))}
    </div>
    </div>
  );
};

export default App;
