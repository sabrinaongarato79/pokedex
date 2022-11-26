import imagen from '../assets/logo.png'
import circle from '../assets/circle.png'
import InputGroup from '../components/InputGroup';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {setUsername} from "../store/slices/username.slice.js";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setUsername(inputRef.current.value));
        navigate('/pokedex');
    }

    return <div className='container-login'>
        <img src={imagen} alt="Logo"/>
        <h1>¡Hola entrenador!</h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
        <InputGroup
            placeholder={"Tu nombre..."}
            btnText={"Comenzar"}
            iRef={inputRef}
            onClick={handleClick}
        />
        <footer>
            <div className='footer-red'>
                <img className='footer-circle' src={circle} alt="Logo"/>
            </div>
            <div className='footer-black'>&nbsp;</div>
        </footer>
    </div>
}

export default Login;
