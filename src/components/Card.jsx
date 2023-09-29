import React from 'react'

const Card =(props) => {
  return (
    <div className='main'> 

    {props.details.map((value,index)=>(
    <div className='card' key={index}>
      <div className='card-image'>
        <img src={value.image}/>
          
      </div>
      <div>
        <p className='card-title'>{value.name}</p>
        <p className='description'>
           {value.description}
        </p>
      </div>
        
    </div>
    ))}
    </div>
  );
};

export default Card