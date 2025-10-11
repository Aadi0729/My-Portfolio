import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article0 from "../../public/images/articles/Oracle1.jpg"
import article1 from "../../public/images/articles/AWScert.jpeg"
import article2 from "../../public/images/articles/agnirvacert.jpeg"
import article3 from "../../public/images/articles/dataanalysis.jpeg"
import article4 from "../../public/images/articles/GenAI.jpeg"
import article5 from "../../public/images/articles/next24.jpeg"
import article6 from "../../public/images/articles/technohacks.jpeg"
import article7 from "../../public/images/articles/Naukri Campus.jpg"
import article8 from "../../public/images/articles/HackerRank.jpg"
import article9 from "../../public/images/articles/OCI AI Foundations Associate.jpg"

import { motion, useMotionValue } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(event.pageY);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }} ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg
        md:!hidden" />
    </Link>
  )
}

const Certificate = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border
    border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
}

const FeaturedCertificate = ({ img, title, time, summary, link }) => {

  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
rounded-br-3xl
' />
      <Link href={link} target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'> {title} </h2>
      </Link>

      <p className='text-sm mb-2'> {summary} </p>
      <span className='text-primary font-semibold'> {time} </span>
    </li>
  )
}

const certifications = () => {
  return (
    <>
      <Head>
        <title>Aditya | Certifications Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Recognized Certifications and Credentials!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>

            <FeaturedCertificate
              title="Oracle AI Foundations Associate"
              summary="Earned the Oracle AI Foundations Associate certification, building a solid foundation in Artificial Intelligence concepts and applications. Gained hands-on experience with Oracle Cloud AI services, exploring machine learning fundamentals, AI use cases, and the integration of AI solutions within OCI."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7382804616683339777/"
              img={article9}
            />

            <FeaturedCertificate
              title="OCI Foundations Associate"
              summary="Completed the Oracle Cloud Infrastructure (OCI) Foundations Associate certification, gaining hands-on experience with cloud fundamentals, networking, compute, storage & databases, security, and cost management. Completed guided labs deploying and managing compute, storage, and networking resources."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7380134866413256704/"
              img={article0}
            />

            <FeaturedCertificate
              title="Naukri Campus Challenge - 2024"
              summary="Participated in India's premier national-level skill competition.
Successfully cleared the Aptitude Test (Round 1) and assessed across diverse skill tracks including Coding and Data & AI.
Awarded certificates for showcasing problem-solving and technical skills."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7255539754262257665/"
              img={article7}
            />
            <FeaturedCertificate
              title="Software Engineer Intern"
              summary="Demonstrated proficiency in solving real-world coding challenges and technical problems.
Gained expertise in algorithms, problem-solving, and efficient coding practices."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7251218106184781824/"
              img={article8}
            />
            <FeaturedCertificate
              title="AWS Academy Cloud Foundations"
              summary="The AWS Academy Cloud Foundations certification is an introductory course designed to provide a comprehensive 
          understanding of cloud computing and AWS (Amazon Web Services) essentials."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7236315264533880833/"
              img={article1}
            />

            <FeaturedCertificate
              title="Agnirva Internship Certificate"
              summary="The Agnirva Space Internship Program offers a unique opportunity to delve into the vast and complex fields of 
          space science and data analytics. This program not only enhances technical skills but also fosters critical thinking and innovation 
          in addressing the complexities of space research."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7234548647906967552/"
              img={article2}
            />

            <FeaturedCertificate
              title="Career Essentials in Data Analysis"
              summary="Offered by Microsoft and LinkedIn, provides a comprehensive foundation in data analysis, focusing on essential 
          skills needed for a career in this field."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7211773053909778433/"
              img={article3}
            />

            <FeaturedCertificate
              title="Career Essentials in Generative AI"
              summary="The Generative AI certification, also provided by Microsoft and LinkedIn, delves into the cutting-edge field of artificial 
          intelligence."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7210963851922591745/"
              img={article4}
            />

            <FeaturedCertificate
              title="Next24tech Technologies & Services"
              summary="Developed an Online Voting System with secure authentication and intuitive UI, a Grocery Delivery Application for efficient order management and tracking, and an E-Learning Platform 
          with interactive course management and responsive design."
              link="https://www.linkedin.com/feed/update/urn:li:activity:7236744616736116736/"
              img={article5}
            />

            <FeaturedCertificate
              title="TechnoHacks EduTech"
              summary="During my internship at TechnoHacks EduTech, I worked on key machine learning projects, including Social Media Sentiment Analysis, Email Spam Filtering, and Churn Price Prediction, gaining hands-on experience in data analysis and predictive modeling."
              link="https://www.linkedin.com/posts/aditya-pateriya7781_technohacksedutech-intern2023-datascience-activity-7092136544261554176-3YWk?utm_source=share&utm_medium=member_desktop"
              img={article6}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Certification</h2>
          <ul>

            <Certificate
              title="Oracle AI Foundations Associate"
              date="October 11, 2025"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7382804616683339777/"
              img={article9}
            />

            <Certificate
              title="OCI Foundations Associate"
              date="October 4, 2025"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7380134866413256704/"
              img={article0}
            />

            <Certificate
              title="Naukri Campus Young Turks Challenge"
              date="October 11, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7255539754262257665/"
              img={article7}
            />

            <Certificate
              title="Software Engineer Intern - HackerRank"
              date="October 13, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7251218106184781824/"
              img={article8}
            />

            <Certificate
              title="AWS Academy Cloud Foundations certification"
              date="August 29, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7236315264533880833/"
              img={article1}
            />

            <Certificate
              title="Agnirva Space Internship Program"
              date="August 28, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7234548647906967552/"
              img={article2}
            />

            <Certificate
              title="Microsoft and LinkedIn: Career Essentials in Data Analysis"
              date="June 25, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7211773053909778433/"
              img={article3}
            />

            <Certificate
              title="Microsoft and LinkedIn: Career Essentials in Generative AI"
              date="June 23, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7210963851922591745/"
              img={article4}
            />

            <Certificate
              title="Certified by Next24tech Technologies & Services"
              date="September 2, 2024"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7236744616736116736/"
              img={article5}
            />

            <Certificate
              title="Certified by TechnoHacks EduTech"
              date="July 31, 2023"
              link="https://www.linkedin.com/posts/aditya-pateriya7781_technohacksedutech-intern2023-datascience-activity-7092136544261554176-3YWk?utm_source=share&utm_medium=member_desktop"
              img={article6}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default certifications
