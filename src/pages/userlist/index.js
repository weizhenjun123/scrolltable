import React, { Component } from 'react'
import './index.scss'
import {connect} from "react-redux"
import actions from "@/actions"
import {bindActionCreators} from "redux"
import TableList from './tablelist'

 class userList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        this.props.getshoplist()
        
    }
    render() {
         return (
            <div className='container userlist-box'>
               <TableList {...this.props}/>
            </div>
        )
    }
}

export default connect(
    state=>{
        console.log(state.ShopListReducer.data)
        return{
            shoplist:state.ShopListReducer.data
        } 
    },
    dispatch=>bindActionCreators(actions,dispatch)
)(userList)


