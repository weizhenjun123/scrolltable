import React,{Component} from 'react'
import { Cascader } from 'antd';


export default class CascaderList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options :[
                {
                    value: '快餐',
                    label: '快餐便当',
                    children: [
                        {
                            value: '简餐',
                            label: '简餐',
                            
                        },
                    ],
                },
               
            ]
        }
    }
    onChange = (value, selectedOptions) => {
        this.props.getshopfl(value)
    }
    // filter = (inputValue, path) => {
    //     return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    // }
    render() {
        const {options} = this.state
        return (
            <Cascader
                options={options}
                onChange={this.onChange}
                placeholder={['快餐便当', '简餐']}
                showSearch={this.filter }
            />
        )
    }
}  

