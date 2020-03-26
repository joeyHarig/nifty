import React from 'react';
import NavItem from './NavItem';
import '../../scss/navigation.scss';

const Navigation = () => {
    const toTop = () => { window.scrollTo(0, 0) };
    
    return (
      <nav onClick={ toTop }> 
        <ul>
          <NavItem icon="niftyLogo" link="" />
          <NavItem icon="bag" link="items" />
          <NavItem icon="map" link="map" />
          <NavItem icon="ar" />
          <NavItem icon="more"/>
        </ul>
      </nav>
  );
};

export default Navigation;