import {GET_SHOPLIST,DEL_LIST} from "@/actions/actionType.js"
const initState = {
    shoplist:[]
}
const ShopListReducer = (state=initState,action)=>{
    let newdata = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case (GET_SHOPLIST):
        newdata = action.payload
        break;
        case(DEL_LIST):
        newdata = action.payload
        default:
        break;
    }
    return newdata
}

export default ShopListReducer