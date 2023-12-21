import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { useParams } from "react-router"
import { getById } from "../API/Cats"
import { addToCart } from "../Store/Action/action";
 function CatDetails(props){
const {id}=useParams()
const [state,SetState]=useState({})
const [loading,Setloading]=useState(true)
const [Quantity,SetQuantity]=useState(0)
useEffect(()=>{
getById(parseInt(id)).then(data=>{
    SetState(data)
    Setloading(false)
})
})
const addToCart=(state)=>{
    if(Quantity!=0){
         props.addToCart(state,Quantity)  
    }
 
}
const handleChange=(e)=>{
if(e.target.value<=0){
    return ;
}else{
    SetQuantity(e.target.value)
}
}
    return(
        <div>
            {console.log(state)}
            Cat {id} Details :
            {loading && <div>loading ...</div>}
            { !loading &&  state &&    <div className="container" style={{width: "40rem"}}>

  <img src={state.image} className="card-img-top" alt="cat image"/>
  <div className="row align-items-start">
    <h5 className="card-title">Nom :{state.name}</h5>
    <h6 className="card-text">Prix :{state.price} dt</h6>
    <p className="card-text">Description : {state.description}</p>
    <input className="form-control" type="number" placeholder="Quantity" name="Quantity" defaultValue={Quantity} onChange={handleChange}/>
   Total : <input className="form-control" type="text" placeholder="Total" name="Total" value={Quantity*state.price} />
    <button type="button" className="btn btn-success"onClick={()=>addToCart(state)} >Ajouter au panier</button>
  </div>
</div>}
      
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
       addToCart:(productInfo,quantity)=>dispatch(addToCart(productInfo,quantity)),

    }
}

export default connect(null,mapDispatchToProps)(CatDetails)