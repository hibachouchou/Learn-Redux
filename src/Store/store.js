import { createStore } from "redux";
import { cartReducer } from "./reducers";

 const initialState={
    cart:[
        {
            product:
            {
                "id":1,"name":"Cat 1","price":50,"description":"Some quick example text to build on the card title and make up the bulk of the card's content.","image":"../cat img/cat3.jpg"
            },
            quantity :1
        }
    ]
}

const store = createStore(cartReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
