import React, { Component } from 'react'
import "./index.scss"

export default class ScrollTable extends Component {
    constructor(props){
        super(props)
        this.state={
            datalist: this.props.data || [],
            i:null
        }

    }

    componentDidMount(){
        if(this.state.datalist.length){
            this.setState({
                i: setInterval(this.ScrollUp,50)
             })
        }
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)){
            clearInterval(this.state.i);
            this.setState({
                i: null,
                datalist: nextProps.data || []
            }, () => {
                this.setState({
                    i: setInterval(this.ScrollUp,50)
                })
            })
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.i);
         this.setState({
            i: null
        })
    }

    up = ()=>{
        this.setState({
            i:setInterval(this.ScrollUp,50)
        })
    }

    Stop = ()=>{
        clearInterval(this.state.i);
    }

    ScrollUp=()=>{
        let ul = document.querySelector("ul")
        let context = document.querySelector('.context')
        if( context.scrollTop >= context.offsetHeight-ul.offsetHeight){
            context.scrollTop = 0;
        }else{
            context.scrollTop++;
        }
    }

    render() {
        const { datalist } = this.state
        return (
            <div className="container visitor-box">
                <div className="post_box">
                    <div className="title">
                        <h3>最新职位</h3>
                        <a>更多</a>
                    </div>
                    <div className="context" onMouseOut={this.up} onMouseOver = {this.Stop}>
                        <ul >
                            {
                                datalist.map(item=>{
                                    return( <li key={item.id} >
                                        <a>{item.text}</a>
                                        <span>{item.address}</span>
                                        <span>{item.time}</span>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
