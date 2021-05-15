import React from "react";
import Modal from "@/components/Modal";
import style from "@/components/campaign/CampaignModal.module.scss";
import CampaignModalReward from "./CampaignModalReward";

const CampaignModal = props => {
    const pledgeNoReward = {
        id: 1,
        name: "Pledge with no reward",
        pledge: 0,
        description:
            "  Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        left: undefined,
    };

    const rewardList = [pledgeNoReward, ...props.rewardList];
    return (
        <React.Fragment>
            {props.visible && (
                <Modal onClose={props.onClose} title="Back this project">
                    <p className={style["campaign__modal--desc"]}>
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                    </p>
                    {rewardList.map(reward => {
                        return (
                            <CampaignModalReward
                                reward={reward}
                                key={reward.id}
                            />
                        );
                    })}
                </Modal>
            )}
        </React.Fragment>
    );
};

export default CampaignModal;
