import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [orderData, setOrderData] = useState({
    products: "",
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYwN2Y1OWNlOWMyZmM2ZWJhOWVjODAiLCJpYXQiOjE2OTM0ODM5OTYsImV4cCI6MTY5NjA3NTk5Nn0.on0aPqJMDQHsgPL_Iq2jfqRiDufakVCe6zlFiceoBNY";
        const response = await fetch("http://localhost:9000/orders/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
        setOpen(true); // Open the success Snackbar
        // Optionally, you can reset the form fields
        setOrderData({
          products: "",
          name: "",
          phoneNumber: "",
          address: "",
          email: "",
        });
      } else {
        console.error("Error placing order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <Container className="rootContainer">
      <h4>Place Your Order</h4>
      <TextField
        fullWidth
        value={orderData.name}
        onChange={handleChange}
        name="name"
        label="Name"
        variant="outlined"
      />
      <TextField
        fullWidth
        value={orderData.phoneNumber}
        onChange={handleChange}
        type="number"
        name="phoneNumber"
        label="Phone Number"
        variant="outlined"
      />
      <TextField
        fullWidth
        value={orderData.address}
        onChange={handleChange}
        name="address"
        label="Address"
        variant="outlined"
      />
      <TextField
        fullWidth
        value={orderData.email}
        onChange={handleChange}
        type="email"
        name="email"
        label="Email"
        variant="outlined"
      />
      <Button onClick={handleSubmit} fullWidth variant="contained">
        Place Order
      </Button>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message="Order placed"
      />
    </Container>
  );
};

export default AddOrder;
