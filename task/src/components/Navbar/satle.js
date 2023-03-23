import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/images/ApnaTV.svg";
import { ReactComponent as search } from "../../assets/icon/Vector.svg";
import { ReactComponent as notification } from "../../assets/icon/qon.svg";

const Contanier = styled.header`
  width: 100%;
  background: linear-gradient(
    180deg,
    #0b1220,
    12.29%,
    rgba(0, 0, 0, 0.07) 100%
  );
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 133px;
  margin: auto;
  padding: 50px 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  @media (max-width: 1300px) {
    padding: 40px 46px;
  }
  @media (max-width: 120px) {
    padding: 30px 36px;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled(logo)``

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 1300px) {
    gap: 35px;
  }
  @media (max-width: 120px) {
    gap: 30px;
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
