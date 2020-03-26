import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../../assets/icons/Icon';

import '../../scss/nav-item.scss';

const NavItem = props => {
    const { link, icon } = props;
    return (
        <li className="nav-item">
            <NavLink to={`/${link}`} >
                <Icon icon={ icon }></Icon>
                
                { icon !== 'niftyLogo' && <div className="underline"/> }
            </NavLink>
        </li>
  );
}

export default NavItem;