//*******************Actions user ******************* */


import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

//errors msg ___________________________________________________________________________

export const startLoadingUsers = () => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('user','','GET');
        const {users} = await resp.json();
        dispatch(setUsers(users));
    }
};

export const setUsers = (users) => ({
    type: types.userLoadingUsers,
    payload: users
});