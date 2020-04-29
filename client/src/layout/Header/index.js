import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './header.css';

function HeaderNav() {
  return (
    <div style={{ width: '100%' }}>
      <Menu theme='dark' mode='horizontal'>
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
      </Menu>
    </div>
  );
}

export default HeaderNav;
