import React from "react";
import style from "@/components/campaign/CampaignDescription.module.scss";
import CampaignReward from "@/components/campaign/CampaignReward";
const CampaignDescription = ({ rewardList, openModal }) => {
    return (
        <div className={style.campaign__description}>
            <h3 className={style["campaign__description--title"]}>
                About this project
            </h3>
            <p className={style["campaign__description--description"]}>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
            </p>
            <p className={style["campaign__description--description"]}>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
            </p>
            {rewardList.map(reward => {
                return (
                    <CampaignReward
                        openModal={openModal}
                        key={reward.id}
                        reward={reward}
                    />
                );
            })}
        </div>
    );
};

export default CampaignDescription;
