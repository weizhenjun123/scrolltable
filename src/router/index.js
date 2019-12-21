import React, { Fragment } from "react"
import {
    Switch,
    Route,
    Redirect 
  } from 'react-router-dom'
import Home from "@/pages/home"
import userList from "@/pages/userlist"
import addShop from "@/pages/addshop"
import visitor from "@/pages/visitor"
import edit from "@/pages/edit"
import adminset from "@/pages/adminset"
import explain from "@/pages/explain"
import login from "@/pages/login"
import registe from "@/pages/registe"
import NotFound from '@/pages/notfund'
import revise from "@/pages/revise"

const routerlist=[
    {id:1,path:'/home',component:Home},
    {id:2,path:'/userList',component:userList},
    {id:3,path:'/addShop',component:addShop},
    {id:4,path:'/visitor',component: visitor},
    {id:5,path:'/edit',component: edit},
    {id:6,path:'/adminset',component: adminset},
    {id:7,path:'/explain',component: explain},
    {id:8,path:'/login',component: login},
    {id:9,path:'/registe',component: registe},
    {id:10,path:'/revise',component:revise}
]

const  RouterComp = props =>
<Fragment>
    <Switch>
    <Redirect from = "/" to = "/visitor"  exact/>
    {
      routerlist.map( item => <Route key = { item.id }  path = { item.path }  component = { item.component }/>)
    }
    <Route component={NotFound}/>
  </Switch>
</Fragment>
 
  
  
export default RouterComp