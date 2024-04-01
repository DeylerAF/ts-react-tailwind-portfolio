import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
        <div className="hidden lg:flex justify-center items-center relative">
            <img
                className="w-1/2 h-[auto] z-10"
                src={bannerImg}
                alt="bannerImg"
            />
            <div className="w-2/3 h-2/3 rounded-3xl absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    );
};

export default RightBanner;
