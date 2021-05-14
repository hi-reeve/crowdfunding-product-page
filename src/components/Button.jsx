/* eslint-disable react/prop-types */
import React from "react";
import style from "@/components/Button.module.scss";

const Button = props => {
    return (
        <button
            className={`${style.button} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
