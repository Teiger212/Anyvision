import React from 'react';
import './Header.scss'
import logo from '../../assets/logo.png';

const header = (props) => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
        </div>
    )
}

export default header;
