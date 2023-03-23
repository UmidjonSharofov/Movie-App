import React, { useState } from 'react'
import { Contanier, Wrapper, Column, Logo, NavItems, Search, Notification } from './satle'
import { HiMenu } from 'react-icons/hi'
import { Drawer } from 'antd'
import { AiOutlineClose } from 'react-icons/ai'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <Contanier>
      <Drawer title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <span  onClick={onClose}>
          <AiOutlineClose />
        </span>
        <NavItems className='nav-items-menu'>
          <NavItems.NavItem onClick={onClose}><NavItems.NavItem.NavLink className="nav-link nav-link-menu" href='#Movies'>Movies</NavItems.NavItem.NavLink></NavItems.NavItem>
          <NavItems.NavItem onClick={onClose}><NavItems.NavItem.NavLink className="nav-link nav-link-menu" href='#TV Shows'>TV Shows</NavItems.NavItem.NavLink></NavItems.NavItem>
          <NavItems.NavItem onClick={onClose}><NavItems.NavItem.NavLink className="nav-link nav-link-menu" href='#TV Shows'>TV Shows</NavItems.NavItem.NavLink></NavItems.NavItem>
        </NavItems>
      </Drawer>

      <Wrapper>
        <Column>
          <span className='menu' onClick={showDrawer}>
            <HiMenu />
          </span>
          <NavItems className='nav-left'>
            <NavItems.NavItem><NavItems.NavItem.NavLink className="nav-link" href='#Movies'>Movies</NavItems.NavItem.NavLink></NavItems.NavItem>
            <NavItems.NavItem><NavItems.NavItem.NavLink className="nav-link" href='#TV Shows'>TV Shows</NavItems.NavItem.NavLink></NavItems.NavItem>
            <NavItems.NavItem><NavItems.NavItem.NavLink className="nav-link" href='#TV Shows'>TV Shows</NavItems.NavItem.NavLink></NavItems.NavItem>
          </NavItems>
        </Column>
        <Column>
          <Logo></Logo>
        </Column>
        <Column>
          <NavItems className='nav-raght'>
            <NavItems.NavItem>
              <Search />
            </NavItems.NavItem>
            <NavItems.NavItem>
              <Notification />
            </NavItems.NavItem>
            <NavItems.NavItem>
              <NavItems.NavItem.NavLink className="nav-link">Sign Up</NavItems.NavItem.NavLink>
            </NavItems.NavItem>
          </NavItems>

        </Column>
      </Wrapper>
    </Contanier>
  )
}

export default Navbar