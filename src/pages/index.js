import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import profilePic from "../../public/images/profile/Profile 1.png"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-new.ico" />
        <title>Portfolio | Aditya Pateriya</title>
        <meta name="description" content="Welcome to the portfolio of Aditya Pateriya." />
        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
               <Image src={profilePic} alt='AdityaPateriya' className='rounded-full mt-3 lg:hidden md:inline-block md:w-72 md:ml-4 md:-mt-40 ' width={450} height={450} 
               priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
               />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Mastering Code and Algorithms Bridging Web Development with AI
              ' className='mt-6 !text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              With a deep love for Web Development and a knack for Data Structures & Algorithms, I'm driven to innovate and 
              create impactful solutions that redefine possibilities in today's digital landscape
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Aditya Pateriya Resume.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
                hover:dark:text-light hover:dark:border-light md:p-1 md:px-2 md:text-base
                '
                download={true}
                >Resume <LinkArrow className={"w=6 ml-1"} />
                </Link>
                <Link href="mailto:adityapateriya7986@gmail.com" target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-sm'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Aditya' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
