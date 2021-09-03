import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SigninPage } from './styled';

import {SigninSchema} from '../../helpers/SchemaValidators';

import {doLogin} from '../../helpers/AuthHandler';

import api  from '../../api';
const Signin = ()=>{
    const history = useHistory();

    const [error,setError ] = useState('');
    const [ success,setSuccess ] = useState('');

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SigninSchema)
    });
    const onSubmit =async( data,event) =>{
        event.preventDefault();
        const email = data.email;
        const password = data.password;

        let json = await api.signin(email,password);
        console.log(json);
        if(json.error){

            for(let i in json.error){
                setError(json.error[i].msg);
                setTimeout(() => {
                    setError('');
                },2500)
            }
            return;
        }else{
            doLogin(json.token);
            setSuccess('Usuario logado com sucesso.')
            setTimeout(() => {
                window.location.href='/';
                
            },2700);
            
        }
        
    };


    const handleClose = ()=>{
        history.replace('/')
    }
    
    return (

            <SigninPage>
                <div className="signin">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {success && <p className="success">{success}</p>}
                        {error && <p className="error">{error}</p>}

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
                            <span>Você é novo aqui? <Link to="/Signup">Começar</Link></span>
                    </form>
                </div>
            </SigninPage>

    )
};

export default Signin;