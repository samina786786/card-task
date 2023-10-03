import React, { useState } from "react";

const Card = (props) => {
 
  const [fullView, setFullView] = useState({});
  const [view, setView] = useState(false);

  const handleReadMore = (value) => {
    setView(true);
    console.log(value);
    setFullView(value);
  };

  const handleClose = () => {
    setView(false);
  };
  
  return (
    <div>
      <div className="main">
        {props.details.map((value, index) => (
          <div className="card"  key={index}>
            <div className="card-image">
              <img src={value.image} />
            </div>
            <div>
              <p className="card-title">{value.name}</p>
              <p className="description">{value.description}</p>
              <a style={{color:"gray"}}
                href="#"
                vclassName="description"
                onClick={() => handleReadMore(value)}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      {view && (
      <div className="mains">
      
    <div className="cards">
      <div className="cards-images">
        <img src={`${fullView.image}`} />
      </div>
      <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="cards-titles">{fullView.name}</p>
                <p
                  style={{
                    marginRight: '12px',
                    color: 'red',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleClose()}
                >
                  Close
                </p>
              </div>
              <p className="descriptions">{fullView.description}</p>
      </div>
    </div>
  
  </div>
     )}
    </div>
  );
};

export default Card;
