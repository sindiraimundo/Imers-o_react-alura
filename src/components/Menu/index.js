import React from 'react';
import LogoDevs from '../LogoDevsFlix';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <LogoDevs />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;