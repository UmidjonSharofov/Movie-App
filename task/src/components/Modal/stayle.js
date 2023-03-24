import styled from "styled-components";
import { Modal } from "antd";

const Contanier =styled(Modal)` 
`
const Input=styled.input`
   width: 100%;
   height: 60px;
   border-radius: 5px;
   outline-color:#666 ;
   padding: 12px 20px;
   background-color: #333;
   outline: none;
   border: 0.8px solid #222;
   font-size: 22px;
   box-shadow: 0 5px 30px #fff;
   color: var(--white) !important;

`

export {Contanier,Input}