import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/images/ApnaTV.svg";
import { ReactComponent as search } from "../../assets/icon/Vector.svg";
import { ReactComponent as notification } from "../../assets/icon/qon.svg";

const Contanier = styled.header`
  width: 100%;
  position: fixed;
    .nav-items-menu {
      flex-direction: column;
      
    }
    `;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 120px;
  margin: auto;
  padding: 30px 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  
 
  .menu {
    display: none;
  }
  @media (max-width: 1300px) {
    padding: 30px 46px;
    height: 110px;
  }
  @media (max-width: 1050px) {
    padding: 30px 36px;
    height: 90px;
    .nav-left {
      display: none;
    }

    .menu {
      display: block;
    }
    .menu svg {
      fill: #fff;
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 1200px) {
    .nav-raght {
      display: none;
      height: 100px;
    }
  }
  @media (max-width: 767px) {
    padding: 20px 26px;
    height: 80px;
    grid-template-columns: auto 0.5fr 1fr;
    gap: 20px;
  }
  @media (max-width: 428px) {
    padding: 15px 15px;
    gap: 15px;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled(logo)`
 @media (max-width: 767px) {
    width: 100px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 1300px) {
    gap: 35px;
  }
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 767px) { 
    gap: 20px;
  }
  @media (max-width: 428px) {
    gap: 15px;
  }
`;
NavItems.NavItem = styled.li`
  list-style-type: none;
`;
NavItems.NavItem.NavLink = styled.a`
  text-decoration: none;
`;
const Search = styled(search)``;
const Notification = styled(notification)``;

export { Contanier, Wrapper, Column, Logo, NavItems, Notification, Search };
