import React from "react";
import { useState, useEffect, setState } from 'react';
import Product from "./Product";
import classes from "./Products.module.css";

function Products(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedTips, setLoadedTips] = useState([]);

  if(props.new_product){
    loadedTips.push(props.new_product)
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('https://superchat-a5b12-default-rtdb.firebaseio.com/tips.json').then(response => {
      return response.json();
    }).then(data => {
      const tips = [];

      for (const key in data){
        const tip = {
          id: key,
          ...data[key],
        };
        tips.push(tip);
      };

      setIsLoading(false);
      setLoadedTips(tips);

    });
  }, [])
  
  return (
    <div className={ classes.products } id="news">
      <h1>New Tips</h1>
      <h5>New fresh tips for you:</h5>
      <div className={ classes.product_list }>
        {loadedTips.filter(tip => tip.title.includes(props.filter_title)).sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((tip) => {
          return <Product
            key={ tip.id }
            id={ tip.id }
            title={ tip.title }
            description={ tip.description }
            img_src={ tip.img_src }/>
        })}
      </div>
    </div>
  );
}

export default Products;