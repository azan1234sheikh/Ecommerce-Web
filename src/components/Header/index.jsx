import React, { useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import CartContext from '../../Context/CartContext';
import { Cart } from 'react-bootstrap-icons';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import Typography from '@mui/material/Typography'; // Import Typography from Material-UI

function Header() {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link to="/">
          <img
            className= "logo" 
            src="https://pyrostation.com/wp-content/uploads/2017/11/e-commerce-marke_logo-02.png"
            alt="Ecommerce  Logo"
            
          />
          </Link>
          <div style={{ flexGrow: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/addproduct" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body1">Addproduct</Typography>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '16px' }}>
              <Typography variant="body1">login</Typography>
            </Link>
          </div>
          <Button variant="primary" onClick={() => navigate("/cart")}>
            <Badge badgeContent={cartItems.length} color="secondary"><Cart />
            </Badge>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
