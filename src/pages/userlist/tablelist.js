import React, { Component } from 'react'
import { Table,Button } from 'antd';

 class TableList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns :[
                {
                    title: '唯一标识',
                    dataIndex: '_id',
                },
                {
                    title: '店铺名称',
                    dataIndex: 'shop_name',
                },
                {
                    title: '店铺地址',
                    dataIndex: 'shop_address',
                },
                {
                    title: '店铺电话',
                    dataIndex: 'shop_phone',
                },
                {
                    title:"操作",
                    render: (data) =><div><Button type="primary" onClick={()=>{this.revise(data)}}>修改</Button><Button type="danger" onClick={()=> this.delbtn(data._id)}>删除</Button></div> 
                }],
            selectedRowKeys: [], 
        }
    }
    delbtn = (id)=>{
        this.props.dellist(id)
    }
    revise = data=>{
       const {push} = this.props.history
       push({
            pathname:'/revise',
            state:{
                ...data
            }
       })
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { selectedRowKeys,columns } = this.state;
       const data = this.props.shoplist
       if(this.props.ShopListReducer instanceof Array){
           console.log(this.props.ShopListReducer)
           data=this.props.ShopListReducer
       }
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()], // 0...45
                        });
                    },
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
       
         return (
            <div className='container userlist-box'>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default TableList


