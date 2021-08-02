import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { IndexScreen } from '../components/principal/NothingScreen'
import { Sidebar } from '../components/principal/Sidebar'
import { UserSettingsScreen } from '../components/principal/UserSettingsScreen'
import { UsersListScreen } from '../components/principal/UsersListScreen'

export const DashboardRoutes = () => {
    return (
        <div className = "principal__main-content">
            <Sidebar/>
            <Switch>
                <Route exact path="/inicio" component={IndexScreen}/>
                <Route exact path="/user/settings" component={UserSettingsScreen}/>
                <Route exact path="/users" component={UsersListScreen}/>
                <Redirect to="/inicio"/>
            </Switch>
        </div>
    )
}
