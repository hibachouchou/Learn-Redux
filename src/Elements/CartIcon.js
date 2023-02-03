import { useNavigate } from "react-router"
import { connect } from "react-redux"

 function CartIcon(props){
    const navigator=useNavigate()
    return(
        <div>
            <button type="button" className="btn btn-secondry" onClick={()=>{navigator("/Cart")}}>
           Panier<span className="badge bg-danger">{props.TotalQuantity}</span></button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        TotalQuantity:state.cart.reduce((total,item)=>total+parseInt(item.quantity),0)
    }
}

export default connect(mapStateToProps)(CartIcon)