import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">1999 - 2023</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Full-Stack Web Development Program"
                        subTitle="
                        (INA) Instituto Nacional de Aprendizaje C.R (2022 - Present)"
                        result="10/10"
                        des="The institution's programs equip students with the skills and knowledge needed to excel in diverse sectors of the economy and cultural domains."
                    />
                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="Ministry of Public Education Costa Rica (2006 - 2018)"
                        result="9/10"
                        des="Secondary education or post-primary education covers the International Standard Classification of Education."
                    />
                    <ResumeCard
                        title="Primary School Education"
                        subTitle="School Dulce Nombre Coronado (1999 - 2005)"
                        result="9/10"
                        des="Primary education covers the International Standard Classification of Education."
                    />
                </div>
            </div>
            {/* part Two */}

            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Courses</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="LinkedIn Learning"
                        subTitle="Programming and Web development. - (2022 - Present)"
                        result="10/10"
                        des="As a LinkedIn Learning premium member, I enjoy access to a wealth of courses and certifications, keeping me informed about the most recent industry developments."
                    />
                    <ResumeCard
                        title="Udemy"
                        subTitle="Programming and Web development. - (2020 - Present)"
                        result="10/10"
                        des="I purchase courses on Udemy to stay updated with the latest trends in the industry."
                    />
                    <ResumeCard
                        title="Microsoft Learn"
                        subTitle="Programming and Web development. - (2020 - Present)"
                        result="10/10"
                        des="Utilize the free Microsoft Learn courses to stay current with the latest industry technologies."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
