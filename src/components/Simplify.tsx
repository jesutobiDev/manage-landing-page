import { FC } from 'react'
import { Link } from 'react-router-dom'
import patternDesktop from "../images/bg-simplify-section-desktop.svg"
import patternMobile from "../images/bg-simplify-section-mobile.svg"

const Simplify : FC = () => {
  return (
    <section className='bg-bright-red px-5 py-10 md:px-12 flex-col md:flex-row space-y-10 text-center flex justify-between lg:py-20 lg:px-28 items-center relative'>
        <h4 className='text-4xl text-white font-semibold max-w-[400px]'>Simplify how your team works today.</h4>
        <Link to="/" className="button-secondary">Get Started</Link>
        <div className='absolute top-0 left-0 inset-0 overflow-hidden'>
          <img src={patternDesktop} alt="desktop-pattern" className='hidden lg:block' />
          <img src={patternMobile} alt="mobile-pattern" className='block lg:hidden' />
        </div>
    </section>
  )
}

export default Simplify