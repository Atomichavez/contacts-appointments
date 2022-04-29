import React from "react";

export const Tile = ({object, index}) => {
  const keys = Object.keys(object)
  return (
    <div className="tile-container" key={index}>
      <p className='tile-title'>{object[keys[0]]}</p>
      {keys.map((key,i) => {
        if(i>0) {
          return( <p className='tile' key={i}>{object[key]}</p> )
        }
      })}
      <hr/>
    </div>
  );
};