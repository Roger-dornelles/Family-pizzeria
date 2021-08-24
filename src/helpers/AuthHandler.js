import Cookie from 'js-cookie';

export const isLogged = ()=>{
    let token = Cookie.get('token');
    return (token)? true : false;
};

export const doLogin = (token)=>{
    if(token){
        Cookie.set('token', token);
    }

}