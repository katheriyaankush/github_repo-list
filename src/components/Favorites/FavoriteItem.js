import React from 'react';

import './FavoriteItem.css';

const FavoriteItem = props => {
  return (


    <div key = {props.id}  className = {"mianFav"}>
    <h2 style={{marginLeft:"20px"}}>{props.name}  </h2>
  <div className = {"row"} > <div className = {"colFav"} >  <p> {props.language } </p> </div>
    <div className = {"colFav"} ><p> {props.date}</p> </div>


    </div></div>
   
  );
};

export default FavoriteItem;
