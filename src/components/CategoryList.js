import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const CategoryList = () => {
  const categories = [
    {
      name: 'Grocery Staples',
      val: 'GROCERY_STAPLES',
      image: 'grocery.jpg'
    },
    {
      name: 'Daily Essentials',
      val: 'DAILY_ESSENTIALS',
      image: 'grocery.jpg'
    },
    {
      name: 'Electronics',
      val: 'ELECTRONICS',
      image: 'grocery.jpg'
    },
    {
      name: 'Personal Care',
      val: 'PERSONAL_CARE',
      image: 'grocery.jpg'
    },
    {
      name: 'Bed and Bath',
      val: 'BED_BATH',
      image: 'grocery.jpg'
    },
    {
      name: 'Home Appliances',
      val: 'HOME_APPLIANCES',
      image: 'grocery.jpg'
    },
    {
      name: 'Crockery',
      val: 'CROCKERY',
      image: 'grocery.jpg'
    },
    {
      name: 'Footwear',
      val: 'FOOTWEAR',
      image: 'grocery.jpg'
    },
    {
      name: 'Luggage',
      val: 'LUGGAGE',
      image: 'grocery.jpg'
    },
    {
      name: 'Toys and Games',
      val: 'TOYS_GAMES',
      image: 'grocery.jpg'
    },
    {
      name: 'Kid Apparel',
      val: 'KID_APPAREL',
      image: 'grocery.jpg'
    },
    {
      name: 'Women Apparel',
      val: 'WOMEN_APPAREL',
      image: 'grocery.jpg'
    },
    {
      name: 'Men Apparel',
      val: 'MEN_APPAREL',
      image: 'grocery.jpg'
    },
    {
      name: 'Plastics and Containers',
      val: 'PLASTIC_CONTAINERS',
      image: 'grocery.jpg'
    },
    {
      name: 'Daily Frozen',
      val: 'DAIRY_FROZEN',
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
            onClick={ () => renderCategory(category.val)} value={category.val}
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
