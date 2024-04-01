import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import SkillsBanner from "./SkillsBanner";

const Banner = () => {
    return (
        <section
            id="home"
            className="pt-10 pb-20 border-b-[1px] font-titleFont border-b-black"
        >
            <div className="flex items-center">
                <LeftBanner />
                <RightBanner />
            </div>
            <SkillsBanner />
        </section>
    );
};

export default Banner;
