import React from "react";
import { Card } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  console.log(product,process.env.PUBLIC_URL,'/',product.image )
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} variant="top" />
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
            <div className="my-3">
                {/* {product.rating} from {product.numReviews} reviews */}
                <Rating value={product.rating} text={product.numReviews}/>
            </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Product;
