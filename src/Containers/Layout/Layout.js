import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Login from '../../Components/Login/Login'
import Signup from '../../Components/Signup/Signup'
import Footer from '../../Components/Utilities/Footer'
import Navbar from '../../Components/Utilities/Navbar'
import './Layout.css'
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/signup' exact component={Signup}></Route>
                <Route path='/dashboard' exact component={Dashboard}></Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Layout
