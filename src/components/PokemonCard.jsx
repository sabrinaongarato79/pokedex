import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setPokemonDetaill} from "../store/slices/pokemondetail.slice.js";

const PokemonCard = ({name, url}) => {

    const [infoPokemon, setInfoPokemon] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadInfoPokemon = async () => {
        const request = await fetch(url);
        const data = await request.json();
        setInfoPokemon(data);
    }

    useEffect(() => {
        loadInfoPokemon();
    }, [url])

    if (!Object.keys(infoPokemon).length) {
        return <><span>Cargando...</span></>
    }

    const getStats = () => {
        let response = {};
        for (const stats of infoPokemon.stats) {
            response[stats.stat.name] = stats;
        }
        return response;
    }

    const goToPokemonDetail = () => {
        dispatch(setPokemonDetaill(infoPokemon));
        navigate(`/pokemon/${infoPokemon.id}`);
    }

    return <a className="pokemon-card" onClick={goToPokemonDetail}>
        <div className="card-img">
            <img src={infoPokemon.sprites.other['official-artwork'].front_default}/>
        </div>
        <div className="card-body">
            <div className="card-body-header">
                <h2>{name}</h2>
                <h4>
                    {infoPokemon.types.map(item => {
                        return item.type.name
                    }).join(' / ')}
                </h4>
                <h5>Tipo</h5>
            </div>
            <div className="card-body-stats">
                <div className="stats">
                    <span>HP</span>
                    <strong>{getStats().hp.base_stat}</strong>
                </div>
                <div className="stats">
                    <span>ATAQUE</span>
                    <strong>{getStats().attack.base_stat}</strong>
                </div>
                <div className="stats">
                    <span>DEFENSA</span>
                    <strong>{getStats().defense.base_stat}</strong>
                </div>
                <div className="stats">
                    <span>VELOCIDAD</span>
                    <strong>{getStats().speed.base_stat}</strong>
                </div>
            </div>
        </div>
    </a>;
}

export default PokemonCard;
