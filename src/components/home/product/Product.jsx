import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container">
      
      {data.map((el, i) => {
        return (
          <div>
            <img src={el.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
