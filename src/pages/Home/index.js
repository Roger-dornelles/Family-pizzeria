import React from 'react';
import {HomePage } from './styled';

import img from '../../assets/image/imghome.svg';

import Header from '../../components/Header';

const Home = ()=>{

    const background = {
        backgroundImage: `url(${img})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return(

        <HomePage style={background} >
            <Header />
            <h1>
                Ha mais de 12 anos no mercado de delivery,
                nossas pizzas são produzidas com produtos selecionados e assadas no forno
                a lenha para um sabor irresistivel.
            </h1>
        </HomePage>
    )
};

export default Home;