import './Navigation.css';
import Button from '../button/Button.jsx';
import logoMedium from '../../assets/logo-medium.png';
import {Link, useNavigate} from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="main-navigation outer-content-container">
            <div className="inner-nav-container">
                <Button type="button" variant="invisible" onClick={() => navigate('/')}>
                    <img src={logoMedium} alt="Logo that links to home page"/>
                </Button>
                <ul className="main-navigation-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Alle posts</Link></li>
                    <li><Link to="/new">Nieuwe post maken</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;