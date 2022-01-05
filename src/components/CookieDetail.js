import React from "react";

const CookieDetail = (props) => {
  const cookie = props.cookie;
  return (
    <div>
      <h1>{products.name}</h1>
      <img src={products.image} alt={products.name} />
      <p>{products.description}</p>
      <p>{products.price} KD</p>
    </div>
  );
};

export default CookieDetail;