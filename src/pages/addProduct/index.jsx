import React , {useState} from "react" ;
import "./addProduct.css";
import  {Container }from "react-bootstrap";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const AddProduct= () => {
  const [productName ,setproductName] = useState("");
  const [price ,setPrice] =useState("");
  const [description ,setDescription] =useState("");
  const [image ,setImage] =useState("");

  const handleChange =(ev) =>{
    const { value,name }= ev.target;
    if  (name== "productName"){
      setproductName(value);
      }
    if  (name== "price"){
      setPrice(value);
        }
    if  (name== "description"){
      setDescription(value);
        }
    if  (name== "image"){
      setImage(value);
      }
  };
    const handleSubmit = async ()=> {
      const productData = { productName , price: +price ,description ,image}
      const response = await fetch("http://localhost:9000/products/add",{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
           Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3NDVkM2Q5NzgzMzhhNzRlMzg1ZjQiLCJpYXQiOjE2OTI4Nzg0MzQsImV4cCI6MTY5NTQ3MDQzNH0.JAbOH1AnH5va6Et5-U4iCxuMqqanCtTW46SVin_WFdw',
        },
         body:JSON.stringify(productData),
        
      });
      console.log("Clicked");

    };

    return (  
    <div>
      <Container className="rootContainer">
        <h4>Add product Form</h4>
      
        <TextField name ="productName"
         value={productName}
         onChange={handleChange}
         label="product Name"
          variant="outlined" />
        <TextField name="description"
          value={description}
          onChange={handleChange}
          multiline
          maxRows={4}
         label="Description"
          variant="outlined" />
        
        <TextField name="image" 
         value={image}
         onChange={handleChange}
        label="Image URL" 
        variant="outlined" />
       <TextField name="price"
       value={price} 
        label="Price" 
        onChange={handleChange}
        variant="outlined" />
        <Button onClick={handleSubmit} fullWidth variant="contained">Add Product</Button>
       </Container>
    </div>
  
  );
};




export default AddProduct;

