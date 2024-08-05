import React from 'react'

import heroboard from '../assets/heroboard.svg'
import teachers from '../assets/teachers.svg'
import skoolsucks from '../assets/skoolsucks.svg'
import reading from '../assets/reading.svg'
import learning from '../assets/learning.svg'
import hateschool from '../assets/hateschool.svg'
import heroanime from '../assets/heroanime.svg'
import heroanime2 from '../assets/heroanime2.svg'
import dexbtn from '../assets/dexbtn.svg'
import buybtn from '../assets/buybtn.svg'
import heroimg from '../assets/heroimg.png'
import doggraphics from '../assets/doggraphics.png'

function Hero() {
    return (
        <div className='HERO flex flex-col items-center relative mt-16'>
            <img src={heroboard} alt="" className='w-[1217px] absolute z-[-1]' />

            <img src={heroimg} alt="" className='w-[110px] lg:w-[222px] z-10 mt-5 lg:mt-14' />

            <div className="three flex flex-row justify-around relative lg:w-[1171px]  z-10d">

                <div className='lg:w-1/3 ' >

                    {/* <img src={heroanime2} alt="" className='lg:hidden flex rotate-3 top-[-150px] left-[93px] w-[197px]  absolute  z-0' />

                    <img src={heroanime} alt="" className='hidden lg:flex  w-[504px] mr-[-199px]  ' /> */}

                </div>

                <div className="lg:w-1/3 btns flex flex-row lg:flex-col  z-10">
                    <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2sa7woytn8vv5bdy5sxngdiao3jbgwts2yfehvdguuaq&fixed=in" target="_blank" rel="noopener noreferrer">
                        <img src={buybtn} alt="" className=' w-[177px] lg:w-auto' />
                    </a>
                    <a href="https://dexscreener.com/solana/coflhwsoxyeij57jtxrtse3qh5ohznkywm6yaj2wpwav" target="_blank" rel="noopener noreferrer"></a>
                    <img src={dexbtn} alt="" className=' w-[177px] lg:w-auto' />
                </div>

                <div className="lg:w-1/3 writings hidden lg:flex flex-col pl-10 z-10">
                    {/* <img src={hateschool} alt="" className='w-72 ' />
                    <img src={learning} alt="" className='w-72 ' />
                    <img src={teachers} alt="" className='w-72 ' />
                    <img src={reading} alt="" className='w-72 ' /> */}

                </div>

            </div>
        </div>
    )
}

export default Hero