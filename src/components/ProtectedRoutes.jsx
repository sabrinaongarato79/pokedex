import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoutes = () => {
    const isLogged = useSelector(state => state.username);
    if (isLogged) {
        return <Outlet/>
    } else {
        return <Navigate to={'/'}/>
    }
}

export default ProtectedRoutes;
