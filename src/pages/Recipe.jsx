import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";

function Recipe(props) {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0]);
        })
    }, [id]);

    const navigate = useNavigate();
    
    return <div>
        <button onClick={() => {navigate(-1)}} className="btn deep-orange accent-3">Go back</button>
        {!recipe.idMeal ? <Preloader/> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
                <h1>{recipe.strMeal}</h1>
                <h4>{recipe.strCategory} 
                    {recipe.strArea ? ' - ' + recipe.strArea : null}
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map((key) => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>
                <p>{recipe.strInstructions}</p>
                {recipe.strYoutube ? 
                    <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}/>
                    : null}
            </div>
        )}
    </div>
}
export {Recipe};