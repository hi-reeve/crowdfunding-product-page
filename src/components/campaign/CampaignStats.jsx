import React from "react";
import style from "@/components/campaign/CampaignStats.module.scss";
const CampaignStats = () => {
    return (
        <div className={style.campaign__stats}>
            <div className={style["campaign__stats--stats"]}>
                <span className={style["campaign__stats--stats-num"]}>
                    $89,914
                </span>
                <span className={style["campaign__stats--stats-caption"]}>
                    of $100,000 backed
                </span>
                <span className={style["campaign__stats--stats-line"]}></span>
            </div>
            <div className={style["campaign__stats--stats"]}>
                <span className={style["campaign__stats--stats-num"]}>
                    5,007
                </span>
                <span className={style["campaign__stats--stats-caption"]}>
                    total backers
                </span>
                <span className={style["campaign__stats--stats-line"]}></span>
            </div>
            <div className={style["campaign__stats--stats"]}>
                <span className={style["campaign__stats--stats-num"]}>56</span>
                <span className={style["campaign__stats--stats-caption"]}>
                    days left
                </span>
                <span className={style["campaign__stats--stats-line"]}></span>
            </div>
            <div className={style["campaign__stats--progress-bar"]}>
                <div
                    style={{
                        width: `${(89914 / 100000) * 100}%`,
                    }}
                    className={style["campaign__stats--progress"]}
                ></div>
            </div>
        </div>
    );
};

export default CampaignStats;
