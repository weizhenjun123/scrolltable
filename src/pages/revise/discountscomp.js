import React, { Component ,Fragment} from "react"
import { Select } from 'antd';
import YouhuiTableComp from "./youhuitablecomp";
const { Option } = Select;

class DiscountsComp extends Component {
    onChange = (value) => {
        console.log(`selected ${value}`);
        this.props.getYouHui(value)
    }

    render() {
        return (
            <Fragment>
                    <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="满减优惠"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="满减优惠">满减优惠</Option>
                    <Option value="优惠大酬宾">优惠大酬宾</Option>
                    <Option value="新用户立减">新用户立减</Option>
                    <Option value="进店领券">进店领券</Option>
                </Select>
                <YouhuiTableComp/>
            </Fragment>
           

        )
    }
}
export default DiscountsComp
