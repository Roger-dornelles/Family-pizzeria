/* eslint-disable no-unused-vars */
import React,{ useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';

import { UpdateProductPage } from './styled';

const UpdateProducts = ()=>{
    const image = useRef();

    const [ warning, setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');
    const [ modal,setModal ] = useState(false);

    const [selected, setSelected] = useState('');
    const [ pizzas, setPizzas ] = useState([]);
    const [ drinks, setDrinks ] = useState([]);
    const [ product, setProduct ] = useState('');

    const [ name,setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');



    const handleSearch = async()=>{
        
        if(selected === 'pizzas'){
            setDrinks([])
            let result = await api.getPizzas();
            setPizzas(result);
            return;
        } else if(selected === 'bebidas'){
            setPizzas([])
            let results = await api.getDrinks();
            
            for(let i in results) {
                setDrinks(results[i]);
            }
            return;

        }else{

            setWarning('Selecione uma categoria de produto..');

            setTimeout(()=>{
                setWarning('');
            },2700)
        }

    };

    const handleUpdate = async(item)=>{
        setProduct(item)
        setModal(true);

    };

    const handleChangeUpdate = async (e)=>{
        e.preventDefault();

        if(selected === 'pizzas'){
            let updates = new FormData();

            if(name){
                updates.append('name',name)
            }
            if(description){
                updates.append('description',description)
            };

            if(price){
                updates.append('price',price)
            };

            if(image.current.files.length > 0){
                for(let i = 0;i < image.current.files.length;i++) {
                    updates.append('image',image.current.files[i])
                }
            }
            updates.append('id',product._id);

            let result = await api.updatePizza(updates);
            setSuccess(result);
        };

        if(selected === 'bebidas'){
            let update = new FormData();

            if(name){
                update.append('name',name);
            };

            if(price){
                update.append('price',price);
            };

            if(image.current.files.length > 0){
                for(let i = 0; i < image.current.files.length;i++){
                    update.append('image',image.current.files[i]);
                }
            }
            update.append('id',product._id);

            let result = await api.updateDrink(update);
            setSuccess(result);

        }
        setTimeout(() =>{
            setName('');
            setPrice('');
            setDescription('');
            setModal(false);
            window.location.reload();
        },2700)


    }

    const handleCloseModal = ()=>{
        setModal(false);
    }

    return(
        <UpdateProductPage>
            <div className="container">
                <h2>Editar Produto</h2>
                <div className="select-class">
                    {warning && <span className="warning">{warning}</span>}
                    <h3>Selecione a categoria do produto</h3>
                    <select onChange={e=>setSelected(e.target.value)}>
                        <option value="">Selecione a categoria</option>
                        <option value="pizzas">Pizzas</option>
                        <option value="bebidas">Bebidas</option>
                    </select>
                    <button onClick={handleSearch}>Visualizar</button>
                </div>

                <div className="products">

                    {modal &&
                    
                        <div className="modal">

                            <div className="modal-itens">
                                <h3>Editar Produto</h3>
                                {success && 
                                    <p className="success">{success}</p>
                                }

                                <div className="description-product">
                                    <form>
                                        <label>
                                            Produto: 
                                            <input type="text" placeholder={product.name} value={name} onChange={e=>setName(e.target.value)} />
                                        </label>
                                        {product.description && 
                                            <label>
                                                Descrição:
                                                <textarea placeholder={product.description} value={description} onChange={e=>setDescription(e.target.value)}/>
                                            </label>
                                        }
                                        < label>
                                            Preço:
                                            <input type="text" placeholder={`R$ ${product.price.toFixed(2)}`} value={price} onChange={e=>setPrice(e.target.value)} />
                                        </label>

                                        <label>
                                            Adicionar 1 imagem do produto:
                                            <input type="file" ref={image} />
                                        </label>
                                        <div className="buttons-modal">
                                            <button className='btn-close' onClick={handleCloseModal}>Cancelar</button>
                                            <button onClick={handleChangeUpdate}>Salvar Alteração</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                    {pizzas.map((item,index)=>{

                        return(
                            <div className='pizzas-item' key={index}>

                                <img src={item.image} alt={item.name} />
                                <div className="pizza-description">
                                    <span>{item.name}</span>
                                    <span>{item.description}</span>
                                    <span>Preço: R$ {item.price.toFixed(2)}</span>
                                    <button onClick={()=>handleUpdate(item)}>Atualizar</button>
                                </div>
                            </div>

                        )
                    })}

                    {drinks.map((item,index)=>{
                        return(
                            <div className="drinks-itens" key={index}>
                                <img src={item.image} alt={item.name} />
                                <div className="drinks-description">
                                    <span>{item.name}</span>
                                    <span>Preço: R$ {item.price.toFixed(2)}</span>
                                    <button onClick={()=>handleUpdate(item)}>Atualizar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to="/AddProducts">Voltar</Link>
            </div>
        </UpdateProductPage>
    )
};

export default UpdateProducts;