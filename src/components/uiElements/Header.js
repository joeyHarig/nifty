import React from 'react';
import '../../scss/header.scss';

const Header = props => {
    return (
        <div className="header" >
            <h2>{ props.text }</h2>
            {props.withButton && (
                <a href="">See All</a>
            )}
        </div>
    );
};

export default Header;