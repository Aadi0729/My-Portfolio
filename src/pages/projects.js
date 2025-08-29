import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from '../../public/images/projects/Project 1 Cover Image.jpg'
import project3 from '../../public/images/projects/onlineVotepng.png'
import project4 from '../../public/images/projects/groceryappimg.png'
import project5 from '../../public/images/projects/elearnig.png'
import project6 from '../../public/images/projects/agnirvareportimg.png'
import project7 from '../../public/images/projects/Hire Hub.png'
import project9 from '../../public/images/projects/ResumeATSTracker.png'

import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light 
        shadow-2xl p-12 hover:shadow-3xl transition-shadow duration-300 ease-in-out lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
' />
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative m-4 lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-center justify-between pl-6 space-y-4 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl tracking-wide uppercase mt-2 dark:text-primaryDark
                xs:text-base
                '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold text-dark transition-colors duration-300 ease-in-out hover:text-primary dark:text-light sm:text-sm'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark leading-relaxed dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='flex space-x-6'>
                    <Link href={github} target='_blank' className='text-dark dark:text-light hover:text-primary transition-colors duration-300 ease-in-out text-4xl'>
                        <GithubIcon className='w-8 h-8 mt-1' />
                    </Link>
                    <Link href={link} target='_blank'
                        className='bg-dark text-light px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors duration-300 ease-in-out text-lg mb-2 dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>

    )
}

const Internship_Project = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
' />

            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative m-4 lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-center justify-between pl-6 space-y-4 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl tracking-wide uppercase mt-2 dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold text-dark transition-colors duration-300 ease-in-out hover:text-primary dark:text-light sm:text-sm'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark leading-relaxed dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='flex space-x-6'>
                    <Link href={github} target='_blank' className='text-dark dark:text-light hover:text-primary transition-colors duration-300 ease-in-out text-4xl'>
                        <GithubIcon className='w-8 h-8 mt-1' />
                    </Link>
                    <Link href={link} target='_blank'
                        className='bg-dark text-light px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors duration-300 ease-in-out text-lg mb-2 dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base'
                    >
                        Visit Github Repo
                    </Link>
                </div>
            </div>
        </article>

    )
}

// const UpcomingProject = ({ type, title, summary, img, link, github }) => {

//     return (
//         <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out'>
//             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
// rounded-br-3xl
// ' />
//             <Link href={link} target='_blank'
//                 className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative m-4'
//             >
//                 <FramerImage src={img} alt={title} className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.2 }}
//                 />
//             </Link>

//             <div className='w-1/2 flex flex-col items-center justify-between pl-6 space-y-4'>
//                 <span className='text-primary font-medium text-xl tracking-wide uppercase mt-2'>{type}</span>
//                 <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
//                     <h2 className='my-2 w-full text-left text-4xl font-bold text-dark transition-colors duration-300 ease-in-out hover:text-primary'>
//                         {title}
//                     </h2>
//                 </Link>
//                 <p className='my-2 font-medium text-dark leading-relaxed'>
//                     {summary}
//                 </p>
//                 <div className='flex space-x-6'>
//                     <Link href={github} target='_blank' className='text-dark hover:text-primary transition-colors duration-300 ease-in-out text-4xl'>
//                         <GithubIcon className='w-8 h-8 mt-1' />
//                     </Link>
//                     <Link href={link} target='_blank'
//                         className='bg-dark text-light px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors duration-300 ease-in-out text-lg mb-2'
//                     >
//                         Visit Project
//                     </Link>
//                 </div>
//             </div>
//         </article>
//     )
// }

const Projects = () => {
    return (
        <>
            <Head>
                <title>Aditya | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light xs:p-4'>
                <Layout>
                    <AnimatedText text="A Glimpse into My Project Work"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                        <div className='col-span-12'>
                            <FeaturedProject

                                title="Hire Hub - Job Portal"
                                img={project7}
                                summary="The Job Portal Website is a comprehensive full-stack web application that bridges the gap between job seekers and employers. It provides a user-friendly platform where job seekers can find, apply for jobs, and manage their applications, while employers can post job listings, manage candidates, and review applications."

                                link="https://hirehubplatform.onrender.com/"
                                github="https://github.com/Aadi0729/Hire-Hub-Job-Portal"
                                type="Featured Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject

                                title="Student Performance Predictor"
                                img={project1}
                                summary="The Student Performance Predictor is an innovative machine learning application that predicts student performance based on various features such as study time, class participation, and more. This tool aims to assist educators in making data-driven decisions to improve educational outcomes."

                                link="https://edupredict.onrender.com/"
                                github="https://github.com/Aadi0729/ML-Projects"
                                type="Featured Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject

                                title="𝗥𝗲𝘀𝘂𝗺𝗲 𝗔𝗧𝗦 𝗧𝗿𝗮𝗰𝗸𝗲𝗿"
                                img={project9}
                                summary="An AI-powered Resume Analyzer that simulates the behavior of an HR professional and an ATS (Applicant Tracking System) to evaluate your resume against a given job description using LLMs (Google Gemini 1.5 Flash)."

                                link="https://github.com/Aadi0729/ATS-Tracking-LLM-Project"
                                github="https://github.com/Aadi0729/ATS-Tracking-LLM-Project"
                                type="Featured Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <Internship_Project

                                title="Online Voting System"
                                img={project3}
                                summary="The Online Voting System is a secure and user-friendly platform designed to facilitate electronic voting processes. It features robust authentication mechanisms to ensure voter identity verification, comprehensive election and candidate management tools, and an intuitive voting process."

                                link="https://github.com/Aadi0729/Online-Voting-System"
                                github="https://github.com/Aadi0729/Online-Voting-System"
                                type="Internship Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <Internship_Project

                                title="Grocery Delivery App"
                                img={project4}
                                summary="The Grocery Delivery Application project focused on streamlining the online shopping experience for users. I contributed to key features including order management, where users can easily browse, select, payment integration for secure transactions; and user-friendly experience across devices."

                                link="https://github.com/Aadi0729/Grocery-Delivery-Application"
                                github="https://github.com/Aadi0729/Grocery-Delivery-Application"
                                type="Internship Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <Internship_Project

                                title="E-Learning Platform"
                                img={project5}
                                summary="An E-Learning Platform built using the MERN stack (MongoDB, Express.js, React, Node.js) is a comprehensive web application designed to deliver educational content and facilitate online learning. "

                                link="https://github.com/Aadi0729/E-Learning-Platform"
                                github="https://github.com/Aadi0729/E-Learning-Platform"
                                type="Internship Project"

                            />
                        </div>

                        <div className='col-span-12'>
                            <Internship_Project

                                title="Agnirva Project Report"
                                img={project6}
                                summary="The Agnirva Space Internship Program offers a unique opportunity to delve into the vast and complex fields of space science and data analytics. Throughout the program, participants are exposed to the latest advancements in space research, focusing on how big data is revolutionizing our understanding of the universe. "

                                link="https://github.com/Aadi0729/THE-AGNIRVA-SPACE-INTERNSHIP-PROJECT-REPORT"
                                github="https://github.com/Aadi0729/THE-AGNIRVA-SPACE-INTERNSHIP-PROJECT-REPORT"
                                type="Internship Project"

                            />
                        </div>

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Projects
