//*******************Actions user ******************* */


import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";
import { setPagination } from "./ui";

//errors msg ___________________________________________________________________________

export const startLoadingUsers = (page = 1) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken(`user?page=${page}`,'','GET');
        const body = await resp.json();
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
            dispatch(setPaginate(pagination));
            dispatch(setPagination(pagination));
        }
    }
};

export const setUsers = (users) => ({
    type: types.userLoadingUsers,
    payload: users
});


export const setPaginate = (pagination) => ({
    type: types.userSetPagination,
    payload: pagination
});

export const unsetPaginate = () => ({
    type: types.userUnSetPagination,
});

export const unsetUsers = () => ({
    type: types.userUnSetUsers,
});