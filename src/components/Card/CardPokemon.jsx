// Crearemos la estructura básica
// Importamos el Usefetch para extraer la informacion de la url que tiene cada pokemon
import { Usefetch } from '../Api/Usefetch'
import './cardPokemon.css'
import Detalles from './Detalles'
import Modal from './Modal'
import { useState } from 'react'


export const CardPokemon = ({url}) => {
    const estado = Usefetch(url)
    const {loading, data} = estado
    // Las siguientes constantes y funciones son para darle funcionalidad a la ventana modal
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
      };
    
      const hideModal = () => {
        setShow(false);
      };
    return (
        // Este componente CardPokemon es el encargado de mostrar la info de cada pokemon
        // La url que se le está poasando a este componente es la que tiene cada uno de los pokemon, que da un objeto con sus datos
        <div className='container-menu'>
            {loading? <h1>Cargando</h1> : 
            
            <div className={`${'container'} ${data.types[0].type.name}`}>
                <div className='id'>
                    <h2>#{data.id}</h2>  
                </div>
                <div className='img'> 
                    <img src={data.sprites.other.dream_world.front_default} alt="pokemon" className='imgPokemon' />
                </div>
                {/* Modal nos mostrará la ventana, llamando al componente Detalles que es donde se encuentra toda la información */}
                <Modal show={show} handleClose={hideModal}>
                    <Detalles url={url}/>
                </Modal>
                <section className='name'> 
                    <button className='more' onClick={showModal}>{data.forms[0].name}</button>
                </section>
                
            </div>
            }
        </div>
    )
}
