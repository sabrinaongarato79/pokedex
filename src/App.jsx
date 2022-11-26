import {HashRouter, Route, Routes} from 'react-router-dom';

import './App.css'

import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import Pokemon from "./pages/Pokemon";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const App = () => {
    return <>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path='/pokedex' element={<Pokedex/>}/>
                    <Route path='/pokemon/:id' element={<Pokemon/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </>
}

export default App
