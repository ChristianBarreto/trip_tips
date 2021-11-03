import React from 'react';
import classes from './MainPicture.module.css'
import { Form } from 'react-bootstrap';
import { useRef, useEffect } from "react";


const MainPicture = (props) => {
  
  const searchInputRef = useRef();

  function onClickFilter(event){
    props.childToParent(searchInputRef.current.value)
  }

  
  return (
    <div className={ classes.bg }>
      <Form.Control 
        size="lg" 
        type="text" 
        placeholder="Search for Tips" 
        className={ classes.search } 
        ref={ searchInputRef }
        onChange={(e) => onClickFilter(e)}
      />
    </div>
  );
};

export default MainPicture;