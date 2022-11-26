import Header from "../components/Header.jsx";

import TitleStats from "../components/TitleStats.jsx";
import {useSelector} from "react-redux";

const Pokemon = () => {

    const infoPokemon = useSelector(state => state.pokemondetaill)

    const ProgresBarr = ({name, value}) => {

        const percentage = parseInt((value * 100) / 150 );
        return <div className='progress-bar'>
            <div className="progress-title">
                <span>{name}:</span>
                <span>{value}/150</span>
            </div>
            <div className="progress-bar-item">
                <div className="bar" style={{ width: `${percentage}%` }}>&nbsp;</div>
            </div>
        </div>
    }

    const getStats = () => {
        let response = {};
        for (const stats of infoPokemon.stats) {
            response[stats.stat.name] = stats;
        }
        return response;
    }

    return <>
        <Header/>
        <div className="container pokemon-detail">

            <div className="container-card">
                <div className="pokemon-detail-img">
                    <img src={infoPokemon.sprites.other['official-artwork'].front_default}/>
                </div>
                <div className="container-card-body">
                    <div className="pokemon-number">
                        <h1>#{infoPokemon.id}</h1>
                    </div>
                    <div className="title">
                        <span>{infoPokemon.name}</span>
                    </div>
                    <div className="title-legend">
                        <div className="item">
                            <span>Peso</span>
                            <strong>{infoPokemon.weight}</strong>
                        </div>
                        <div className="item">
                            <span>Altura</span>
                            <strong>{infoPokemon.height}</strong>
                        </div>
                    </div>
                    <div className="abilities">
                        <div className="item">
                            <span className="abilities-title">Tipo</span>
                            <div className="info">
                                {
                                    infoPokemon.types.map(item => {
                                        return <span key={item.type.name}>{item.type.name}</span>
                                    })
                                }
                            </div>
                        </div>
                        <div className="item">
                            <span className="abilities-title">Habilidades</span>
                            <div className="info">
                                {
                                    infoPokemon.abilities.map(item => {
                                        return <span key={item.ability.name}>{item.ability.name}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <TitleStats label={'Stats'} />

                    <div className="stats-data">
                        <ProgresBarr name="HP"  value={getStats().hp.base_stat}/>
                        <ProgresBarr name="Ataque" value={getStats().attack.base_stat}/>
                        <ProgresBarr name="Defensa" value={getStats().defense.base_stat}/>
                        <ProgresBarr name="Velocidad" value={getStats().speed.base_stat}/>
                    </div>

                </div>
            </div>

            <div className="container-card">
                <div className="container-card-body">

                <TitleStats label={'Movements'} />
                <div className="content-moves">
                    {
                        infoPokemon.moves.map(item => {
                            return <span className="item" key={item.move.name}>{item.move.name}</span>
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    </>
}

export default Pokemon;


