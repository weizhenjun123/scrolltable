import React,{Component} from "react"
import { Table, Divider, Tag,Button } from 'antd';

const { Column, ColumnGroup } = Table;


class YouhuiTableComp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
           data : [
                {
                  key: '1',
                  title:'满减',
                  name: "满减优惠",
                  info: '满200元减20元',
                }
              ]
        }
    }
    deldata=(e)=>{
        console.log(e)
    }
    render(){
        const {data} = this.state
        const columns = [
            { title: '活动标题', dataIndex: 'title', key: 'title' },
            { title: '活动名称', dataIndex: 'name', key: 'name' },
            { title: '活动详情', dataIndex: 'info', key: 'info' },
            { title: '操作', dataIndex: 'upgradeNum', key: 'upgradeNum', render: () => <Button type="danger" onClick = {this.deldata}>删除</Button>  },
          
          ];
        return(
            <Table
            className="components-table-demo-nested"
            columns={columns}
            dataSource={data}
          />
        )
    }
    
}
export default YouhuiTableComp