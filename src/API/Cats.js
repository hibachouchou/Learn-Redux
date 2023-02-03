import Cats from "./cat.json";


export function getAll(){
    return Promise.resolve(Cats) ;
}

export function getById(id){
    const caty= Cats.find(item=>item.id===id)
    return Promise.resolve(caty)
}
export default {
    getAll,
    getById
}
