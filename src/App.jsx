import React from "react";
import AppHeader from "@/components/AppHeader";
import ImageHeroMobile from "@/assets/images/image-hero-mobile.jpg";
import ImageHeroDesktop from "@/assets/images/image-hero-desktop.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import style from "@/App.module.scss";
import CampaignDetail from "@/components/campaign/CampaignDetail";
import CampaignStats from "@/components/campaign/CampaignStats";
function App() {
    const isMobile = useMediaQuery(525);

    return (
        <div className="App">
            <AppHeader />
            <div className="main">
                <div className={style.banner}>
                    {isMobile ? (
                        <img src={ImageHeroMobile} alt="image hero" />
                    ) : (
                        <img src={ImageHeroDesktop} alt="image hero" />
                    )}
                </div>
                <div className={style.campaign__wrapper}>
					<CampaignDetail />
					<CampaignStats/>
                </div>
            </div>
        </div>
    );
}

export default App;
