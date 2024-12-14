import React, { useState } from "react";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
    return (
      <Component role="button" onClick={onclick} className="button" {...rest}>
        {children}
      </Component>
    );
};

export default Button;