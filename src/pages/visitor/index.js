import React, { Component } from 'react'
import "./index.scss"
import ScrollTable from './ScrollTable'

export default class Visitor extends Component {
    constructor(props){
        super(props)
        this.state={
            datalist:[
                {id:1,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:2,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:3,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:4,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:5,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:6,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:7,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:8,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:9,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:10,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"},
                {id:11,text:"阿里集团-标准化部-安全标准化专家/高级专家",address:"北京",time:"1小时前"}
            ],
            i:null
        }
    }
    render() {
        const {datalist} = this.state
        return (
            <div className="container visitor-box">
                <ScrollTable data={datalist} />
            </div>
        )
    }
}
