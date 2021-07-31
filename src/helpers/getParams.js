import { Redirect } from "react-router-dom";

export const getParams =(rest)=>{
    if(rest.location.search && rest.location.search !== '' && rest.location.search !== undefined){
        const urlParams = new URLSearchParams(rest.location.search);
        const token = urlParams.get('token');
        const email = urlParams.get('email');
        if(token && token !== '' & token !== undefined && email && email !== '' && email !== undefined ){
            return ({token, email});
        }else{
            return <Redirect to='/auth/login'  />
        }
    }else{
        return <Redirect to='/auth/login'  />
    }
}