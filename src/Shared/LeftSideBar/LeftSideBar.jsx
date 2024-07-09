import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">All Categories</h2>
      {
        categories.map(category => <Link 
          className="block text-xl p-3 active:bg-orange-300"
          key={category.id}
          to={`/category}/${category.id}`}>
          {category.name}
          </Link>)
      }
    </div>
  );
};

export default LeftSideBar;