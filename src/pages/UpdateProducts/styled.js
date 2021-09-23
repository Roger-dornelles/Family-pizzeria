import styled from 'styled-components';

export const UpdateProductPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    display: flex;

    .container {
        width: 50%;
        margin-top:80px;
        margin-bottom:100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius:12px ;
        background-color: #cecece;

        .exit{
            width: 100%;
            display:block;

            a{
                font-weight: bold;
                color:rgb(255,0,0);
                font-size: 30px;
                text-decoration: none;
                margin-top:30px;
                margin-left: 15px;
            }
        }
        

        h2{
            margin-top:70px;
        }

        .select-class {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            position: relative;

            .warning {
                position: absolute;
                width: 100%;
                background-color: #ffff00;
                padding: 2px 0;
                display: flex;
                justify-content: center;
            }

            select {
                outline: none;
                border: none;
                width: 100%;
                font-size: 16px;
                padding: 3px 0;
                margin-top:15px;
            }

            button{
                width: 100%;
                padding: 4px 0;
                border: none;
                outline: none;
                background-color:#00c400;
                margin-top: 20px;
                font-size: 16px;
                color: #fff;
                cursor: pointer;
            }
        }

        .products{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top:30px;
            margin-bottom:70px;
            position: relative;
            justify-content: center;
            align-items: center;


            .modal{
                display: flex;
                justify-content: flex-start;
                width: 80%;
                min-height:300px;
                margin: 0 auto;
                position: absolute;
                background-color: rgba(0,0,0,0.9);
                color: #fff;
                border-radius:25px;

                .modal-itens{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-top: 50px;

                    .success{
                        position: relative;
                        width: 90%;
                        background-color: #00f900;
                        color:#000;
                        padding: 2px 0;
                        display: flex;
                        justify-content: center;
                        margin-top: 15px;
                    }
                    
                    .description-product{
                        display: flex;
                        width: 100%;
                        margin-bottom:30px;
                        
                        form{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            font-size: 16px;
                            
                            label{
                                display: flex;
                                width: 80%;
                                margin-top: 15px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;

                                input{
                                    width: 80%;
                                    font-size: 16px;
                                    padding:3px 3px 3px 12px;
                                    border: none;
                                    outline: none;
                                    margin-top:10px;
                                }

                                textarea{
                                    width: 80%;
                                    height: 100px;
                                    font-size: 16px;
                                    padding:4px 4px 4px 12px;
                                    outline: none;
                                    border: none;
                                    margin-top:10px;
                                    resize:none;
                                }

                            }

                            .buttons-modal{
                                width: 100%;
                                display: flex;
                                justify-content:space-around;

                                button {
                                    margin-top:15px;
                                    padding: 4px 0;
                                    font-size: 16px;
                                    cursor: pointer;
                                    border: none;
                                    outline: none;
                                    border-radius: 4px;
                                    color: #fff;
                                    background-color:rgb(0,180,0);
                                    width: 27%;
                                }
    
                                .btn-close{
                                    background-color: rgb(255,0,0);
                                }
                            }
                        }
                    }
                }
            }

            .pizzas-item,.drinks-itens{
                width: 70%;
                display: flex;
                flex-direction: row;
                margin-top: 17px;
                border: 1px solid #000;
                background-color: rgba(0,0,0,0.2);

                img{
                    width: 170px;
                    border-right: 1px solid #f2f2f2;
                }
    
                .pizza-description, .drinks-description{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    margin-left: 10px;
                    padding: 5px ;

                    span{
                        margin-top: 7px;
                    }

                    button{
                        width: 40%;
                        border-radius: 7px;
                        margin-bottom: 12px;
                        margin-top:10px;
                        cursor: pointer;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        padding: 3px 0;
                        background-color:#00c400;
                        color: #fff;
                        &:hover{
                            background-color: #00b700;
                        }
                    }
                }
            }
        
        }

    }

    @media screen and (max-width: 770px) {

        .container {
        width: 100%;
        margin-top:30px;


        h2{
            margin-top:70px;
        }

        .select-class {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            position: relative;

            select {
                width: 90%;

            }

            button{
                width: 90%;
            }
        }

        .products{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top:30px;
            margin-bottom:70px;
            position: relative;
            justify-content: center;
            align-items: center;


            .modal{
                display: flex;
                justify-content: flex-start;
                width: 99%;
                min-height:300px;
                margin: 0 auto;
                position: absolute;
                background-color: rgba(0,0,0,0.9);
                color: #fff;
                border-radius:25px;

                .modal-itens{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-top: 50px;

                    .success{
                        position: relative;
                        width: 90%;
                        background-color: #00f900;
                        color:#000;
                        padding: 2px 0;
                        display: flex;
                        justify-content: center;
                        margin-top: 15px;
                    }
                    
                    .description-product{
                        display: flex;
                        width: 100%;
                        margin-bottom:30px;
                        
                        form{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            font-size: 16px;
                            
                            label{
                                display: flex;
                                width: 100%;
                                margin-top: 15px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;

                                input{
                                    width: 95%;
                                    font-size: 16px;
                                    padding:3px 3px 3px 12px;
                                    border: none;
                                    outline: none;
                                    margin-top:10px;
                                }

                                textarea{
                                    width: 95%;
                                    height: 100px;
                                    font-size: 16px;
                                    padding:4px 4px 4px 12px;
                                    outline: none;
                                    border: none;
                                    margin-top:10px;
                                    resize:none;
                                }

                            }

                            .buttons-modal{
                                width: 100%;
                                display: flex;
                                flex-direction: column;

                                button {
                                    margin-top:15px;
                                    padding: 4px 0;
                                    font-size: 16px;
                                    cursor: pointer;
                                    border: none;
                                    outline: none;
                                    border-radius: 4px;
                                    color: #fff;
                                    background-color:rgb(0,180,0);
                                    width: 80%;
                                }
    
                                .btn-close{
                                    background-color: rgb(255,0,0);
                                }
                            }
                        }
                    }
                }
            }

            .pizzas-item,.drinks-itens{
                width: 95%;
                display: flex;
                flex-direction: row;
                margin-top: 17px;
                border: 1px solid #000;
                background-color: rgba(0,0,0,0.2);

                img{
                    width: 170px;
                    border-right: 1px solid #f2f2f2;
                }
    
                .pizza-description, .drinks-description{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    margin-left: 0px;
                    padding: 5px 2px 2px 2px;

                    span{
                        margin-top: 7px;
                    }

                    button{
                        width: 100%;
                        border-radius: 7px;
                        margin-bottom: 12px;
                        margin-top:10px;
                        cursor: pointer;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        padding: 3px 0;
                        background-color:#00c400;
                        color: #fff;
                        &:hover{
                            background-color: #00b700;
                        }
                    }
                }
            }
        
        }

    }
    }
`;