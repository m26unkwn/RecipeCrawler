import React from "react";
import style from "./recipe.module.css"
 
const recipe =({title,calories,image, ingredients, url}) => {
    return(
        <div class={style.list}>
            
            <h3>{title}</h3>
            
            <img className={style.image} src={image} alt=""/>
           
            <ol class={style.list1}>
            <h4>ingredients</h4>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p id ={style.calories}>calories:{Math.round(calories)} Kcal</p>
            <a href={url} rel="noopener noreferrer" target="_blank">Read More</a>
        </div>
    );

};

export default recipe;

