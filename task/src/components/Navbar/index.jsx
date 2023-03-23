import React from 'react'
import { Contanier, Wrapper, Column, Logo, NavItems, Search, Notification } from './satle'
import { HiMenu } from 'react-icons/hi'


const Navbar = () => {
  return (
    <Contanier>
      <Wrapper>
        <Column>
          <span className='menu'>
            <HiMenu />
          </span>
          <NavItems>
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