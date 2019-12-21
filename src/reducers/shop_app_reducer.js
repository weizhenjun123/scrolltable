import {GET_ADDRESS,GET_SHOPDATA} from "@/actions/actionType.js"
const initState = {
    addressdata:null,
    addshopdata:null
}
const ShopAddReducer = (state=initState,action)=>{
    let newdata = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case(GET_ADDRESS):
        // 进行数据更新
        newdata = action.payload
        break;
        case(GET_SHOPDATA):
        newdata = action.payload
        break;
        default:
        break;

    }
    return newdata
}
export default ShopAddReducer