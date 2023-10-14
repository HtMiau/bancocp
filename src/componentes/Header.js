import Styles from './Header.module.css'
import logo from './img/logo.png'
import React, { useState } from 'react';

function Header (){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return(
        <header>
            <div className={Styles.header}>
                <div className={Styles.logo}></div>
                <ul className={Styles.linkes}>
                    <li className={Styles.entrar}>Entrar</li>
                    <li className={Styles.cadastre}>Cadastre-se</li>
                    <button onClick={toggleMenu}><svg className={Styles.hamburguer} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg></button>
                </ul>
            </div>

            <div className={`${Styles.mobilemenu} ${isMenuOpen ? Styles.open : ''}`}>
            <ul>
                <li className={Styles.navitem}><a href="#sobre" className={Styles.navlink}>Serviços</a></li>
                <li className={Styles.navitem}><a href="#trabalho" className={Styles.navlink}>Vantagens</a></li>
                <li className={Styles.navitem}><a href="#dirfooter" className={Styles.navlink}>Aplicativo</a></li>
                <li className={Styles.navitem}><a href="#dirfooter" className={Styles.navlinks}>Área do Cliente</a></li>
            </ul>
            </div>

        </header>
    )

}

export default Header