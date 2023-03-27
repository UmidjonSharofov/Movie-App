import React from "react";
import { Container } from "./main";

function Button({ children, icon, type, ...props }) {
  return (
    <Container type={type} icon={icon} {...props}>
      {icon && icon}
      {children}
    </Container>
  );
}

export default Button;
