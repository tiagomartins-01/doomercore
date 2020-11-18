import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Buttonmenu from '../ButtonMenu';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="doomercore"/>
            </Link>

            <Buttonmenu as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
            </Buttonmenu>
        </nav>
    );
}

export default Menu;