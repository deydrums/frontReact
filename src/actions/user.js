//*******************Actions user ******************* */


import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishFetch, setPagination, startFetch } from "./ui";


//errors msg ___________________________________________________________________________

export const startLoadingUsers = (page = 1) => {
    return async(dispatch) => {
        dispatch(startFetch());
        const resp = await fetchWithoutToken(`user/get-users?page=${page}`,'','GET');
        const body = await resp.json();
        dispatch(finishFetch());
        if(resp.ok) {
            const {data:users} = body.users;
            const pagination = ({
                'total': body.users.last_page,
                'current': body.users.current_page,
                'prev' : !body.users.links[0].url?null:parseInt(body.users.links[0].url.split('=')[1]),
                'next' : (body.users.current_page < body.users.last_page)?body.users.current_page + 1 : null,
                'origin' : 'users'
            })
            dispatch(setUsers(users));
            dispatch(setPagination(pagination));
        }
    }
};

export const setUsers = (users) => ({
    type: types.userLoadingUsers,
    payload: users
});

export const unsetUsers = () => ({
    type: types.userUnSetUsers,
});

export const updateUser = (id, user) =>({
    type: types.userUpdateUser,
    payload: {
        id, 
        user
    }
});