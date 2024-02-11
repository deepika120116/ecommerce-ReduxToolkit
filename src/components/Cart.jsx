import { useSelector,useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {remove} from '../store/CartSlice';

const Cart=()=>{
    const dispatch=useDispatch();
    const products=useSelector(state=>state.cart);
    const removeFromCart=(id)=>{
        dispatch(remove(id))
    }
    let card;
   if(products){
        card=products.map(product=>{
    return  <div className='col mb-12' key={product.id}>
        <Card className="h-100" style={{ width: '18rem',marginBottom:'3px' }}>
       <Card.Img className="mx-auto d-block" variant="top" src={product.image} style={{height:"130px", width:"100px"}}/>
       <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
    ${product.price}
       </Card.Text>
       </Card.Body>
       <Card.Footer style={{backgroundColor:"white"}}>
       <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
       </Card.Footer>
    </Card>
    </div>
       });
   }
    return(
        <>
            <h1>Cart Details</h1>
            <div className="rows">
                {card}
            </div>

        </>

    );
};
export default Cart;