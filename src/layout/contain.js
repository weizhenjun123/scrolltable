import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import RouterComp from '../router';
import { NavLink } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Contain extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{
                        textAlign: "center"

                    }}>
                        <img src="http://hbimg.b0.upaiyun.com/289b51e78e8f4d2539808f25398cfcfffd58d8c96f4b5-fJEsnh_fw658" alt="" style={{
                            width: "100px"
                        }} />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="appstore" />
                            <span> <NavLink to='/home' style={{ color: '#fff' }}> 首页</NavLink> </span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="pie-chart" />
                                    <span>数据管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="2">
                                <NavLink to='/userlist'>用户列表</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">商家列表</Menu.Item>
                            <Menu.Item key="4">食品列表</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="file-add" />
                                    <span>添加数据</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6">
                                <NavLink to="/addshop">添加商铺</NavLink>
                            </Menu.Item>
                            <Menu.Item key="8">添加商品</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="area-chart" />
                                    <span>图表</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">
                                <NavLink to='/visitor'>用户分布</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="form" />
                                    <span>编辑</span>
                                </span>
                            }
                        >
                            <Menu.Item key="10">
                                <NavLink to="edit">文本编辑</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="tool" />
                                    <span>设置</span>
                                </span>
                            }
                        >
                            <Menu.Item key="11">
                                <NavLink to="adminset">管理员设置</NavLink></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub6"
                            title={
                                <span>
                                    <Icon type="exclamation-circle" />
                                    <span>说明</span>
                                </span>
                            }
                        >
                            <Menu.Item key="12">
                                <NavLink to='explain'>说明</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ 
                        background: '#f5f5f5',
                        padding: "15px",
                        display:"flex",
                        justifyContent:" space-between",
                        alignItems: "center"
                        }} > <Breadcrumb style={{ margin: '16px 0px' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                         </Breadcrumb>
                       <div className="el-dropdown"><NavLink to="/login"><img src="//elm.cangdu.org/img/default.jpg" alt='' className="avator" style={{ width:"40px",borderRadius:'50%' }}/> </NavLink></div>
                    </Header>
                        <Content style={{
                            margin: '15px 16px 0 ',
                            height: '100%'
                        }}>
                            <RouterComp />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>版权 @ 林木 </Footer>
        </Layout>
                </Layout>
                );
              }
            }
