import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/orders/all")
      .then(response => response.json())
      .then(data => {
        setOrders(data.orders);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(order => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Name: {order.name}</p>
          <p>Products: {order.products.join(", ")}</p>
          <p>Address: {order.address}</p>
          <p>Email: {order.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orders;
