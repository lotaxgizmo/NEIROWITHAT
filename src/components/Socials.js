import React from 'react'
import skooltg from '../assets/skooltg.svg'
import skoolx from '../assets/skoolx.svg'
import dexscreener from '../assets/dexscreener.svg'

function Socials() {
    return (
        <div className='SOCIALS text-[#D6C6B6] flex flex-col items-center justify-center mt-20 lg:mt-52 mb-10 '>

            <h3 className='text-6xl lg:text-9xl -rotate-12'>
                SOCIALS
            </h3>

            <div className="icons flex flex-row items-center  -rotate-12 my-5">
                <a href="https://x.com/neirowifhat_sol/" target="_blank" rel="noopener noreferrer">
                    <img src={skoolx} alt="" className='w-32 lg:w-52' />
                </a>
                <a href="https://t.me/neirowifhatportal" target="_blank" rel="noopener noreferrer">
                    <img src={skooltg} alt="" className='w-32 lg:w-52' />
                </a>
                <a href="https://dexscreener.com/solana/coflhwsoxyeij57jtxrtse3qh5ohznkywm6yaj2wpwav" target="_blank" rel="noopener noreferrer">
                    <img src={dexscreener} alt="" className='w-32 lg:w-52' />
                </a>
            </div>

        </div>
    )
}

export default Socials