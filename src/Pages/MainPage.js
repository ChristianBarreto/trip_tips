import Header from '../Components/Header/Header';
import MainPicture from '../Components/Main/MainPicture';
import Products from '../Components/Products/Products';
import Footer from '../Components/Footer/Footer';
import ProductForm from '../Components/ProductForm/ProductForm';
import { useState } from 'react';


function MainPage(props) {

  const [filter, setFilter] = useState('');
  const [product, setProduct] = useState('');

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