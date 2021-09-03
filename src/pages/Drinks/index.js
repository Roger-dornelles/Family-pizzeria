import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import {isLogged} from '../../helpers/AuthHandler';

import{ DrinksPage } from './styled';

import Header from '../../components/Header';

import api from '../../api';

const Drinks = () =>{
    const dispatch = useDispatch();
    const drinks = useSelector(state =>state.products.drinks);
    const logged = isLogged();
    const history = useHistory();

    const [drink, setDrink ] = useState([]);
    const [qt, setQt ] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [warning, setWarning] = useState();

    useEffect(()=>{
        const getDrink = async () =>{
            let json = await api.getDrinks();
            setDrink(json.drinks);

        };
        getDrink();

    },[]);


    const handlePlus = (key,value)=>{
        if(value.qt){
            setQt(value.qt += 1)
        }
    
    }

    const handleMinus = (key, value) =>{
        if(value.qt){
            setQt(value.qt -= 1)
        }

        dispatch({
            type:'CHANGE_DRINKS',
            payload:{key,value}
        })
    
    }

    const handleAddDrinks = (key, value) =>{
        
            dispatch({
                type:'ADD_DRINKS',
                payload:{value, qt,}
            });

    }

    const handleUserLogged = () =>{
        if(logged === true){
            history.replace('/cart')
        }else{
            setWarning('Você precisa estar logado para finalizar o pedido.');
            setTimeout(() =>{

                history.replace('/Signin')
            },3000);
        }
    }

    function openModal() {
        setIsOpen(true);
        }
    
        function closeModal() {
            setIsOpen(false);
        }

    return(
        <DrinksPage>
            <Header />
            <div className="container">

                <div className="drinks">

                    {drink.map((item,index)=>{
                        return(
                            <div className="drink-description" key={index} id={item._id}>
                                <img src={item.image} alt={item.name} />
                                <div className="drink-itens">
                                    <span>{item.name}</span>
                                    <span>R$ {(item.price.toFixed(2))}</span>

                                        <button onClick={()=>handleAddDrinks(index,item)}>Adicionar</button>

                                </div>

                            </div>
                        )
                    })}
                </div>


                <div className="modal-open">
                    {drinks.length > 0 && 
                        <button className="btn" onClick={openModal}>Carrinho ({drinks.length})</button>
                    }

                    {modalIsOpen && 
                    
                        <div className="modal">
                            <button className="btn-close" onClick={closeModal}>X</button>

                                    <div className="modal-item">
                                        {warning && <span className="warning">{warning}</span>}
                                        <h2>Carrinho</h2>
                                        {drinks.map((item,index)=>{
                                            return(

                                                <div className="modal-item" key={index} id={item._id}>
                                                    <img src={item.image.url} alt="" />
                                                    <p>{item.name}</p>
                                                    <p>{item.description}</p>
                                                    <span>R$: {(item.price * item.qt).toFixed(2)}</span>
                                                    <div className='itens'>
                                                        <span style={{cursor:'pointer'}} onClick={()=>handlePlus(index,item)}> + </span>
                                                        <b>{item.qt}</b>
                                                        <span style={{cursor:'pointer'}} onClick={()=>handleMinus(index,item)}> - </span>
                                                    </div>
                                                </div>

                                            )
                                        })}
                                        {drinks.length > 0 &&
                                            <button className="cart-button"  onClick={handleUserLogged}>Finalizar</button>
                                        }
                                    </div>
                            
                        </div>
                    }           

                </div>
            </div>
            
        </DrinksPage>
    )
};


export default Drinks;