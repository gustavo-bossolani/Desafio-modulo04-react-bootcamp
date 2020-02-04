import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/facebook-logo.png';
import profile from '../../assets/profile.png';

import './Header.css';

function Header() {
    return (
        <nav>
            <img src={logo} alt="brand-logo" id="brand-logo"/>
            <div id="profile-div">
                <a href="#" id="profile-text">Meu perfil</a>
                <img src={profile} alt="profile" id="profile-logo"/>
            </div>
        </nav>
    );
}

export default Header;