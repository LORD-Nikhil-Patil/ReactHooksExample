import React, { useEffect, useState, useMemo, memo } from 'react';

 const Card = ({ id, title, toggleSort}) => {
   console.log("Card")
    return (
      <div className='card'>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <button onClick={toggleSort}>Sort</button>
      </div>
    );
  };

export default memo(Card);