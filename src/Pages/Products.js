import { useEffect, useState } from "react"
import cats from "../API/Cats"
import CatItems from "../Elements/CatItem"

export default function Products(){
const[state,SetState]=useState([])

useEffect(()=>{
cats.getAll().then(data=>{
    SetState(data)
})
})

    return(
        <div>
            {console.log(state)}
            Cats :
            <div className="row" style={{padding: "15px"}}>
 {state.map(cats=>
  
        <CatItems cats={cats} key={cats.id}/>
    
    
    )}

</div>
        </div>
    )
}