import React, { Fragment } from 'react';
import LogoDevs from '../LogoDevsFlix';
import Button from '../Button';
import './menu.css';

function Menu() {
    return (
        <Fragment>

            <nav className="Menu">
                <a href="/">
                    <LogoDevs />
                </a>
                <Button as="a" className="ButtonLink" href="/">
                    Novo vídeo
            </Button>
            </nav>

        </Fragment>


    );
}

export default Menu;