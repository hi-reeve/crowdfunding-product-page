import React from "react";
import Modal from "@/components/Modal";
import style from "@/components/campaign/CampaignModal.module.scss";
import CampaignModalReward from "./CampaignModalReward";

const CampaignModal = props => {

    return (
        <React.Fragment>
            {props.visible && (
                <Modal onClose={props.onClose} title="Back this project">
                    <p className={style["campaign__modal--desc"]}>
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                    </p>
                    {props.rewardList.map(reward => {
                        return (
                            <CampaignModalReward
                                onClose={props.onClose}
                                setSelected={props.setSelected}
                                reward={reward}
                                key={reward.id}
                                isSelected={reward.id === props.selected}
                                onThankyou={props.onThankyou}
                                setCampaignReward={props.setCampaignReward}
                            />
                        );
                    })}
                </Modal>
            )}
        </React.Fragment>
    );
};

export default CampaignModal;
