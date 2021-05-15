import React, { useState } from "react";
import style from "@/components/campaign/CampaignModalReward.module.scss";
const CampaignModalReward = props => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelected = () => {
        setIsSelected(!isSelected);
    };
    return (
        <div
            onClick={handleSelected}
            className={`${style.modal__reward} ${
                isSelected ? style.selected : ""
            }`}
        >
            <div className={style["modal__reward--header"]}>
                <div
                    className={`${style["modal__reward--radio"]} ${
                        isSelected ? style.selected : ""
                    }`}
                ></div>
                <div className={style["modal__reward--info"]}>
                    <h2 className={style["modal__reward--title"]}>
                        {props.reward.name}
                    </h2>
                    <span className={style["modal__reward--amount"]}>
                        {props.reward.pledge > 0
                            ? `Pledge $${props.reward.pledge} or more`
                            : `Pledge with any amount`}
                    </span>
                </div>
            </div>
            <div className={style["modal__reward--content"]}>
                <p className={style["modal__reward--description"]}>
                    You get an ergonomic stand made of natural bamboo. You've
                    helped us launch our promotional campaign, and you’ll be
                    added to a special Backer member list.
                </p>
                {props.reward.left !== undefined && (
                    <h4 className={style["modal__reward--left"]}>
						<span>{props.reward.left}</span>
                        <span>left</span>
                    </h4>
                )}
            </div>
        </div>
    );
};

export default CampaignModalReward;
