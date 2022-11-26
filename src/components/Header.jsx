
import imagen from '../assets/logo.png'
import circle from '../assets/circle.png'

const Header = () => {
    return <header>
        <div className='header-red'>
            <img  className='header-logo'  src={imagen} alt="Logo" />
        </div>
        <div className='header-black'>
            <img className='header-circle' src={circle} alt="Logo" />
        </div>
    </header>;
}
 
export default Header;