import React from 'react'
import { useSelector } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NewEntryScreen } from '../components/entry-blog/NewEntryScreen'
import { ConfirmEmailScreen } from '../components/principal/ConfirmEmailScreen'
//import { startLoadingUsers } from '../actions/user'
import { IndexScreen } from '../components/principal/IndexScreen'
import { Sidebar } from '../components/principal/Sidebar'
import { UserSettingsScreen } from '../components/principal/UserSettingsScreen'
import { UsersListScreen } from '../components/users/UsersListScreen'

export const DashboardRoutes = () => {

    // const dispatch = useDispatch();
    // dispatch(startLoadingUsers());
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
                                <Route exact path="/inicio" component={IndexScreen}/>
                                <Route exact path="/user/settings" component={UserSettingsScreen}/>
                                <Route exact path="/users" component={UsersListScreen}/>
                                <Route exact path="/entry-blog" component={NewEntryScreen}/>
                                <Redirect to="/inicio"/>
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
