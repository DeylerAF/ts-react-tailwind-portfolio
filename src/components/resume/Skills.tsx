import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Frontend Skills</h2>
                </div>
                <div className='className="mt-14 w-full flex flex-col gap-6'>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            HTML / CSS / JavaScript
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[95%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    95%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Frameworks & Libraries (React, Tailwind, Bootstrap)
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Responsive Design
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    100%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Testing and Debugging
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[75%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    75%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Design Tools</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Backend Skills
                    </h2>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">PHP / Python </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Frameworks (Laravel, Django)</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[75%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    75%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Database Management</p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Containerization and Orchestration
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[85%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    85%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">
                            Servers Management
                        </p>
                        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r from-lime-500 via-emerald-600 to-lime-500 rounded-md relative"
                            >
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
