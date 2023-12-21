import CartItems from "../Elements/CartItem"
import { connect } from "react-redux"
import { clearCart } from "../Store/Action/action"



 function Cart(props){
  const placeOrder = () => {
    // send the request to the server
    // clear cart
    props.clearCart();
    alert('We recieved your order, and we are working on it.');
};
    return(
        <div>
            <h2>Cart :</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image Chat</th>
      <th scope="col">Nom Chat</th>
      <th scope="col">Prix</th>
      <th scope="col">Quantity</th>
      <th scope="col">Description</th>
      <th scope="col">Supprimer</th>
    </tr>
  </thead>
  <tbody>
    {props.cartItems.map((cat,index)=>
   // console.log(cat)
    <CartItems cat={cat} index={index} key={cat.product.id}/>
    )}

   
  </tbody>
</table>
<h4>Total : {props.Total} {console.log(props)}dt</h4>
<div className="d-grid gap-2 col-6 mx-auto">
<button type="button" className="btn btn-info btn-lg" onClick={placeOrder}>Payer maintenant</button></div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        cartItems:state.cart,
        Total:state.cart.reduce((total,item)=>total+item.quantity*item.product.price,0)
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      clearCart: () => dispatch(clearCart()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)