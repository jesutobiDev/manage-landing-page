import { FC } from 'react'
import illustration from "../images/illustration-intro.svg"

const Hero: FC = () => {
  return (
    <section className='p-5 lg:py-20 lg:px-28 flex flex-col-reverse md:flex-col lg:flex-row gap-10'>
        <div className='flex-1 space-y-5 text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-dark-blue lg:max-w-[420px]'>Bring everyone together to build better products.</h1>
            <p className='lg:max-w-[350px] text-dark-grayish-blue text-lg'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button className='button-primary'>Get Started</button>
        </div>
        <div className='flex-1 h-auto w-full flex items-center justify-center'>
            <img src={illustration} alt="desktop-illustration" className='' />
        </div>
    </section>
  )
}

export default Hero
