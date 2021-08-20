import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConfirmEmailScreen } from '../components/principal/ConfirmEmailScreen'
import { IndexScreen } from '../components/principal/IndexScreen'
import { Sidebar } from '../components/principal/Sidebar'
import { UserSettingsScreen } from '../components/principal/UserSettingsScreen'
import { PortafolioScreen } from '../components/private-portafolio/PortafolioScreen'
import { UsersListScreen } from '../components/users/UsersListScreen'
import { PrivateBlogRoutes } from './PrivateBlogRoutes'

export const DashboardRoutes = () => {

    const {email_verified_at} = useSelector(state => state.auth)

    const btnmoreClick = () => { 
        const q = document.querySelector('.principal__sidebar');
        q.classList.toggle('sidebar_active');
    }
    const btnmoreOutClick = () => { 
        const q = document.querySelector('.principal__sidebar');
        q.classList.remove('sidebar_active');
    }

    return (
        <>
            <div className = "principal__main-content">
                <Sidebar/>
                {
                    (!email_verified_at)
                    ?
                    <ConfirmEmailScreen/>
                    :
                        <div className = "principal__dashboard" onClick={btnmoreOutClick}>
                            <Switch>
                                <Route exact path="/config/inicio" component={IndexScreen}/>
                                <Route exact path="/config/user/settings" component={UserSettingsScreen}/>
                                <Route exact path="/config/users" component={UsersListScreen}/>
                                <Route exact path="/config/portafolio" component={PortafolioScreen}/>
                                <Route path="/config/blog" component={PrivateBlogRoutes}/>
                                <Redirect to="/config/inicio"/>
                            </Switch>
                        </div>
                }

                <div className="button_more pointer" onClick={btnmoreClick}>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                
            </div>
        
        

        </>
    )
}
