import React from 'react'
import why from '../assets/why.svg'
import threelogo from '../assets/threelogo.svg'
import doggraphics from '../assets/doggraphics.png'
import buybtn2 from '../assets/buybtn2.svg'

function Whyskool() {
    return (
        <div className='WHYSKOOL flex flex-col items-center justify-center mt-10'>
            <img src={why} alt="" className='lg:mb-[-100px]' />

            <div className="two flex flex-col lg:flex-row ">
                <div className="lg:w-1/2 image lg:mt-32 flex flex-col items-center justify-center relative">
                    <img src={doggraphics} alt="" className='p-3 w-96 lg:w-[600px]' />
                </div>

                <div className="lg:w-1/2 right px-10 text-white">
                    <img src={threelogo} alt="" className='hidden lg:flex opacity-0' />
                    <p className='w-[20px]x text-2xl lg:text-4xl lg:rotate-[10deg]' >After the passing of the beloved Doge, Kabosu, Atsuko Sato has adopted a new Shiba Inu named NeiroWifHat. With NeiroWifHat, we embark on a fresh journey to create new degen millionaires.
                        Join us in honoring Kabosu's legacy and welcoming Neirowifhat as the next viral sensation in the Solana meme world and cryptocurrency communities.</p>
                    <img src={buybtn2} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Whyskool