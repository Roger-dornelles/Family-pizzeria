import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import api from '../../api';

import { CartPage } from './styled'

const Cart = ()=>{
    const dispatch = useDispatch();
    const products = useSelector(state=>state.products.product);
    const drinks = useSelector(state=>state.products.drinks);



    const [success , setSuccess ] = useState('');
    const [totalCart, setTotalCart] = useState('');
    const [ user, setUser ] = useState('');

    useEffect(()=>{

        const valueTotal = ()=>{
            let totalDrink = drinks.reduce(getTotalDrink, 0);
            function getTotalDrink(totalDrink, item) {
                return totalDrink + (item.price * item.qt);
            }
            

            let totalProduct = products.reduce(getTotalProduct, 0);
            function getTotalProduct(totalProduct, item) {
                return totalProduct + (item.price * item.qt);
            }

            let total = totalProduct + totalDrink;
            setTotalCart(total.toFixed(2))
            
        }
        valueTotal();

        const user = async()=>{
        
            const json = await api.getInfo();
            setUser(json);
        }
        user();
    },[products,drinks]);

    const handleClickConfirm = ()=>{

        setSuccess('Pedido realizado  com sucesso.');

        setTimeout(()=>{
            window.location.href = '/';

        },2700);
        
        setTimeout(()=>{
            let product = products.length = 0;
            let drink = drinks.length = 0;
            dispatch({
                type:'CONFIRM_PRODUCT',
                payload: {
                    product,
                    drink
                }
            });

        },2800)

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
                    <span>Nome: {user.name}</span>
                    <span>Rua: {user.address}</span>
                    <span>Bairro: {user.district}</span>
                    <span>Telefone: {user.telephone}</span>
                    
                </div>

                <div className="cart-total">
                        <h3>Pedido.</h3>
                        <h4>Pizzas</h4>
                    {products.map((item, index) => {
                        return (
                            <>
                                <div className="cart-itens" key={index} >
                                    <span id={item.id}>{item.qt} {item.name}</span>
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
                                    <span id={item.id}>{item.qt} {item.name}</span>
                                    <span>R$ {(item.price * item.qt).toFixed(2)}</span>
                                </div>
                            </>
                        )
                    })}

                    <Link to="/Drinks" className="btn">Voltar</Link>
                </div>
            

                <h3>Total do pedido: R$ {totalCart}</h3>
                <div className="cart-buttons">
                    <button onClick={handleClickConfirm} className="btn1">Finalizar Pedido</button>
                </div>
            </div>
        </CartPage>

    )
};

export default Cart;