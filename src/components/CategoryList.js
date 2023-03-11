import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const CategoryList = () => {
  const categories = [
    {
      name: 'Grocery Staples',
      image: 'grocery.jpg'
    },
    {
      name: 'Daily Essentials',
      image: 'grocery.jpg'
    },
    {
      name: 'Electronics',
      image: 'grocery.jpg'
    },
    {
      name: 'Personal Care',
      image: 'grocery.jpg'
    },
    {
      name: 'Bed and Bath',
      image: 'grocery.jpg'
    },
    {
      name: 'Home Appliances',
      image: 'grocery.jpg'
    },
    {
      name: 'Crockery',
      image: 'grocery.jpg'
    },
    {
      name: 'Footwear',
      image: 'grocery.jpg'
    },
    {
      name: 'Luggage',
      image: 'grocery.jpg'
    },
    {
      name: 'Toys and Games',
      image: 'grocery.jpg'
    },
    {
      name: 'Kid Apparel',
      image: 'grocery.jpg'
    },
    {
      name: 'Women Apparel',
      image: 'grocery.jpg'
    },
    {
      name: 'Men Apparel',
      image: 'grocery.jpg'
    },
    {
      name: 'Plastics and Containers',
      image: 'grocery.jpg'
    },
    {
      name: 'Daily Frozen',
      image: 'grocery.jpg'
    },
  ];

  const navigate = useNavigate();

  const renderCategory= (value) =>{
    //event.preventDefault();
    console.log(value);
    navigate('/retailer/category/'+value);
  } ;

  return (
    <div className="category-list">
      {categories.map((category, index) => {
        const shouldStartNewRow = index % 3 === 0;

        return (
          <div
            key={category.name}
            className={`category-card${shouldStartNewRow ? ' new-row' : ''}`}
            onClick={ () => renderCategory("GROCERY_STAPLES")} value="GROCERY_STAPLES"
          >
            <img src={`../../images/${category.image}`} alt={category.name} />
            <h2>{category.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
