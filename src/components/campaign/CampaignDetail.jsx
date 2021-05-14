import React, { useState } from "react";
import style from "@/components/campaign/CampaignDetail.module.scss";
import CampaignLogo from "@/assets/images/logo-mastercraft.svg";
import Button from "@/components/Button";

const CampaignDetail = () => {
    const [bookmark, setBookmark] = useState(false);
    const handleClickBookmark = () => {
        setBookmark(!bookmark);
    };
    return (
        <div className={style.campaign__detail}>
            <img
                src={CampaignLogo}
                className={style["campaign__detail--logo"]}
            />
            <h1 className={style["campaign__detail--name"]}>
                Mastercraft Bamboo <br /> Monitor Riser
            </h1>
            <p className={style["campaign__detail--description"]}>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
            </p>
            <div className={style["campaign__detail--cta"]}>
                <Button className="lg:mr-auto lg:max-w-[200px]">
                    Back this project
                </Button>
                <div
                    className={style["campaign__detail--cta-bookmark"]}
                    onClick={handleClickBookmark}
                >
                    <svg
                        className="text-icon-bookmark-icon w-14 h-14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fillRule="evenodd">
                            <circle
                                className="transition-all duration-300 ease-in-out"
                                fill={
                                    bookmark ? "hsl(176, 72%, 28%)" : "#2f2f2f"
                                }
                                cx="28"
                                cy="28"
                                r="28"
                            />
                            <path
                                fill={bookmark ? "#ffffff" : "#B1B1B1"}
                                d="M23 19v18l5-5.058L33 37V19z"
                            />
                        </g>
                    </svg>
                    <div
                        className={`${
                            style["campaign__detail--cta-bookmark-ribbon"]
                        } ${bookmark ? style.active : ""}`}
                    >
                        {bookmark ? "Bookmarked" : "Bookmark"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetail;
