/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import Cookie from 'js-cookie';

const api = axios.create({
  baseURL: 'https://api-pizzeriaa.herokuapp.com',
});

export default {
  //cadastro de usuario
  signup: async (name,email,password,address,telephone,district) => {
    const result = await api.post('/user/signup', {name,email,password,address,telephone,district});
    const json = await result.data;
    return json;
  },

  // login do usuario
  signin:async (email,password)=>{
    let result = await api.post('/user/signin',{email,password});
    let json = await result.data;
    return json;
  },

  // informações Usuario
  getInfo: async() =>{
    let token = await Cookie.get('token');
    let result = await api.get(`/user/info?token=${token}`);
    let json = await result.data;
    return json.user;
  },

  //mostrar pizzas
  getPizzas: async()=>{
    let result = await api.get('/pizzas/search');
    let json = await result.data;
    return json.pizzas;
  },

  // mostrar bebidas
  getDrinks: async()=>{
    const result = await api.get('/drinks/search');
    const json = await result.data;
    return json;
  }
};
