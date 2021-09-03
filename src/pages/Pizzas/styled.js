import styled from 'styled-components';

import img from '../../assets/image/imgPizzas.svg';

export const PizzasPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        
        
        .pizza-info{
            display: flex;
            width: 60%;
            flex-direction: column;
            margin-top: 100px;


            .pizzas-item{
                display: flex;
                align-items: center;
                width: 60%;
                color: white;
                background-color: rgba(0, 0, 0, 0.3);
                margin-bottom: 25px;
                border: 1px solid #4f4f4f;
                padding-right: 3px;

                img{
                    width: 270px;
                    height: 180px;
                }

                .pizza-desc{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    p{
                        margin: 10px 0;
                        margin-left: 10px;
                    }

                    button{
                        width: 30%;
                        background-color: #00c632;
                        color: white;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        border: none;
                        font-size: 16px;
                        border-radius: 5px;

                        &:hover{
                            background-color: #00e639;
                        }
                    }
                }
            }
        }

        .modal-open{
            width: 400px;
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            

            .btn{
                margin-top:100px;
                width:auto;
                height: 22px;
                padding:0 3px;
                position: fixed;
                border: none;


            }
            .modal{
                width: 20%;
                height: 550px;
                margin-top: 80px;
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                position: fixed;
                overflow: auto;

                >button{
                width:auto;
                background-color: rgba(0, 0, 0, 0.3);
                font-weight: bold;
                color: red;
                border:none;
                font-size:32px;

            }
                .modal-item{
                    display: flex;
                    flex-direction: column;
                    margin: 12px 0;
                    height: auto;

                    .warning{
                        width:100%;
                        padding: 3px 0;
                        text-align: center;
                        background-color: #ffff77;
                        color: #000;
                    }
                    
                    img {
                        width: 80px;
                        height: 50px;
                    }

                    p{
                        margin: 8px 0;
                        padding: 0 7px;
                        text-align: center;
                    }
                    span{
                        margin-top: 10px;
                    }

                    .itens{
                        margin-top: 10px;
                        font-size:20px;
                        span{
                            margin: 0px 9px ;
                            font-size: 27px
                        }
                    }

                    .cart{
                        background-color: #00c632;
                        color: #fff;
                        border: none;
                        width:120px;
                        padding: 5px 0;
                        text-align: center;
                        margin: 15px auto;
                        text-decoration: none;
                        font-size: 16px;

                        &:hover{
                            background-color: #00e639;
                        }
                    }
                }
            }
        }

        button{
            margin-top: 90px;
            width: 100px;
            height: 30px;
            cursor: pointer;
        }

        .modal{
            display: flex;

            .close{
                    display:flex;
                    justify-content: flex-end;
            }

            form{
                width: 50%;
                display: flex;
                flex-direction: column;
                input{
                    width: 100%;
                    outline: none;
                    border: none;
                }
            }
        }

        .pizzas{
            margin: 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: red;
        }
    }

`;