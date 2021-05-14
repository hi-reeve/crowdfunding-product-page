import React from "react";
import style from "@/components/campaign/CampaignDescription.module.scss";
import CampaignReward from "@/components/campaign/CampaignReward";
const CampaignDescription = () => {
    const campaignRewardList = [
        {
            id: 1,
            name: "Bamboo Stand",
            pledge: 25,
            description:
                "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            left: 101,
        },
        {
            id: 2,
            name: "Black Edition Stand",
            pledge: 75,
            description:
                "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            left: 64,
        },
        {
            id: 3,
            name: "Mahogany Special Edition",
            pledge: 200,
            description:
                " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            left: 0,
        },
    ];
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
            {campaignRewardList.map(reward => {
                return <CampaignReward key={reward.id} reward={reward} />;
            })}
        </div>
    );
};

export default CampaignDescription;
