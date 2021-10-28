import styled from 'styled-components';

import imgDrinks from '../../assets/image/imgDrinks.svg';


export const DrinksPage = styled.div`

    width: 100%;
    min-height: 100vh;
    background-image: url(${imgDrinks});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    color:#ffff;

    .container {
        width: 90%;
        padding-top: 100px;
        padding-bottom: 50px;

        .drinks{
            width: 80%;
            display: flex;
            flex-direction: column;
    
            .drink-description{
                width: 50%;
                display: flex;
                margin-bottom: 20px;
                background-color: rgba(0,0,0,0.5);
                img{
                    width: 250px;
                    height: 180px;
                }
    
                .drink-itens{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    span{
                        margin-bottom: 10px;
                    }
                        
                    button{
                        margin-top: 20px;
                        background-color: #00d500;
                        color:#ffff;
                        padding: 3px 12px;
                        text-decoration: none;
                        border-radius:4px;
                        border: none;
                        font-size: 16px;
                        cursor: pointer;
    
                        &:hover{
                            background-color: #00ae00;
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
                width:100px;
                height:25px;
                position: fixed;
                margin-top:80px;
                right: 170px;
                cursor: pointer;
                border: none;
                background: #fff;
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

                .btn-close{
                width:auto;
                background-color: rgba(0, 0, 0, 0.3);
                font-weight: bold;
                color: red;
                border:none;
                font-size:32px;
                cursor: pointer;

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

                    .cart-button{
                        background-color: #00c632;
                        color: #fff;
                        border: none;
                        width:120px;
                        padding: 5px 0;
                        text-align: center;
                        margin: 15px auto;
                        font-size: 16px;
                        cursor: pointer;

                        &:hover{
                            background-color: #00e639;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:1024px) {

.container {
width: 80%;
display: flex;
padding-top: 100px;
padding-bottom: 50px;

.drinks{
    width: 75%;
    margin-top: 20px;

    .drink-description{
        width: 100%;

        img{
            width: 100px;
            height: 150px;
        }
    }
}

.modal-open{
    width: 100%;
    display: flex;
    position: absolute;
    margin-top:30px;
    top: 0;
    right: 0;
    left: 0;

    .btn{
        width:100px;
        height:25px;
        position: fixed;
        margin-top:110px;
        right: 5px;
        cursor: pointer;
        border: none;
        background: #fff;
    }

    .modal{
        width: 100%;
        height: 550px;
        margin-top: 70px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        color: white;
        background-color: rgba(0, 0, 0, 0.9);
        position: fixed;
        overflow: auto;

        .btn-close{
        width:auto;
        background-color: rgba(0, 0, 0, 0.3);
        font-weight: bold;
        color: red;
        border:none;
        font-size:32px;
        cursor: pointer;

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

            .cart-button{
                background-color: #00c632;
                color: #fff;
                border: none;
                width:120px;
                padding: 5px 0;
                text-align: center;
                margin: 15px auto;
                font-size: 16px;
                cursor: pointer;

                &:hover{
                    background-color: #00e639;
                }
            }
        }
    }
}
}
}

    @media screen and (max-width:770px) {

        .container {
        width: 100%;
        display: flex;
        padding-top: 100px;
        padding-bottom: 50px;

        .drinks{
            width: 95%;
            margin-top: 20px;
    
            .drink-description{
                width: 100%;

                img{
                    width: 100px;
                    height: 150px;
                }
    
            }
        }

        .modal-open{
            width: 100%;
            display: flex;
            position: absolute;
            margin-top:30px;
            top: 0;
            left: 0;

            .btn{
                position: fixed;
                left: -250px;
                top: -35px;
                cursor: pointer;
                border: none;
                background: #fff;
                font-size: 20px;
            }

            .modal{
                width: 100%;
                height: 550px;
                margin-top: 60px;
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: rgba(0, 0, 0, 0.9);
                position: fixed;
                overflow: auto;

                .btn-close{
                width:auto;
                background-color: rgba(0, 0, 0, 0.3);
                font-weight: bold;
                color: red;
                border:none;
                font-size:32px;
                cursor: pointer;

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

                    .cart-button{
                        background-color: #00c632;
                        color: #fff;
                        border: none;
                        width:120px;
                        padding: 5px 0;
                        text-align: center;
                        margin: 15px auto;
                        font-size: 16px;
                        cursor: pointer;

                        &:hover{
                            background-color: #00e639;
                        }
                    }
                }
            }
        }
        }
    }
`;