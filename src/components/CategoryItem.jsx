import { Link } from "react-router-dom";

function CategoryItem(props) {
    const {
        idCategory: id,
        strCategory: name,
        strCategoryThumb: image,
        strCategoryDescroption: description,
    } = props;
    return <div className="card" id={id}>
    <div className="card-image">
      <img src={image} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
        <Link to={`/category/${id}`} className="btn deep-purple darken-3">Watch category</Link>
    </div>
  </div>
}

export {CategoryItem};