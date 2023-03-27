import styled from "styled-components";

const Contanier = styled.header`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0px 86px;
  padding-top: 180px;
  /* @media (max-width: 1300px) {
    padding: 30px 46px;
    height: 110px;
  }
  @media (max-width: 1050px) {
    padding: 30px 36px;
    height: 90px;
    

  }
  @media (max-width: 1200px) {
  
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
  } */
`;
const Title=styled.h1`
`
const SubTitle=styled.h3`
  margin: 6px ;
`
const Description =styled.p`
 max-width: 514px;
`
const Btns=styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 41px;
`
export {Contanier,Wrapper,Title,SubTitle,Description,Btns}
