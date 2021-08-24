import React from 'react';
import {useHistory} from 'react-router-dom';
import { AboutPage } from './styled';

const About = ()=>{
    const history = useHistory();

    const handleClose = ()=>{
        history.replace('/');
    }

    return (
        <AboutPage >
            <div className="container">
                <button onClick={handleClose}>X</button>

                <div className='description'>
                    <h2>Quem Somos.</h2>
                    <p>
                        Iniciamos nossas atividades no ano de 2009 após uma reunião de familia onde queriamos fazer algo
                        onde todos da familia pudessem fazer parte alcançando os objetivos que
                        ali foram almejados desde o seu surgimento em meio a incertezas e medo de que não desse certo.
                        Desde então tivemos muitas conquistas mas em meio a toda euforia de conseguirmos alcançar nossas
                        metas tivemos muitos aprendizados com nossos erros mas acima de
                        tudo um grande aprendizado é manter o cliente sempre satisfeito com nossas pizzas.
                    </p>
                </div>

                <div className="description-info">
                        <h2>Nossos objetivos principais.</h2>

                    <div className="info">
                        <div className="card">
                            <span>Compromisso</span>
                            <p>
                                Buscamos manter um compromisso com nossos clientes em oferecer uma pizza com produtos de
                                qualidade para que o cliente tenha uma experiencia além da sua expectativa.
                            </p>
                        </div>

                        <div className="card">
                            <span>Qualidade</span>
                            <p>
                                Nossos produtos mantem um rigoroso padrão de qualidade onde visamos manter a ética sobre os
                                nossos produtos oferecidos, assim agregando um maior nivel de qualidade aos pedidos do cliente.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </AboutPage>
    )
};

export default About;