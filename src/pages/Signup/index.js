import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignupPage } from './styled';

import {SignupSchema} from '../../helpers/SchemaValidators';

const Signup = ()=>{
    const history = useHistory();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SignupSchema)
      });
      const onSubmit =( data,event) =>{
        event.preventDefault();
        console.log(data);
      };


      const handleClose = ()=>{
          history.replace('/');
      }

    return (
        <SignupPage>
            <div className="container">
                <h3>
                    Você é novo aqui?<br/>
                    Realize seu Cadastro.
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome: 
                        <input type="text" {...register("name",{minLength:2})} />
                        <p>{errors.name?.message}</p>
                    </label>

                    <label>
                        E-mail: 
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </label>

                    <label>
                        Endereço: 
                        <input type="text" {...register("address")} />
                        <p>{errors.address?.message}</p>
                    </label>

                    <label>
                        Telefone: 
                        <input type="text" {...register("telephone")} />
                        <p>{errors.telephone?.message}</p>
                    </label>

                    <label>
                        Senha: 
                        <input type="text" {...register("password", {min:6, max:22})} />
                        <p>{errors.password?.message}</p>
                    </label>

                    <label>
                        Confirmar senha: 
                        <input type="text" />
                    </label>

                    <div className='btn'>
                        <button className="cancel" onClick={handleClose}>cancelar</button>
                        <button>Cadastrar-se</button>
                    </div>
                </form>
            </div>
       
        </SignupPage>
    )
};

export default Signup;