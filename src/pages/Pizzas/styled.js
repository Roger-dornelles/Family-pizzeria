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
            width: 50%;
            flex-direction: column;
            margin-top: 100px;


            .pizzas-item{
                display: flex;
                align-items: center;
                width: 70%;
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
                        width: 50%;
                        background-color: #00c632;
                        color: white;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        border: none;
                        font-size: 16px;
                        border-radius: 5px;
                        padding: 5px;
                        cursor: pointer;

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
                margin-top:80px;
                width:auto;
                height: 22px;
                padding:0 3px;
                position: fixed;
                top: 0;
                //right: 10px;
                border: none

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
            button{
                margin-top: 30px;
                width: 100px;
                height: 30px;
                cursor: pointer;
            }
        }


    
    }

    @media screen and (max-width: 1280px){
        .container{

            .pizza-info{
                display: flex;
                width:50%;
                flex-direction: column;
                margin-top: 140px;
        
                .pizzas-item{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-bottom: 25px;
                    border: 1px solid #4f4f4f;
                    padding-right: 3px;
        
                    img{
                        width: 150px;
                        height: auto;
                    }
                }
            }

        }
    }

    @media screen and (max-width: 1024px){
        .container{

            .pizza-info{
                display: flex;
                width:70%;
                flex-direction: column;
                margin-top: 140px;
        
                .pizzas-item{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-bottom: 25px;
                    border: 1px solid #4f4f4f;
                    padding-right: 3px;
        
                    img{
                        width: 190px;
                        height: auto;
                    }
        
                    .pizza-desc{
                        display: flex;
                        font-size:23px;
                        flex: 1;
                        flex-direction: column;
                    }
                }
            }

            .modal-open{
            width:100%;
            display: flex;
            position: absolute;
            top: 20px;
            right: 0;
            left: 0;
            

            .btn{
                margin-top:100px;
                width:auto;
                height: 22px;
                padding:1px 3px;
                position: fixed;
                left: 5px;
                top: 15px;
                border: none;
                font-size:22px;


            }
            .modal{
                width: 100%;
                position: fixed;
                height: 550px;
                margin-top: 98px;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: rgba(0, 0, 0, 0.9);
                //position: fixed;
                overflow: auto;
                font-size:25px;

                >button{
                width:auto;
                background-color: rgba(0, 0, 0, 0.3);
                font-weight: bold;
                color: red;
                border:none;
                font-size:32px;

            }

            }

        }
    }
    }

    @media screen and (max-width: 770px){

        .container{

            .pizza-info{
                display: flex;
                width:90%;
                flex-direction: column;
                margin-top: 140px;
        
                .pizzas-item{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-bottom: 25px;
                    border: 1px solid #4f4f4f;
                    padding-right: 3px;
        
                    img{
                        width: 100px;
                        height: auto;
                    }
        
                    .pizza-desc{
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        font-size:18px;
                        p{
                            flex-wrap: wrap;
                            margin: 10px 0;
                            margin-left: 0px;
                            padding: 2px;
                        }
        
                        button{
                            width: 80%;
                            
                        }
                    }
                }
            }

            .modal-open{
            width:100%;
            display: flex;
            position: absolute;
            top: 20px;
            right: 0;
            left: 0;
            

            .btn{
                margin-top:100px;
                width:auto;
                height: 22px;
                padding:0 3px;
                position: fixed;
                left: 5px;
                top: 15px;
                border: none;
                font-size:16px;

            }
            .modal{
                width: 100%;
                position: fixed;
                height: 550px;
                margin-top: 98px;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: rgba(0, 0, 0, 0.9);
                //position: fixed;
                overflow: auto;
                font-size:19px;

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
            button{
                margin-top: 30px;
                width: 100px;
                height: 30px;
                cursor: pointer;
            }
        }
    }
    }


`;