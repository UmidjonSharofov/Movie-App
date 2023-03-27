import styled from "styled-components";
const getType=({type})=>{
  switch(type){
    case 'primary':
      return{}
      case 'secondary':
        return{
          border:"1px solid #fff",
          background: 'transparent'
        }

      default: return{}
  }
}
const Container = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({icon})=> icon && '12px'};
  background: #fa4776;
  border-radius: 41px;
  border: none;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.04em;
  color: var(--white);
  padding: 13px 30px;
  ${getType}
  transition: transform .4s ease;
  :hover{
    transform: scale(0.98);
  }
`;
export { Container };
