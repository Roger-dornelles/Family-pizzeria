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
  //adicionar pizza
  addpizza:async (datas)=>{
    let token = await Cookie.get('token')
    datas.append('token',token);

    let result = await api.post(`/pizzas/add`,datas);
    let json = await result.data;
    return json;
  },

  // excluir pizza
  deletePizza: async (id)=>{
    const token = Cookie.get('token');
    let result = await api.delete(`/pizza/delete?token=${token}&_id=${id}`);
    let json = await result.data;
    return json;

  },
  //atualizar pizza
  updatePizza: async(updates)=>{
    let token = await Cookie.get('token');
    updates.append('token',token);
      let result = await api.post('/pizza/edit',updates);
      let json = await result.data;
      return json;


  },

  // mostrar bebidas
  getDrinks: async()=>{
    const result = await api.get('/drinks/search');
    const json = await result.data;
    return json;
  },

  addDrinks: async(datas)=>{
    let token = await Cookie.get('token')
    datas.append('token',token);

    let result = await api.post('/drinks/add', datas);
    let json = await result.data;
    return json;

  },
  // excluir bebidas
  deleteDrink: async(id)=>{
    let token = Cookie.get('token');
    console.log('api ',id)
    let result = await api.delete(`/drink/delete?token=${token}&_id=${id}`);
    let json = await result.data;
    return json;
  },
  //editar bebida
  updateDrink: async(update)=>{
    let token = await Cookie.get('token');
    update.append('token',token);

    let result = await api.post('/drinks/adit',update);
    let json = await result.data;
    return json;
  }
};
