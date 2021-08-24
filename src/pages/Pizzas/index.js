import React,{useState} from 'react';
import Modal from 'react-modal';

import { PizzasPage } from './styled';

// components
import Header from '../../components/Header';

//helpers
import {isLogged} from '../../helpers/AuthHandler';


const customStyles = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        width: '30%',
        height: '50%',
        backgroundColor:'rgba(0, 0,0,0.5)',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const Pizzas = ()=>{
    const [modalIsOpen, setIsOpen] = useState(false);
    const logged = isLogged();

    function openModal() {
    setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (

        <PizzasPage>
            
            <Header className="header"/>

            <div className="container">
                {logged && 
                    <button onClick={openModal}>Cart</button>
                }
                <div className="modal">
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <button onClick={closeModal} className="close">close</button>
                        <h2>Carrinho</h2>
                        <div>Suas Pizzas</div>
                        <form>
                            <input />
                        
                        </form>
                    </Modal>
                </div>
                    
            </div>
        </PizzasPage>
    )
};

export default Pizzas;