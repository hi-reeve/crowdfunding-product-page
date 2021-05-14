import React from "react";
import style from "@/components/Modal.module.scss";
import ReactDOM from "react-dom";

const ModalBackdrop = () => {
    return <div className={style.backdrop}></div>;
};
const Modal = props => {
    const appRoot = document.querySelector("body");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalBackdrop />, appRoot)}
            {ReactDOM.createPortal(
                <div className={style.modal}>
                    <h2 className={style.modal__title}>{props.title}</h2>
                    <div className={style.modal__content}>{props.children}</div>
                </div>,
                appRoot
            )}
        </React.Fragment>
    );
};

export default Modal;
