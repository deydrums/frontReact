//*******************Actions user ******************* */


import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

//errors msg ___________________________________________________________________________

export const startLoadingUsers = () => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('user?page=1','','GET');
        const body = await resp.json();
        if(resp.ok) {
            const {data:users} = body.users;
            dispatch(setUsers(users));
        }
    }
};

export const setUsers = (users) => ({
    type: types.userLoadingUsers,
    payload: users
});