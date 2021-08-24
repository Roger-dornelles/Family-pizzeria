/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

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
  }
};
