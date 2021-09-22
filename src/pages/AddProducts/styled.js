import styled from 'styled-components';

export const AddProductsPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f3f3f3;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    
    .container {
        margin-top: 180px;
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: #d6d6d6;
        border-radius: 12px;

        h2{
            margin-bottom: 30px;
            margin-top: 40px;
        }

        form{
            width: 50%;
            display: flex;
            flex-direction: column;
            position: relative;

            .warning, .success {
                display: flex;
                position: absolute;
                width: 100%;
                justify-content: center;
                padding: 3px 0;
                background-color: #ffff00;

            }

            .success {
                background-color: #37ff37;
            }

            label{
                display: flex;
                flex-direction: column;
                margin:7px 0;

                select{
                    border:none;
                    outline: none;
                    width: 40%;
                    margin:10px 0;
                    font-size: 15px;
                    cursor: pointer;
                }

                input{
                    width:100%;
                    padding: 3px 0;
                    border:none;
                    border-bottom: 1px solid #2e2e2e;
                    background-color: #d6d6d6;
                    outline: none;
                    font-size:17px;
                    text-align: center;
                }

                input[type="file"]{
                    border:none;
                }


                textarea{
                    background-color: #d6d6d6;
                    width: 99%;
                    font-size:17px;
                    height: 90px;
                    margin-top: 10px;
                    outline: none;
                    padding: 5px;
                    resize: none;
                    border-color: #2e2e2e;
                }

            }
            .buttons {
                display: flex;
                justify-content:space-around;
                width: 100%;
                margin-bottom: 80px;
                margin-top: 20px;

                button{
                    width: 37%;
                    cursor: pointer;
                    padding: 3px 0;
                    background-color: #ff5151;
                    outline:none;
                    border:none;
                    font-size: 18px;
                    color:#fff;
                    border-radius: 4px;

                    &:hover{
                        background-color: #ff2121;
                    }
                }
                .save{
                    background-color: #00e600;

                    &:hover{
                        background-color: #00c400;
                    }
                }
            }
        }
        .buttons-routes{
            width: 100%;
            display: flex;
            justify-content:space-around;
            margin-bottom: 20px;

            a{
                width: 25%;
                padding: 4px 0;
                font-size: 16px;
                background-color: #0080ff;
                color:#fff;
                text-align: center;
                text-decoration: none;
                border-radius: 4px;
                
            }
        }
    }


`;