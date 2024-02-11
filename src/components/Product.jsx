import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux';
import {add} from '../store/CartSlice';
import { getProducts } from '../store/productSlice';
import statusCode from '../../utils/statusCode';

const Product=()=>{
    const dispatch=useDispatch();
    const {data:products,status}=useSelector(state=>state.products);

//    const [products,setProducts]= useState(null);
//    const abortController=new AbortController();
//    const signal=abortController.signal;
   useEffect(()=>{
    // const fetchData=async()=>{
    //     try{
    //         const response= await fetch('https://fakestoreapi.com/products',{signal});
    //         if(response.ok){
    //             const data=await response.json();
    //             setProducts(data);
    //         }
    //     }catch(err){
    //         if(err.name==="AbortError")
    //             console.error("Sorry the API was aborted");
    //         console.error(err,"Something went wrong");
    //     }
    // };
    // fetchData();
    // return ()=>{
    //     setTimeout(()=>{
    //         abortController.abort()
    //     },5000);
    // };

    dispatch(getProducts());

   },[]);

   if(status===statusCode.LOADING)
   return <p>Loading....</p>

    if(status===statusCode.ERROR)
       return <Alert variant="danger">Sorry Something went wrong!... Try Again!!!</Alert>
    

  
   const addToCart=(product)=>{
    dispatch(add(product));
   }
   let card;
   if(products){
        card=products.map(product=>{
    return  <div className='col mb-3' key={product.id}>
        <Card className="h-100" style={{ width: '18rem',marginBottom:'3px' }}>
       <Card.Img className="mx-auto d-block" variant="top" src={product.image} style={{height:"130px", width:"100px"}}/>
       <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
    ${product.price}
       </Card.Text>
       </Card.Body>
       <Card.Footer style={{backgroundColor:"white"}}>
       <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
       </Card.Footer>
    </Card>
    </div>
       });
   }
   return(
    <>
        <h1>Product Details</h1>
        
            <div className='row' >
                {card}
            </div>
    
       
    </>
   );
};
export default Product;