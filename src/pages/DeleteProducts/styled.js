import  styled from 'styled-components';

export const DeleteProductPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;

    .container {
        width: 50%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 70px;
        margin-bottom:50px;
        border-radius: 12px;
        background-color: #d3d3d3;

        h2{
            margin-top:100px;
            margin-bottom:30px;
        }

        .select-product {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;

            span,.success{
                position: absolute;
                display: flex;
                justify-content: center;
                width: 100%;
                padding: 3px 0;
                background-color: #ffff62;
            }

            .success{
                background-color: #00ce00;
            }
            select{
                width: 80%;
                margin-top:20px;
                outline: none;
                border: none;
                font-size:17px;
            }

            button{
                width: 80%;
                padding: 3px 0;
                font-size:17px;
                margin-top:25px;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background: #fff;
            }
        }

        .product-list{
            width: 50%;
            padding: 30px 0;;

            .pizzas-itens,.drink-itens{
                display: flex;
                margin-top:20px;
                background-color: rgba(0,0,0,0.4);

                img{
                    width: 150px;
                    border-right: 2px solid #e6e6e6;
                }
    
                .pizza-description,.drink-description{
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    margin-left: 10px;

                    span{
                        padding:5px 0;
                    }
                }
            }


        }
    }
`;