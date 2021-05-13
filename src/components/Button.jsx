/* eslint-disable react/prop-types */
import React from "react";
import style from "@/components/Button.module.scss";

const Button = props => {
    return (
        <button
            className={style.button}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
