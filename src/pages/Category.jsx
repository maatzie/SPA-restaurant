import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        })
    }, [name]);
    return <div>
        <Link to={`/`} className="btn deep-orange accent-3">Go back</Link>
        {meals.length ? (
            <MealList meals={meals}/>
        ) : <Preloader/>}
    </div>
}

export {Category};