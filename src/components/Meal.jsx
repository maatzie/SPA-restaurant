import { Link } from "react-router-dom";

function Meal(props) {
    const {
        idMeal: id,
        strMeal: name,
        strMealThumb: image,
    } = props;

    return <div className="card" id={id}>
    <div className="card-image">
      <img src={image} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{}</p>
    </div>
    <div className="card-action">
        <Link to={`/meal/${id}`} className="btn deep-orange accent-3">Open recipe</Link>
    </div>
  </div>
}

export {Meal};