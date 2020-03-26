import React from 'react';
import NavItem from './NavItem';
import '../../scss/footer.scss';

const Footer = () => {
    return (
      <footer> 
        <ul>
          <NavItem icon="niftyLogo" link="" />
          <li>
              <p>
                  Legal Statement
              </p>
          </li>
        </ul>
      </footer>
  );
};

export default Footer;