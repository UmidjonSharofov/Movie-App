import React, { useEffect, useState } from 'react'
import { Contanier, Wrapper, Column, Logo, NavItems, Search, Notification } from './satle'
import { HiMenu } from 'react-icons/hi'
import { Drawer } from 'antd'
import { AiOutlineClose } from 'react-icons/ai'
import SearchModal from '../Modal'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [scrolled,setScrolled]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(()=>{
     const hendleScrol=()=>{
      if(window.scrollY){
         setScrolled(true)
      }else{
         setScrolled(false)
      }
     }
     window.addEventListener('scroll',hendleScrol)
     return ()=>{
      window.removeEventListener('scroll',hendleScrol)
     }
  },[])
  // Menu
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  //  search Bar 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  return (
    <Contanier style={{backgroundColor: scrolled && '#222'}}>
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
   {/* search Bar */}
   <SearchModal handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen} />
   
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
              <Search onClick={showModal}  />
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