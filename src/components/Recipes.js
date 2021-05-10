import React from 'react';
import style from '../recipe.module.css';

const Recipes =({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
                <img className={style.image} src={image}  alt=""/>
            <ol>
                {
                    ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
            </ol>
            <h4>Calories:{calories}</h4>
            
        </div>
    )
}

export default Recipes;