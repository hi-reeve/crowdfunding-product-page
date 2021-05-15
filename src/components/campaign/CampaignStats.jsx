import React from "react";
import style from "@/components/campaign/CampaignStats.module.scss";
const CampaignStats = props => {
    const widthProgress = (props.stats.backedAmount / 100000) * 100;
    return (
        <div className={style.campaign__stats}>
            <div className={style["campaign__stats-wrapper"]}>
                <div className={style["campaign__stats--stats"]}>
                    <span className={style["campaign__stats--stats-num"]}>
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                        }).format(props.stats.backedAmount)}
                    </span>
                    <span className={style["campaign__stats--stats-caption"]}>
                        of $100,000 backed
                    </span>
                    <span
                        className={style["campaign__stats--stats-line"]}
                    ></span>
                </div>
                <div className={style["campaign__stats--stats"]}>
                    <span className={style["campaign__stats--stats-num"]}>
                        {props.stats.backers}
                    </span>
                    <span className={style["campaign__stats--stats-caption"]}>
                        total backers
                    </span>
                    <span
                        className={style["campaign__stats--stats-line"]}
                    ></span>
                </div>
                <div className={style["campaign__stats--stats"]}>
                    <span className={style["campaign__stats--stats-num"]}>
                        56
                    </span>
                    <span className={style["campaign__stats--stats-caption"]}>
                        days left
                    </span>
                </div>
            </div>
            <div className={style["campaign__stats--progress-bar"]}>
                <div
                    style={{
                        width: `${
                            widthProgress > 100
                                ? 100
                                : widthProgress
                        }%`,
                    }}
                    className={style["campaign__stats--progress"]}
                ></div>
            </div>
        </div>
    );
};

export default CampaignStats;
