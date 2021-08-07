import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { IndexScreen } from '../components/principal/NothingScreen'
import { Sidebar } from '../components/principal/Sidebar'
import { UserSettingsScreen } from '../components/principal/UserSettingsScreen'
import { UsersListScreen } from '../components/users/UsersListScreen'

export const DashboardRoutes = () => {

    const btnmoreClick = () => { 
        const q = document.querySelector('.principal__sidebar');
        q.classList.toggle('sidebar_active');
    }
    const btnmoreOutClick = () => { 
        const q = document.querySelector('.principal__sidebar');
        q.classList.remove('sidebar_active');
    }

    return (
        <div className = "principal__main-content">
            <Sidebar/>
            <div className = "principal__dashboard" onClick={btnmoreOutClick}>
                <Switch>
                    <Route exact path="/inicio" component={IndexScreen}/>
                    <Route exact path="/user/settings" component={UserSettingsScreen}/>
                    <Route exact path="/users" component={UsersListScreen}/>
                    <Redirect to="/inicio"/>
                </Switch>
            </div>
            <div className="button_more pointer" onClick={btnmoreClick}>
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}
