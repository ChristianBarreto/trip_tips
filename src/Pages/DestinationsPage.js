import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import { Container } from "react-bootstrap";
import ProductsXL from "../Components/ProductsXL/ProductsXL";
import { useState, useEffect } from 'react';


function DestinationsPage(){
    const destinations = {
        list_name: "Destinations",
        list_description: "Recomendations",
        tips: [],
    };
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTips, setLoadedTips] = useState(destinations);
  
    useEffect(() => {
      setIsLoading(true);
      fetch('https://superchat-a5b12-default-rtdb.firebaseio.com/tips.json?').then(response => {
        return response.json();
      }).then(data => {
        const tips = [];
  
        for (const key in data){
          const tip = {
            id: key,
            ...data[key],
          };
          destinations.tips.push(tip);
        };
  
        setIsLoading(false);
        setLoadedTips(destinations);
  
      });
    }, [])


    return (
        <div>
            <Header/>
            <ProductsXL destinations={ loadedTips } type="Destination"/>
            <Footer/>
        </div>
    );
};

export default DestinationsPage;