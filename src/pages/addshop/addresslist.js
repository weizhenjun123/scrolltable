import React,{Component} from "react"
import { List } from 'antd';


export default class AddressList extends Component {
    mouseoverlist=(e)=>{
       this.props. getaddress( e.target.innerHTML)
    }
    render() {
        // console.log(this.props.addressdata)
        const data = this.props.addressdata
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item 
                    onClick = { this.mouseoverlist }
                    >{item}</List.Item>}
                    style={{ width:"80%" }}
                    
                />
             
            </div>

        )
    }
}