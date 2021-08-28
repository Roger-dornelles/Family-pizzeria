
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { PizzasPage } from './styled'
// api 
import api from '../../api';

// components
import Header from '../../components/Header';


const Pizzas = ()=>{
    const dispatch = useDispatch();
    const product = useSelector(state=>state.products.product);


    const [modalIsOpen, setIsOpen] = useState(false);
    const [pizza,setPizza] = useState([]);

    const [qt, setQt] = useState(1);


    useEffect(()=>{
        const getPizza = async () =>{
            let json = await api.getPizzas();
            setPizza(json)
        };
        getPizza();

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
            type:'CHANGE_PRODUCT',
            payload:{key,value}
        })
    
    }

    const handleAdd = (key, value) =>{
        
            dispatch({
                type:'ADD_PIZZA',
                    payload:{value, qt,}
            });




    }


    function openModal() {
    setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (

        <PizzasPage>
            
            <Header className="header"/>

            <div className="container">

                <div className="pizza-info">
                    {pizza.map((item,index)=>{
                        return(
                            <div key={index} id={item._id} className="pizzas-item" >
                                <img src={item.image} alt={item.name}/>
                                <div className='pizza-desc' >
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <p>Preço: R$ {item.price.toFixed(2)}</p>
                                    <button onClick={()=>handleAdd(index,item)}>Adicionar</button>
                                </div>
                            </div>
                        )
                    })};
                </div>

                <div className="modal-open">
                    {product.length > 0 && 
                        <button className="btn"onClick={openModal}>Carrinho ({product.length})</button>
                    }

                    {modalIsOpen && 
                    
                        <div className="modal">
                            <button className="btn-close" onClick={closeModal}>X</button>

                                    <div className="modal-item">
                                        <h2>Carrinho</h2>
                            {product.map((item,index)=>{
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
                            </div>
                            
                        </div>
                    }           

                </div>
            </div>
        </PizzasPage>
    )
};

export default Pizzas;