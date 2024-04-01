import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Full Stack Web Developer"
                        subTitle="Freelance - (2023 - Present)"
                        result="Costa Rica"
                        des="My role as a Freelance Full Stack Web Developer involves translating complex ideas into seamless web applications with an emphasis on performance and elegance."
                    />
                    <ResumeCard
                        title="Pentaseis"
                        subTitle="Pentaseis - (2020 - 2023)"
                        result="Costa Rica"
                        des="My role in the company is to assist the Senior Developer with designing, deploying, coding, maintaining, and fixing bugs in the existing projects."
                    />
                    <ResumeCard
                        title="Customer Service Staff"
                        subTitle="Hotel Los Lagos Spa & Resort - (2016 - 2020)"
                        result="Costa Rica"
                        des="I developed strong interpersonal skills and a commitment to guest satisfaction during my time as Customer Service Staff across diverse hotel environments."
                    />
                </div>
            </div>
{/*             <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet. (2015 - 2020)"
                        result="Costa Rica"
                        des="Lorem ipsum dolor sit amet."
                    />
                    <ResumeCard
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet. (2010 - 2014)"
                        result="Costa Rica"
                        des="Lorem ipsum dolor sit amet."
                    />
                    <ResumeCard
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet. (2001 - 2010)"
                        result="Costa Rica"
                        des="Lorem ipsum dolor sit amet."
                    />
                </div>
            </div> */}
        </motion.div>
    );
};

export default Experience;
