import React, { Component } from 'react'
import { Skeleton } from 'antd';
import Contain from './contain';
export default class LayOut extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },100)
    }
    render() {
        const {loading} = this.state
        return (
            <Skeleton active avatar paragraph={{ rows: 4 }} loading={loading}>
                <Contain/>
            </Skeleton>
        )
    }
}
