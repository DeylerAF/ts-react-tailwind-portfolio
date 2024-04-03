import React from "react";

const Card = ({ title, des, icon }) => {
    return (
        <div className="p-4 my-4 mx-2 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
            <div className="w-full h-96 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-10 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="w-10 h-8 flex flex-col justify-between">
                        <span className="text-5xl text-designColor">
                            {icon}
                        </span>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                            {title}
                        </h2>
                        <p className="base">{des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
