import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';



import { SignupPage } from './styled';

//helpers
import {SignupSchema} from '../../helpers/SchemaValidators';
import { doLogin } from '../../helpers/AuthHandler';

import api from '../../api';

const Signup = ()=>{
    const history = useHistory();
    const [ remenberPass,setRemenberPass ] = useState('');
    const [alert,setAlert] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = async( data,event) =>{
        event.preventDefault();

        if(data.password !== remenberPass){
            setAlert('Senhas são diferentes.');
            setTimeout(() =>{
                setAlert('');
            },2300);
            return;
        };
        
        let name = data.name;
        let email = data.email;
        let password = data.password;
        let address = data.address;
        let district = data.district;
        let telephone = data.telephone;
        const json = await api.signup(name,email,password,address,telephone,district);

        if(json.error){
            for(let i in json.error){
                setError(json.error[i].msg)
                setTimeout(()=>{ 
                    setError('');
                },2500);
                return;
            };
        }

        if(json.token){
            doLogin(json.token);
            setSuccess('Usuario cadastrado com sucesso.');
            setTimeout(()=>{
                window.location.href ='/';
            },2500);

        }

        
        

    };

    const handleClose = ()=>{
        history.replace('/');
    };

    return (
        <SignupPage>
            <div className="container">
                <h3>
                    Você é novo aqui?<br/>
                    Realize seu Cadastro.
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
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
                        Bairro: 
                        <input type="text" {...register("district")} />
                        <p>{errors.district?.message}</p>
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
                        <input type="text" value={remenberPass} onChange={e=>setRemenberPass(e.target.value)}/>
                        <p>{alert}</p>
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