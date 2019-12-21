import React, { Component } from 'react'
import './index.scss'
import FormItem from './formitem'
export default class Revise extends Component {
    render() {
        return (
            <div className='container addshop-box'>
                <FormItem {...this.props}/>
            </div>
        )
    }
}
