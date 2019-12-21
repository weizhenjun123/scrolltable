import React, { Component } from 'react'
import axios from 'axios';
import './index.scss'
export default class Explain extends Component {
    constructor(props){
        super(props)
        this.state={
            listdata:null,
            text:[
                {id:1,text:"sdjf"},
                {id:2,text:'ewfh'}
            ]
        }
    }
    componentDidMount= async ()=>{
       let result = await axios({
            url:'http://localhost:5000'
        })
        this.setState({
            listdata:result.data
        })
    }
    render() {
        const {text} = this.state
        return (
            <div className='container explain-box'>
               { text.map(item=>{
                   return(
                   <div key={item.id}>{item.text}</div>
                   )
               })}
            </div>
        )
    }
}
