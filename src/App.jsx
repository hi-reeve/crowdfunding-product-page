import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import ImageHeroMobile from "@/assets/images/image-hero-mobile.jpg";
import ImageHeroDesktop from "@/assets/images/image-hero-desktop.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import style from "@/App.module.scss";
import CampaignDetail from "@/components/campaign/CampaignDetail";
import CampaignStats from "@/components/campaign/CampaignStats";
import CampaignDescription from "@/components/campaign/CampaignDescription";
import CampaignModal from "./components/campaign/CampaignModal";
import CampaignModalThankyou from "./components/campaign/CampaignModalThankyou";
function App() {
    const isMobile = useMediaQuery(525);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [modalThankyouVisible, setModalThankyouVisible] = useState(false);
    const appRoot = document.querySelector("body");
    const handleOpenModal = id => {
        appRoot.style.overflow = "hidden";
        setModalVisible(true);
        setSelectedId(id);
    };
    const handleCloseModal = () => {
        appRoot.style.overflow = "auto";
        setModalVisible(false);
        setSelectedId(0);
    };
    const setSelected = id => {
        setSelectedId(id);
    };
    const [campaignStats, setCampaignStats] = useState({
        backedAmount: 89914,
        backers: 5007,
    });
    const [campaignRewardList, setCampaignRewardList] = useState([
        {
            id: 0,
            name: "Pledge with no reward",
            pledge: 1,
            description:
                "  Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
            left: undefined,
        },
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
    ]);

    const handleBackedSuccess = (id, amount) => {
        const selectedReward = campaignRewardList.findIndex(
            reward => reward.id === id
        );

        const updatedReward = [...campaignRewardList];
        if (updatedReward[selectedReward].left)
            updatedReward[selectedReward].left -= 1;

        setCampaignRewardList(updatedReward);
        setCampaignStats({
            backedAmount: campaignStats.backedAmount + amount,
            backers: campaignStats.backers + 1,
        });
    };
    return (
        <div className="App">
            <AppHeader />
            <div className={style.main}>
                <div className={style.banner}>
                    {isMobile ? (
                        <img src={ImageHeroMobile} alt="image hero" />
                    ) : (
                        <img src={ImageHeroDesktop} alt="image hero" />
                    )}
                </div>
                <div className={style.campaign__wrapper}>
                    <CampaignDetail openModal={handleOpenModal} />
                    <CampaignStats stats={campaignStats} />
                    <CampaignDescription
                        openModal={handleOpenModal}
                        rewardList={campaignRewardList}
                    />
                </div>
            </div>
            {modalVisible && (
                <CampaignModal
                    setSelected={setSelected}
                    rewardList={campaignRewardList}
                    onClose={handleCloseModal}
                    visible={modalVisible}
                    selected={selectedId}
                    onThankyou={setModalThankyouVisible}
                    setCampaignReward={handleBackedSuccess}
                />
            )}
            <CampaignModalThankyou
                visible={modalThankyouVisible}
                closeModal={setModalThankyouVisible}
            />
        </div>
    );
}

export default App;
