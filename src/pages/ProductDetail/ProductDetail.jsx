import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState([]);

  const getAProduct = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response);
    setProduct(response.data);
  };

  useEffect(() => {
    getAProduct();
  },[]);

  return (
    <div className="container mt-5">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6>{product.price} credits</h6>
              <p className="card-text">
                {product.description}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {product.category}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
