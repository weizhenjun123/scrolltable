import React, { Component } from 'react'
import "./index.scss"
import StepComp from './steps'
import {Route} from "react-router-dom"
import StepOne from "./steps/step_one"
import StepTwo from "./steps/step_two"
import StepThree from "./steps/step_three"
export default class Home extends Component {
    render() {
        return (
            <div className="home-box container">
                <StepComp {...this.props}/>
                <Route path="/home/stepone" component={StepOne}/>
                <Route path="/home/steptwo" component={StepTwo}/>
                <Route path="/home/stepthree" component={StepThree}/>
            </div>
        )
    }
}
