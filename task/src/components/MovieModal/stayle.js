import styled from "styled-components";
import { Modal } from "antd";

const Container = styled(Modal)`
  .ant-modal-header,
  .ant-modal-footer,
  .ant-modal-close {
    display: none;
  }
  .ant-modal-content {
    padding: 0 !important;
  }
  :where(.css-dev-only-do-not-override-mxhywb).ant-modal {
    top: 25% !important ;
  }
`;
const Icons=styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;

`
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #333;
  svg {
    width: 35px;
    height: 35px;
  }
`;

export { Container, Icon,Icons};
