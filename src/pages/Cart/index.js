import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartPage } from './styled'

const Cart = ()=>{
    const products = useSelector(state=>state.products.product);
    const drinks = useSelector(state=>state.products.drinks)

    const [success , setSuccess ] = useState('');

    useEffect(()=>{

        const valueTotal = ()=>{
            for(let i in products){
                let ii = (products[i].price + products[i].price).toFixed(2);
                console.log('PROD qt 12 ',ii)


            }
        }
        valueTotal();
    },[products]);

    const handleClickConfirm = ()=>{
        setSuccess('Pedido realizado  com sucesso.')
        setTimeout(()=>{
            window.location.href = '/';
        },2750)
    }

    return (


        <CartPage>
            <div className="cart">
                <h1>Finalizar Pedido</h1>
                {success && 
                    <span className="success">{success}</span>
                }

                <div className="cart-address">
                    <h3>Endereço de entrega.</h3>
                    <span>Rua: titanic</span>
                    <span>Bairro: Andorinha</span>
                    <span>Telefone: 99999999</span>
                    <span>Complemento: Apto 94 numero 50</span>
                </div>

                <div className="cart-total">
                    <h3>Pedido.</h3>
                    <h4>Pizzas</h4>
                {products.map((item, index) => {
                    return (
                        <>
                            <div className="cart-itens" key={index} id={item.id}>
                                <span id={item.id}>{item.name}</span>
                                <span>R$ {(item.price * item.qt).toFixed(2)}</span>
                            </div>

                        </>
                    )
                })}
                <Link to="/Pizzas" className="btn">Voltar</Link>
                <h4>Bebidas</h4>
                {drinks.map((item,index)=>{

                    return(
                        <>
                            <div className="cart-itens" key={index} id={item.id}>
                                <span id={item.id}>{item.name}</span>
                                <span>R$ {(item.price * item.qt).toFixed(2)}</span>
                            </div>
                        </>
                    )
                })}
                <Link to="/Drinks" className="btn">Voltar</Link>
                </div>
            

                <div className="cart-buttons">
                    <button onClick={handleClickConfirm} className="btn1">Finalizar Pedido</button>
                </div>
            </div>
        </CartPage>

    )
};

export default Cart;