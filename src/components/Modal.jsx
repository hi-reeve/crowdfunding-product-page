import React from "react";
import style from "@/components/Modal.module.scss";
import ReactDOM from "react-dom";

const ModalBackdrop = props => {
    return <div className={style.backdrop} onClick={props.onClose}></div>;
};
const Modal = props => {
    const appRoot = document.querySelector("body");
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalBackdrop onClose={props.onClose} />,
                appRoot
            )}
            {ReactDOM.createPortal(
                <div className={style.modal}>
                    <div className={style.modal__header}>
                        <h2 className={style.modal__title}>{props.title}</h2>
                        <svg
                            onClick={props.onClose}
                            className="w-4 h-4 text-gray-dark ml-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                        >
                            <path
                                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className={style.modal__content}>{props.children}</div>
                </div>,
                appRoot
            )}
        </React.Fragment>
    );
};

export default Modal;
