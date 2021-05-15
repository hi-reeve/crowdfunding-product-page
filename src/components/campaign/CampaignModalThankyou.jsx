import React from "react";
import style from "@/components/campaign/CampaignModalThankyou.module.scss";
import ReactDOM from "react-dom";
import IconSuccess from "@/assets/images/icon-check.svg";
import Button from "../Button";
const CampaignModalThankyou = props => {
    const appRoot = document.querySelector("body");

    return (
        <React.Fragment>
            {props.visible &&
                ReactDOM.createPortal(
                    <div
                        className={style.overlay}
                        onClick={() => {
                            props.closeModal(false);
                        }}
                    ></div>,
                    appRoot
                )}
            {props.visible &&
                ReactDOM.createPortal(
                    <div className={style.thankyou}>
                        <img src={IconSuccess} alt="success icon" />
                        <h2 className="font-extrabold text-2xl mt-5">
                            Thanks for you support!
                        </h2>
                        <p className="text-gray-dark text-sm text-center font-medium my-5 leading-relaxed">
                            Your pledge brings us one step closer to sharing
                            Mastercraft Bamboo Monitor Riser worldwide. You will
                            get an email once our campaign is completed.
                        </p>
                        <Button
                            onClick={() => {
                                props.closeModal(false);
                            }}
                            className="w-[150px] mt-4"
                        >
                            Got it!
                        </Button>
                    </div>,
                    appRoot
                )}
        </React.Fragment>
    );
};

export default CampaignModalThankyou;
