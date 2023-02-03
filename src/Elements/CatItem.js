import { NavLink } from "react-router-dom";
import img1 from "../cat img/cat4.jpg";


export default function CatItems(props){

    const {cats}=props
   
    return(

<div className="col-sm-3">
  <div className="card" style={{width: "18rem"}}>
  
  <img src={cats.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    Nom Chat :<h5 className="card-title">{cats.name}</h5>
    Prix Chat : <p className="card-text">{cats.price} dt</p>
    <NavLink to={`/CatDetails/${cats.id}`}className="btn btn-primary"> Details</NavLink>

  </div>
</div>
</div>

    )
}