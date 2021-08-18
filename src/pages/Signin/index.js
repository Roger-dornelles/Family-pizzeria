import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SigninPage } from './styled';

import {SigninSchema} from '../../helpers/SchemaValidators';
const Signin = ()=>{
    const history = useHistory();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SigninSchema)
      });
      const onSubmit =( data,event) =>{
        event.preventDefault();
        console.log(data);
      };


    const handleClose = ()=>{
        history.replace('/')
    }
    
    return (

            <SigninPage>
                <div className="signin">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <label>
                        E-mail: 
                        <input type="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </label>

                    <label>
                        Senha: 
                        <input type="text" {...register("password", {min:6, max:22})} />
                        <p>{errors.password?.message}</p>
                    </label>


                         <div className="btn">

                            <button className="btn-cancel" onClick={handleClose}>Cancelar</button>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </SigninPage>

    )
};

export default Signin;