import styled from 'styled-components';

import imgCart from '../../assets/image/imgCart.png'

export const CartPage = styled.div`
    background-image: url(${imgCart});
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    color:#ffff;

    .cart{
        width: 40%;
        height: auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.5);

        h1{
            margin-top:20px;
            margin-bottom:30px;
        }

        .success{
            width: 90%;
            padding: 3px 0;
            background-color: #53ff53;
            text-align: center;
            color:#000;
        }

        .cart-address, .cart-itens{
            margin-top: 30px;
            display: flex;
            flex-direction: column;

            span{
                margin-top: 10px;
            }

        }

        .cart-total{
            display: flex;
            flex-direction: column;
            margin-top: 35px;

            h4{
                margin-top: 15px;
            }

            .cart-itens{
                display: flex;
                flex-direction: row;
                color:#ffff;
                margin-top: 7px;
                justify-content: flex-start;
    
                span{
                    margin-top: 12px;
                    margin-right: 15px;
                }
            
            }

            .btn{

                color:#ff0000;
                cursor: pointer;
                width: 40%;
                padding: 3px 5px;
                text-align: center;
                margin-top:15px;
            }
        }


        .cart-buttons{
            width: 40%;
            margin-top: 30px;
            display: flex;
            justify-content:space-around;

            button{
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                background-color:#00d500;
                color:#ffff;
                cursor: pointer;
                width: 40%;
                height: 35px;
                font-size:16px;
                border: none;
                border-radius:4px;
            }
            
        }
        h3{
            margin-top:20px;
        }
    }


    @media screen and (max-width: 1024px){
        .cart{
            width: 100%;
            height: auto;
            padding: 30px 0;
            display: flex;
            flex-direction: column;
            background-color: rgba(0,0,0,0.5);
            font-size:20px;

            .cart-buttons{
                width: 100%;
            
            }
        }
    }

`;