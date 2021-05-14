import React from "react";
import Modal from "@/components/Modal";
import style from "@/components/campaign/CampaignModal.module.scss";
import CampaignModalReward from "./CampaignModalReward";

const CampaignModal = () => {
    return (
        <Modal title="Back this project">
            <p className={style["campaign__modal--desc"]}>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
            </p>
            <CampaignModalReward />
        </Modal>
    );
};

export default CampaignModal;
