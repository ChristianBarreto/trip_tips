import Header from '../Components/Header/Header';
import MainPicture from '../Components/Main/MainPicture';
import Products from '../Components/Products/Products';
import Footer from '../Components/Footer/Footer';
import ProductForm from '../Components/ProductForm/ProductForm';
import { useState } from 'react';


function MainPage(props) {

  const [filter, setFilter] = useState('');
  const [product, setProduct] = useState('');

  function stringsConstruction(a, b) {
      const counts_b = {};
      
      for (var i in b){
          if (counts_b.hasOwnProperty(b[i])){
            counts_b[b[i]] +=1;
          }else {
            counts_b[b[i]] = 1;
          }
      }
      
      var values = Object.keys(counts_b).map(key => {
        return counts_b[key];
      });
      console.log(values);

      console.log(Math.min.apply(Math, values));

      if (a.)
      if (a.length == 1){
        return Math.max.apply(Math, values)
      }else {
        return Math.min.apply(Math, values)
      }

  }

  stringsConstruction("a", "b")


  return (
    <div className="app">
        <Header/>
        <MainPicture childToParent={(filter_title) => setFilter(filter_title)}/>
        <Products tips={props.tips} filter_title={filter} new_product={product}/>
        <ProductForm childToParent={(product) => setProduct(product)}/>
        <Footer/>
    </div>
  );
}

export default MainPage;