import Head from 'next/head'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import deved from "../../public/dev-ed-wave.png"
import Icons from './Icons'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mithun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-40 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='py-10 md:mb-10 flex justify-between'>
            <h1 className='text-2xl font-burtons hover:underline hover:underline-offset-8 cursor-pointer'>Mithun</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill 
                className='cursor-pointer' onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li><a href='https://drive.google.com/file/d/1GrD4g2FY-rmBIKxzB9yUyzlWPwk1eA9m/view?usp=sharing' className='bg-gradient-to-r from-teal-600 to-cyan-600 px-4 text-white py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav> 
          <div className='flex flex-wrap gap-10'>
            <div className='flex flex-col justify-center mx-auto'>
              <h2 className='text-center text-4xl md:py-2 text-teal-600 font-medium sm:whitespace-nowrap md:text-6xl'>Mithun Surve</h2>
              <h3 className='text-center text-xl py-1 md:py-2 italic md:text-3xl'>Full Stack Developer</h3>
              <p className='text-md md:py-2 leading-5 text-gray-800 md:text-xl max-w-lg mx-auto text-center dark:text-white'>I&apos;m a Javascript developer specialized in Full-Stack web applications.</p>
              <div className='flex text-5xl gap-10 justify-center mt-7'>
                <Icons icon={<AiFillTwitterCircle/>} url={"https://twitter.com/mithunsurve1"}/>
                <Icons icon={<AiFillLinkedin/>} url={"https://www.linkedin.com/in/mithunsurve1809"}/>
                <Icons icon={<AiFillGithub/>} url={"https://github.com/NormieNoob"}/>
              </div>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 md:rounded-full w-64 h-64 overflow-hidden shadow-2xl md:h-80 md:w-80 rounded-lg'>
              <Image src={deved} layout='fill' objectFit='cover' alt="3d Character"/>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Since the beginning of my journey as a Freelance developer, I&apos;ve done many remote work <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create products for both buisness and consumers.</p>
            <p>I offer from a wide range of services, including programming & teaching</p>
          </div>
          <div className="lg:flex gap-10 lg:basis-1/3 lg:flex-1">
            <div className="shadow-lg text-center flex flex-col items-center p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt='3d doodle'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 min-w-fit'>Creating elegant designs suited for your needs following core design theory</p>
              <h4 className='text-teal-600'>Designs tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='shadow-lg text-center flex flex-col items-center p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} alt='3d doodle'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs following core design theory</p>
              <h4 className='text-teal-600'>Designs tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='shadow-lg text-center flex flex-col items-center p-10 rounded-xl my-10'>
              <Image src={consulting} width={100} height={100} alt='3d doodle'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs following core design theory</p>
              <h4 className='text-teal-600'>Designs tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>Since the beginning of my journey as a Freelance developer, I&apos;ve done many remote work <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create products for both buisness and consumers.</p>
            <p>I offer from a wide range of services, including programming & teaching</p>
          </div>
        </section> */}
      </main>
    </div>
  )
}
