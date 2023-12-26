import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard(props) {

  const deleteHandler = async (id) => {
    const deleteRequest = await axios.delete(`https://dummyjson.com/products/${id}`);
    console.log(deleteRequest.data);
  }


  return (
    <div className=" text-bg-secondary rounded">
      <img src={props.product.thumbnail} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <div className="btn-group gap-2">
          <Link
          to={`/product-detail/${props.product.id}`} className="btn btn-primary">
          Details
        </Link>
        <button onClick={()=> deleteHandler(props.product.id)} className="btn btn-danger ms-2">Delete</button></div>
        
      </div>
    </div>
  );
}
