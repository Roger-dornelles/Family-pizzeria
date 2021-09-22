/* eslint-disable jsx-a11y/alt-text */
import React,{ useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';

import { DeleteProductPage } from './styled';

const DeleteProducts = ()=>{

    const [warning,setWarning] = useState('');
    const [ success, setSuccess] = useState('');

    const [select,setSelect ] = useState('');
    const [pizzas,setPizzas] = useState([]);
    const [drinks,setDrinks] = useState([]);


    const handleSelectProduct = async()=>{
        
        if(select === 'pizzas'){
            setDrinks([]);
            let json = await api.getPizzas();
            setPizzas(json);
        
        }else if(select === 'bebidas'){
            setPizzas([]);
            let json = await api.getDrinks();

            for(let i in json){
                setDrinks(json[i]);
            }

        }else{
            setWarning('Selecione uma categoria de produto..');
            setTimeout(()=>{
                setWarning('');
            },2700)
        }

    }

    const handleDeletePizza = async(item)=>{

        if(select === 'pizzas'){

            let id = item._id;
            let json = await api.deletePizza(id);
            setSuccess(json);
            
            setTimeout(()=>{
                window.location.reload();
            },2700);
        }

        

    }

    const handleDeleteDrink = async(item)=>{

        if(select === 'bebidas'){

            let id = item._id;
            let json = await api.deleteDrink(id);
            setSuccess(json);

            setTimeout(()=>{
                window.location.reload();
            },2700);
        }

    }



    return (
        <DeleteProductPage>
            <div className="container">

                <h2>Excluir Produto</h2>
                <div className="select-product">
                    {warning && <span className="warning">{warning}</span>}
                    {success && <p className="success">{success}</p>}
                    <h3>Selecione a categoria do produto...</h3>
                    <select onChange={e=>setSelect(e.target.value)}>
                        <option value="">Selecione a categoria</option>
                        <option value="pizzas" >Pizzas</option>
                        <option value="bebidas" >Bebidas</option>
                    </select>
                    <button onClick={handleSelectProduct}>Visualizar</button>
                </div>

                <div className="product-list">
                    {pizzas.map((item,index)=>{
                        return(
                            <div className="pizzas-itens" key={index}>
                                <img id={item._id} src={item.image} alt={item.name} />
                                <div className="pizza-description">
                                    <span>{item.name}</span>
                                    <span>{item.description}</span>
                                    <span>Preço: R$ {item.price.toFixed(2)}</span>
                                    <button onClick={()=>handleDeletePizza(item)}>Excluir</button>
                                </div>
                            </div>
                        )
                    })}

                    {drinks.map((item,index)=>{
                        return(
                            <div className="drink-itens" key={index}>
                                <img id={item._id} src={item.image} alt={item.name} />
                                <div className="drink-description">
                                    <span>{item.name}</span>
                                    <span>{item.description}</span>
                                    <span>Preço: R$ {item.price.toFixed(2)}</span>
                                    <button onClick={()=>handleDeleteDrink(item)}>Excluir</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to="/">Voltar</Link>
            </div>
        </DeleteProductPage>
    )
}

export default DeleteProducts;