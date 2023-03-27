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
const Icon = styled.span`
  svg {
    width: 35px;
    height: 35px;
  }
`;

export { Container, Icon };
