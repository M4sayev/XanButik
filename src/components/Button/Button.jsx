import React from "react";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
    return (
      <Component onClick={onClick} className="button" {...rest}>
        {children}
      </Component>
    );
};

export default Button;