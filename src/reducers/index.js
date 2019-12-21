import {combineReducers} from "redux"
import ShopAddReducer from './shop_app_reducer'
import ShopListReducer from "./shop_list"
const rootReducer = combineReducers({
    ShopAddReducer,
    ShopListReducer
})
export default rootReducer