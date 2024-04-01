import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-2xl sm:text-6xl font-bold text-white">
                    Hi, I'm{" "}
                    <span className="text-designColor capitalize">
                        Deyler Alvarez Fernández
                    </span>
                </h1>
                <h2 className="text-1xl xs:text-2xl sml:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#009900"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    With a passion for turning innovative ideas into digital
                    realities, I specialize in creating elegant, user-friendly
                    web solutions that drive results. Let's collaborate and
                    bring your digital vision to life.
                </p>
            </div>
        </div>
    );
};

export default LeftBanner;
