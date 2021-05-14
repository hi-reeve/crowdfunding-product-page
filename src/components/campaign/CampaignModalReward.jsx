import React, { useState } from "react";
import style from "@/components/campaign/CampaignModalReward.module.scss";
const CampaignModalReward = props => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelected = () => {
        setIsSelected(!isSelected);
    };
    return (
		<div
			onClick={handleSelected }
            className={`${style.modal__reward} ${
                isSelected ? style.selected : ""
            }`}
        >
            <div>
                <div
                    className={`${style["modal__reward-radio"]} ${
                        isSelected ? style.selected : ""
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default CampaignModalReward;
