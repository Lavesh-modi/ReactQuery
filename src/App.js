import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"
import ReactQuery from './utility/reactQuery';

function App() {
  //  const [products, setProducts] = useState([]);
  // const [error,setError] = useState(false)
  // const [loading,setLoading] = useState(false)
  //  useEffect(()=>{
  //   (async()=>{
  //    try {
  //     setLoading(true)
  //     setError(false)
  //     const response = await axios.get("https://fakestoreapi.com/products")
  //     console.log(response.data , "api/home")
  //     setProducts(response.data)
  //     setLoading(false)
  //    } catch (error) {
  //     setError(true)
  //     setLoading(false)
  //    }
  //   }

  //   )()
  //  },[])
  const urlPath = "https://fakestoreapi.com/products"
const {error,loading,products}= ReactQuery(urlPath);
  

   if (error) {
    return<h2  style={{ display:"flex", justifyContent:"center" , alignItems:"center", height:"100vh"}}> THERE IS THE ERROR ON THE PAGE PLEASE WAIT OR CONTACT YOUR ADMIN</h2>
    
   }
   if(loading){
    return <h2  style={{ display:"flex", justifyContent:"center" , alignItems:"center", height:"100vh"}}>LOADING.....</h2>
   }
  return (
  <div style={{ display:"flex", justifyContent:"center" , alignItems:"center", height:"100vh"}}>
    <h2>Hello the product count  will be the :{products.length}</h2>
  </div>
  );
}

export default App;
