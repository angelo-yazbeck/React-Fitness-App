import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu borderless inverted style={{ marginBottom: 0 }}>
      <Menu.Item header style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Fitness App
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Home" />
        <Menu.Item name="About" />
        <Menu.Item name="Contact" />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
