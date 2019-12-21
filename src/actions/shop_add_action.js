
import {GET_ADDRESS,GET_SHOPDATA,GET_SHOPLIST,DEL_LIST} from "./actionType"
import api from "@/actions/api"
import request from "@/utils/request"
const ShopAddAction = {
    getshopaddress(text){
        return  async dispatch =>{
        //     //  数据请求
          let result= await request({
                url: '/v1/pois',
                params: {
                  type: 'search',
                  city_id: 2,
                  keyword: text
                }
            })
            
            dispatch({
                type:GET_ADDRESS,
                payload:result.data
            })
        }
    },
    getshopdata(data){
        console.log(data)
        return async dispatch=>{
            let result = await request({
                url:api.SHOP_DATA,
                method:"POST",
                data:data
            })
            dispatch({
                type:GET_SHOPDATA,
                payload:result.data
            })
        }
    },
    getshoplist(){
        return async dispatch=>{
            let result = await request({
                url:api.SHOP_DATA,
                method:'GET',
            })
            dispatch({
                type:GET_SHOPLIST,
                payload:result.data
            })
        }
    },
    dellist(_id){
        console.log(_id)
        return async dispatch=>{
            let result = await request({
                url: api.SHOP_DATA,
                method: 'DELETE',
                params: {
                  _id
                }
            })
            console.log(result.data)
            dispatch({
                type:DEL_LIST,
                payload:result.data
            })
        }
    }
}

export default ShopAddAction