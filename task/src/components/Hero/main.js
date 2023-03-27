import styled from "styled-components";
import { Rate } from "antd";

const Contanier = styled.header`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0px 86px;
  padding-top: 180px;

  @media (max-width: 1300px) {
    padding: 0px 76px;
    padding-top: 170px;
  }
  @media (max-width: 1200px) {
    padding: 0px 66px;
    padding-top: 160px;
  }
  @media (max-width: 1050px) {
    padding: 0px 56px;
    padding-top: 150px;
  }
  @media (max-width: 767px) {
    padding: 0px 46px;
    padding-top: 140px;
  }
  @media (max-width: 428px) {
    padding: 0px 36px;
    padding-top: 110px;
  }
`;
const Title = styled.h1``;
const SubTitle = styled.h3`
  margin: 6px;
`;
const Description = styled.p`
  max-width: 514px;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 41px;
`;
const Rating = styled(Rate)`
  margin-top: 23px;
`;
export { Contanier, Wrapper, Title, SubTitle, Description, Btns, Rating };
