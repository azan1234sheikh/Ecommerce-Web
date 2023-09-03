import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { useParams } from "react-router-dom"; // Import useParams to get the dynamic parameter

const ProductCard = ({ product }) => {
  console.log("product", product);
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  const { _id } = useParams(); // Corrected to call useParams() to get the parameter
  const imageName = product.image ? product.image.split("public/")[1] : "";

  const imageURL = `/images/${imageName}`; // Corrected the path based on the image name

  return (
    <Card className="cardRoot">
      <Card.Img variant="top" src={imageURL} /> {/* Corrected src to use imageURL */}
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title>{product.productName}</Card.Title>
        </Link>
        <Card.Text>Rs. {product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;