import { Link } from "react-router-dom";


function CategoryItem(props) {
    const {
        idCategory: id,
        strCategory: name,
        strCategoryThumb: image,
        strCategoryDescription: description,
    } = props; 

    return <div className="card" id={id}>
    <div className="card-image">
      <img src={image} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description.slice(0, 400)+'...'}</p>
    </div>
    <div className="card-action">
        <Link to={`/category/${name}`} className="btn deep-orange accent-3">Watch category</Link>
    </div>
  </div>
}

export {CategoryItem};