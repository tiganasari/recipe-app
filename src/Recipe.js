import React from 'react';

const Recipe = ({title , url, image, ingredients}) => {
    return(
        <div className="recipe">
            <img src={image}></img>
            <h1 class="recipe-title">{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>  
                ))}
            </ul>
            <a href={url} target="_blank">make this</a>
           
           
        </div>
    )
}

export default Recipe;