import styled from 'styled-components';

export const HomePage = styled.div`
    width: 100%;
    height: 100vh;
    color:#fff;
    flex-direction: column;
    display: flex;

    
    h1{
        display: flex;
        margin-top: 150px;
        line-height:30px;
        width: 35%;
        font-size:27px;
        font-weight:lighter;
    }

    @media screen and (max-width: 1024px) {

    h1{
        display: flex;
        margin-top: 210px;
        line-height:30px;
        width: 70%;
        font-size:27px;
        font-weight:lighter;
    }

    }

    @media screen and (max-width: 770px) {

        h1{
        display: flex;
        margin-top: 210px;
        line-height:30px;
        width: 90%;
        font-size:27px;
        font-weight:lighter;
    }

    }
    
`;