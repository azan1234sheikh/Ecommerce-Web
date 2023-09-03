import "../../pages/Cart/cart.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RemoveCircle, DeleteOutline } from "@mui/icons-material";
import { Archive } from "react-bootstrap-icons";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartItems, addToCart, removeFromCart } = cartContext;

  return (
    <div>
      <Container>
        {cartItems.length ? (
          cartItems.map((item, index) => (
            <div key={index} className="cartRoot">
              <img src={item.image} />
              <h6>{item.productName}</h6>
              <h6>Rs .{item.price}</h6>
              <Archive
                 className="removeIcon"
                
                onClick={() => removeFromCart(item.productName)}/> <h6>Remove from cart </h6>
            </div>
          ))
        ) : (
          <div>
            <p>No Items in Cart</p>
          </div>
        )}
           {/* Place Order button */}
           {cartItems.length > 0 && (
          <Link to="/Addorder"> {/* Replace with your actual route */}
            <Button variant="primary">Place Order</Button>
          </Link>
        )}
      </Container>
    </div>
  );
};

export default Cart;
