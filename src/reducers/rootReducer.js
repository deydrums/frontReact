//******************* rootReducer ******************* */

import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { blogReducer } from './blogReducer';
import { portafolioReducer } from './portafolioReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    user: userReducer,
    blog: blogReducer,
    portafolio: portafolioReducer,
});