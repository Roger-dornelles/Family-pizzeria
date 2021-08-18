import styled from 'styled-components';

export const HeaderPage = styled.div`
    position:fixed;
    width:100%;
    .menu{
        width: 100%;
        height: 70px;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0, 0, 0,0.5);
        color:#fff;
        
        .logo{

            >a{
                text-decoration: none;
                color:#fff;
                font-size: 22px;
            }
        }
    
        nav{
            display: flex;
            ul,li{
                justify-content: space-around;
                display: flex;
            }
    
            a{
                text-decoration:none;
                margin-left: 15px;
                color:#fff;

                &:hover{
                    color:#cfcfcf;
                    border-bottom: 1px solid #cfcfcf;
                }
            }
    
        }
    }

`;