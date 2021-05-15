import React, { useEffect, useState } from "react";
import style from "@/components/campaign/CampaignModalReward.module.scss";
import Button from "../Button";
const CampaignModalReward = props => {
    const [error, setError] = useState(null);
    const handleClick = () => {
        if (props.reward.left <= 0) return;

        props.setSelected(props.reward.id);
    };
    const [backValue, setBackValue] = useState(props.reward.pledge);

    const onBacked = () => {
        if (error) return;
        props.setCampaignReward(props.reward.id,backValue);
        props.onClose();
        props.onThankyou(true);
    };
    useEffect(() => {
        if (!backValue) {
            setError("You need to input an amount");
            return;
        } else if (backValue < props.reward.pledge) {
            setError("Amount can't be less than minimal pledge amount");
            return;
        } else {
            setError(null);
        }

        return () => {
            setError(null);
        };
    }, [backValue]);
    const handleInputAmount = event => {
        setBackValue(+event.target.value);
    };
    return (
        <div
            onClick={handleClick}
            className={`${style.modal__reward} ${
                props.reward.left <= 0 ? style.disabled : ""
            } ${props.isSelected ? style.selected : ""}`}
        >
            <div className={style["modal__reward--header"]}>
                <div
                    className={`${style["modal__reward--radio"]} ${
                        props.isSelected ? style.selected : ""
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
            {props.isSelected && (
                <div className={style["modal__reward--input"]}>
                    <p className="mt-5 text-gray-dark text-sm text-center font-medium">
                        Enter your pledge
                    </p>
                    <div className="flex mt-5 md:ml-auto max-w-max">
                        <div className="flex items-center">
                            <input
                                value={backValue}
                                onChange={handleInputAmount}
                                type="number"
                                className={`${style["amount--input"]} ${
                                    error ? style["amount--error"] : ""
                                }`}
                                min={props.reward.pledge <= 0 ? 1 : props.reward.pledge}
                            />
                        </div>
                        <Button onClick={onBacked}>Continue</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampaignModalReward;
