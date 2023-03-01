function CategoryItem(props) {
    const {idCategory: id} = props;
    return <div className="card">
        {id}
    </div>
}

export {CategoryItem};