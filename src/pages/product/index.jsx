import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState({});
  const [user, setUser] = useState(null);

  const fetchSingleProduct = async () => {
    // Fetch and set singleProduct, setLoading appropriately
  };

  const handleDelete = async () => {
    // Delete the product and navigate
  };

  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      setUser(isUser);
    }
  }, []);

  useEffect(() => {
    console.log("ID:", id);
    fetchSingleProduct();
  }, [id]);

  return (
    <div>
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {user && (
              <div>
                <IconButton onClick={() => navigate(`/products/edit/${id}`)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </div>
            )}

            <h3>{singleProduct.productName}</h3>
            <img src={singleProduct.image} alt={singleProduct.productName} />
            <h3>Rs. {singleProduct.price}</h3>
            <p>{singleProduct.description}</p>
            <Button onClick={() => addToCart(singleProduct)} variant="primary">
              Add to Cart
            </Button>
            <Button
              onClick={() => removeFromCart(singleProduct.productName)}
              variant="primary"
            >
              Remove
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default Product;
