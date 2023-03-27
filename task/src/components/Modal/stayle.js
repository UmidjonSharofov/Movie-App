import styled from "styled-components";
import { Modal } from "antd";

const Contanier = styled(Modal)`
  .ant-drawer-title {
    display: none !important;
  }

  .ant-modal-header,
  .ant-modal-footer,
  .ant-modal-close {
    display: none;
  }
  .ant-modal-content {
    padding: 0 !important;
  }
  :where(.css-dev-only-do-not-override-mxhywb).ant-modal {
    top: 15% !important ;
  }
  @media (max-width: 880px) {
    :where(.css-dev-only-do-not-override-mxhywb).ant-modal-root
      .ant-modal-wrap {
      top: 45% !important ;
    }
  }
  @media (max-width: 428px) {
    :where(.css-dev-only-do-not-override-mxhywb).ant-modal-root
      .ant-modal-wrap {
      top: 40% !important ;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  outline-color: #666;
  padding: 12px 20px;
  background-color: #333;
  outline: none;
  border: 0.8px solid #222;
  font-size: 22px;
  box-shadow: 0 5px 30px #fff;
  color: var(--white) !important;
  @media (max-width: 880px) {
    height: 50px;
    :where(.css-dev-only-do-not-override-mxhywb).ant-modal-root
      .ant-modal-wrap {
      top: 45% !important ;
    }
  }
  @media (max-width: 428px) {
    height: 40px;
    :where(.css-dev-only-do-not-override-mxhywb).ant-modal-root
      .ant-modal-wrap {
      top: 20% !important ;
    }
  }
`;

export { Contanier, Input };
