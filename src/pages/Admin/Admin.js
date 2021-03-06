import React from 'react'

import Info from '../../components/Admin/Info/Info'
import Services from '../../components/Admin/Services/Services'
import Portfolio from '../../components/Admin/Portfolio/Portfolio'
import Message from '../../components/Admin/Message/Message'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import SocialLink from '../../components/Admin/SocialLink/SocialLink'
import Auth from '../../components/Admin/Auth/Auth'
import AuthOut from '../../components/Admin/AuthOut/AuthOut'



const Admin = () => {
    return (
        <Router>
            <Switch>

               <Route path='/admin/services'>
               <Services/>
               </Route>

               <Route path='/admin/portfolio'>
               <Portfolio/>
               </Route>

                <Route path='/admin/message'>
                <Message/>
                </Route>

                <Route path='/admin/social'>
                <SocialLink/>
                </Route> 
                 

                <Route path='/admin/information'>
                <Info/>
                </Route>
                
                <Route path='/admin/authout'>
                    <AuthOut/>
                </Route>
                
                <Route path='/admin'>
                    <Auth/>
                </Route>

        

            </Switch>
        </Router>
    )
}

export default Admin
