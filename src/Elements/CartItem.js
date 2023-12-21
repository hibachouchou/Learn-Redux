import { connect } from "react-redux";
import { removeFromCart } from "../Store/Action/action"

function CartItems(props){

    const {cat,index}=props
 
   
    return(

        <tr>
            {console.log(cat)}
        <th scope="row">
        {
          cat.product.id
        }</th>
        <td> <img src={cat.product.image} className="card-img-top" alt="cat image" style={{width: "7rem"}}/></td>
        <td>{
        cat.product.name
        }</td>
        <td>{
       cat.product.price
        }</td>
        <td>{
      cat.quantity
        }</td>
        <td>{
        cat.product.description
        }</td>
        <td><button type="button" className="btn btn-danger" onClick={()=>props.removeFromCart(index)} >Retirer</button></td>
      </tr>

    )
}
const mapDispatchToProps=(dispatch)=>{
  return {
     removeFromCart:(index)=>dispatch(removeFromCart(index)),

  }
}
export default connect(null,mapDispatchToProps)(CartItems)