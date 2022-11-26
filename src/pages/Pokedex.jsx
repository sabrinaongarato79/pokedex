import Header from '../components/Header'
import InputGroup from '../components/InputGroup';
import Pagination, {TOTAL_POKEMONS} from '../components/Pagination';
import PokemonCard from '../components/PokemonCard';
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";


const Pokedex = () => {

    const inputRef = useRef();
    const selectRef = useRef();

    const username = useSelector(state => state.username)
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);

    const [typePokemons, setTypePokemons] = useState([]);

    const [topPokemos, setTopPokemos] = useState([])

    const loadPokemons = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`);
        const data = await request.json();
        setPokemons(data.results);
        setPage(1);
    }

    const loadTypePokemons = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/type/`);
        const data = await request.json();
        setTypePokemons(data.results)
    }

    useEffect(() => {
        loadPokemons();
        loadTypePokemons();
    }, [])

    const renderPokemons = () => {
        const P = page * 20;
        const _currentPokemons = filterPokemos().slice(P - 20,  P);
        setTopPokemos(_currentPokemons)
    }

    useEffect(() => {
        renderPokemons();
    }, [page])

    const filterPokemos = () => {

        let myPokemons = pokemons;

        if (inputRef.current && inputRef.current.value) {
            myPokemons = myPokemons.filter((item) => {
                const searchValue = inputRef.current.value.toLowerCase();
                const pokeName = item.name.toLowerCase();
                return pokeName.includes(searchValue);
            });
        }

        if (selectRef.current && selectRef.current.value) {
            myPokemons = myPokemons.filter((item) => {
                const searchValue = selectRef.current.value.toLowerCase();
                // const pokeTypes = item.types.map(item => item.type.name);
                return true;
            });
        }

        return myPokemons
    }

    const handleSearch = () => {
        renderPokemons();
    }

    return <>
        <Header/>
        <div className='container'>

            <h2 className='title-pokedex'>
                <span className='text-red'>Bienvenido {username},</span> aquí podrás encontrar tu pokemón favorito
            </h2>

            <div className="content-fields">
                <InputGroup placeholder={"Busca un pokemón"} btnText={"Buscar"} iRef={inputRef} onClick={handleSearch}/>
                <select className='input-select' ref={selectRef}>
                    <option value="">- All -</option>
                    {
                        typePokemons.map(item => {
                            return <option value={item.name} key={item.name}>{item.name}</option>
                        })
                    }
                </select>
            </div>

            <div className='pokemon-card-list'>
                {
                    topPokemos.map((data, k) => {
                        return <PokemonCard name={data.name} url={data.url} key={k}/>
                    })
                }
            </div>

            <Pagination page={page} setPage={setPage} total={filterPokemos().length}/>

        </div>

    </>;
}

export default Pokedex;
