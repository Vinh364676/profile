import React, { useState } from 'react'
import './header.scss';
import { Button, Drawer } from 'antd';
import { Link } from "react-scroll";

import { MenuOutlined } from '@ant-design/icons';
import UseRespon from '../../hook/useRessponsive';

function HeaderLayout() {
  const { isTablet, isMobile } = UseRespon();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const menuItems = [
    { label: 'Profile', to: 'profile', duration: 300, offset: -50 },
    { label: 'About', to: 'about', duration: 300, offset: -120 },
    { label: 'Skill', to: 'skill', duration: 600, offset: -120 },
    { label: 'Learning', to: 'experience', duration: 600, offset: -120 },
    { label: 'Contact', to: 'contact', duration: 600, offset: -120 },
  ];
  return (
    
 <div className='header'>
   
      {isMobile ? (
        <div className='header__mobile'>
          <MenuOutlined  className=''onClick={showDrawer}/>
        </div>
      ) : (
        <div className='header'>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} spy={true} smooth={true} duration={item.duration} offset={item.offset}>
              <Button className='header__button'>{item.label}</Button>
            </Link>
          ))}
        </div>
      )}
      <Drawer onClose={onClose} open={open} className='menu'>
    {menuItems.map((item, index) => (
          <Link key={index} to={item.to} spy={true} smooth={true} duration={item.duration} offset={item.offset}>
            <div className='menu__container'>
            <Button className='menu__container__button' onClick={onClose} >{item.label}</Button>
            </div>
          </Link>
        ))}
    </Drawer>
    </div>
   
  
  )
}


export default HeaderLayout
