import React from 'react';

const Recipe = ({title , url, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1 class="recipe-title">{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>  
                ))}
            </ul>
            <a href={url} target="_blank">Try me!</a>
           
           <img src={image}></img>
        </div>
    )
}

export default Recipe;