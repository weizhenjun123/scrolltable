import React from 'react'
import { connect } from "react-redux"
import { Form, Input, Button, Icon, Switch,TimePicker } from 'antd';
import actions from "@/actions"
import { bindActionCreators } from 'redux';
import AddressList from '../addresslist';
import CascaderList from '../cascader_list';
import UploadComp from "../uploadcomp"
import CanyinComp from '../canyincmp'
import YingyeComp from '../yingyecomp'
import DiscountsComp from "../discountscomp"

function eventdata(callback,wait){
    let timer = null
    return function(){
        let argument = arguments;
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            callback.apply(this,argument)
        }, wait);
    }
}
class FormItem extends React.Component {
    constructor() {
        super();
        this.state = {
            shop_id:null,
            shop_name: null,
            shop_address: null,
            f: false,
            shop_phone: null,
            shop_info: null,
            shop_slogan: null,
            shop_class: null,
            shop_feature: [
                { id: 1, text: "品牌保证", checked:true },
                { id: 2, text: "蜂鸟专送 ", checked: true },
                { id: 3, text: " 新开店铺 ", checked: true },
                { id: 4, text: "外卖保 ", checked: true },
                { id: 5, text: " 准时达 ", checked: true },
                { id: 6, text: " 开发票 ", checked: true }
            ],
            startValue:null,
            endValue:null,
            shopImg:null,
            yangyeImg:null,
            canyinImg:null,
            
        };
        
    }
    // 获取id
    getShopId = e =>{
        this.setState({
            shop_id:e.target.value
        })
    }
    
    //   获取 店铺名称
    getShopName = e => {
        this.setState({
            shop_name: e.target.value,
            addressdata: []
        })
    }
    // 获取店铺地址

    getShopAddress = e => {
        this.setState({
            f: true,
            shop_address: e.target.value
        })
        if (!e.target.value) {
            this.setState({
                f: false
            })
        }
   this.props.getshopaddress(e.target.value)
    //   console.log(eventdata)
    //  eventdata(function(){
    //     console.log(1)
    //    },100)

        if (this.props.ShopAddReducer instanceof Array) {
            let data = []
            this.props.ShopAddReducer.map(item => {
               return data.push(item.address)
            })
            this.setState({
                addressdata: data
            })

        }

    }
    // 修改地址
    getaddress = (val) => {
        this.setState({
            shop_address: val,
            f: false
        })
        // console.log(this.state.shop_address)
    }
    // 清除地址栏地址
    deladdress = () => {
        this.setState({
            shop_address: ' ',
        })
    }
    // 获取电话号码
    getshopphone = e => {
        this.setState({
            shop_phone: e.target.value
        })
    }
    // 获取店铺简介
    getshopinfo = e => {
        this.setState({
            shop_info: e.target.value
        })
    }
    // 获取店铺标语
    getshopslogan = e => {
        this.setState({
            shop_slogan: e.target.value
        })
    }
    // 获取 店铺分类
    getshopfl = val => {
        this.setState({
            shop_class: val
        })
    }
    // 店铺分类开关事件
    shopclassbol = (index,checked)=>{
        this.state.shop_feature[index].checked = !checked
        this.setState({
            shop_feature:this.state.shop_feature
        })
    }
   
    // 开始营业事件事件
    changestarttime=(time)=>{
        // this.state.startValue = this.p((time._d).getHours()) + ':' + this.p((time._d).getMinutes()) + ':' + this.p((time._d).getSeconds())
       
        this.setState({
            startValue:time
        })
    }
    // 结束时间
    changeendtime=(time)=>{
        // this.state.startValue = this.p((time._d).getHours()) + ':' + this.p((time._d).getMinutes()) + ':' + this.p((time._d).getSeconds())
       
        this.setState({
            endValue:time
        })
    }
    // 店铺照片
    getShopImg=val=>{
        this.setState({
            shopImg:val
        })
    }
    // 获取营业执照
    getYingYeImg = val =>{
        this.setState({
            yangyeImg:val
        })
    }
    // 餐饮许可
    getCanYiImg = val=>{
        this.setState({
            canyinImg:val
        })
    }
    // 获取优惠
    getYouHui = val =>{
        this.setState({
            youhuidata:val
        })
    }
    // 发送数据请求
    postshopdata = ()=>{
        this.props.getshopdata({...this.state})
       const {push}= this.props.history
       push('/userlist')

    }
    render() {
        const { addressdata, f, shop_address, shop_name, shop_feature ,shop_id} = this.state
       
        return (
            <div>
                <Form style={{
                    width: "70%",
                    margin: 'auto',
                }}>
                    <Form.Item label="唯一标识" >
                        <Input placeholder="请输入标识" value={shop_id} onChange={this.getShopId} />
                    </Form.Item>
                    <Form.Item label="店铺名称" >
                        <Input placeholder="请输入店铺名称" value={shop_name} onChange={this.getShopName} />
                    </Form.Item>
                    <Form.Item label="店铺地址" >
                        <div className="shop_address"> <Input placeholder="请输入店铺地址" value={shop_address} onChange={this.getShopAddress} />{f && <Icon type="close-square" onClick={this.deladdress} />}</div>
                        {f && <AddressList addressdata={addressdata} style={{ position: "relative", zIndex: '100' }} getaddress={this.getaddress} />}
                    </Form.Item>
                    <h3 className="city">当前城市：杭州</h3>
                    <Form.Item label="联系电话">
                        <Input placeholder="请输入手机号码" onChange={this.getshopphone} />
                    </Form.Item>
                    <Form.Item label="店铺简介" >
                        <Input placeholder="请输入店铺简介" onChange={this.getshopinfo} />
                    </Form.Item>
                    <Form.Item label="店铺标语" >
                        <Input placeholder="请输入店铺标语" onChange={this.getshopslogan} />
                    </Form.Item>
                    <div ><h4 >店铺分类:</h4> <CascaderList getshopfl={this.getshopfl} /></div>
                    <div className="shopclass">
                        <h4>店铺特点：</h4>
                        <ul>
                            {shop_feature.map((item,index) => (
                                <li key={item.id}> <span style={{ marginRight: "10px" }}>{item.text}</span><Switch checked = {item.checked}  onChange={()=>{this.shopclassbol(index,item.checked)}}/></li>
                            ))}
                        </ul>
                    </div>
                    {/* <div>
                        <h4>配送费</h4>
                        <StepperComp/>
                    </div> */}
                    <div>
                        <h4>营业时间：</h4>
                        <TimePicker value={this.state.startValue} onChange={this.changestarttime} style={{marginRight:"15px"}} size="large"/>
                        <TimePicker value={this.state.endValue} onChange={this.changeendtime} size="large"/>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <h4>上传店铺头像</h4>
                        <UploadComp getShopImg= {this.getShopImg }/>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <h4>上传营业执照</h4>
                        <YingyeComp getYingYeImg= {this.getYingYeImg }/>
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <h4>上传餐饮服务许可证</h4>
                        <CanyinComp getCanYiImg = {this.getCanYiImg}/>
                    </div>
                    <div>
                        <h4>优惠活动：</h4>
                        <DiscountsComp getYouHui = {this.getYouHui}/>
                    </div>
                    <Form.Item >
                        <Button type="primary" onClick = { this.postshopdata } >点击添加</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateFromProps = state => {
    return state
}

const mapDispatchFromProps = dispatch => {

    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateFromProps, mapDispatchFromProps)(FormItem)
