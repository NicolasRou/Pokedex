import { Usefetch, DatosText } from '../Api/Usefetch'
import './detalles.css'
import Weight from '../../Img/Weight.svg'
import Height from '../../Img/Height.svg'
import {useEffect} from 'react'
import { useState } from 'react'

const Detalles = ({url}) => {
    const pokemons = Usefetch(url)
    const {loading, data} = pokemons
    const datosText = DatosText(url); 
    const [datosAPI, setDatosAPI] = useState({cargando: true, datos: {}})
    // setDatosAPI(datosText)
    // console.log(datosAPI)

return (
    <div>
        {loading? <h1>Cargando2</h1> :
    <main className={`${'main'} card${data.types[0].type.name}`}>
        
            <header className='header-modal'>
                <h1>{data.name}</h1>
                <h3>#{data.id}</h3>
            </header>
            <div className='img-card'>
                <img src={data.sprites.other.dream_world.front_default} alt="Pokemon" />
            </div>
        <section className='container_bottom'>
            <div className='types'>
                <h4>{data.types.map((tipo, index) =>
                { return ( <p className={`card${tipo.type.name}`}>{tipo.type.name}</p> )
                 })} </h4>
                
            </div>
            <div className='about'>
                <h2 className={`p_${data.types[0].type.name}`}>About</h2>
            </div>
            <section className='body'>
                <div className='weight'>
                    <div>
                        <img src={Weight} alt="" />
                        <p>{data.weight}00gr</p>
                    </div>
                    <h5>Weight</h5>
                </div>
                <div className='height'>
                    <div>
                        <img src={Height} alt="" />
                        <p>{data.height}0cm</p>
                    </div>
                    <h5>Height</h5>
                </div>
                <div className='moves'>
                    <p>{data.abilities.map((moves, index) => {
                        return (<p>{moves.ability.name}</p> )
                    })}</p>
                    
                    <h5>Moves</h5>
                </div>
            </section>

            <section >
                <h2 className={`p_${data.types[0].type.name}`}>Base Stats</h2>
                <article className='base-stats'>
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>HP</p>
                            <p className='stats_value'>{data.stats[0].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[0].base_stat}}></div>
                        </div>
                    </div> 
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>ATK</p>
                            <p className='stats_value'>{data.stats[1].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[1].base_stat}} ></div>
                        </div>
                    </div>
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>DEF</p>
                            <p className='stats_value'>{data.stats[2].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[2].base_stat}}></div>
                        </div>
                    </div>
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>SATK</p>
                            <p className='stats_value'>{data.stats[3].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[3].base_stat}}></div>
                        </div>
                    </div>
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>SDEF</p>
                            <p className='stats_value'>{data.stats[4].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[4].base_stat}}></div>
                        </div>
                    </div>
                    <div className='stats'>
                        <div className='stats__item'>
                            <p className='stats-name'>SPD</p>
                            <p className='stats_value'>{data.stats[5].base_stat}</p>
                            <div className={`${'stats__bar'} card${data.types[0].type.name}`}
                            style={{width: data.stats[5].base_stat}}></div>
                        </div>
                    </div>
                </article>
            </section>
            </section>
    </main>
    }
    </div>
    )
}
export default Detalles