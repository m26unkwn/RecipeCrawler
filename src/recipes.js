import React from "react";
import style from "./recipe.module.css"
 
const recipe =({title,calories,image, ingredients}) => {
    return(
        <div class={style.recipe}>
            
            <h1>{title}</h1>
            
            <img className={style.image} src={image} alt=""/>
            <h3>ingredients</h3>
            <ol class={style.list}>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p id ={style.calories}>Cal:{calories}</p>
        </div>
    );

};

export default recipe;

