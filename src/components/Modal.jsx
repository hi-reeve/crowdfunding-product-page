import React from "react";
import style from "@/components/Modal.module.scss";
import ReactDOM from "react-dom";

const Modal = () => {
    const appRoot = document.querySelector("body");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={style.backdrop}></div>,
                appRoot
            )}
            {ReactDOM.createPortal(
				<div className={style.modal}>
					<h2 className={style.modal__title}>
						
					</h2>
					<div className={ style.modal__content}></div>
				</div>,
                appRoot
            )}
        </React.Fragment>
    );
};
