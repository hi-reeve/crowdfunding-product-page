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
function App() {
    const isMobile = useMediaQuery(525);
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => {
        setModalVisible(true);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
    };
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
                    <CampaignStats />
                    <CampaignDescription
                        openModal={handleOpenModal}
                        rewardList={campaignRewardList}
                    />
                </div>
            </div>
            {modalVisible && (
                <CampaignModal
                    rewardList={campaignRewardList}
                    onClose={handleCloseModal}
                    visible={modalVisible}
                />
            )}
        </div>
    );
}

export default App;
