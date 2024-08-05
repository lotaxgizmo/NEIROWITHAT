import React from 'react'
import skoollaptop from '../assets/skoollaptop.svg'
import heroboard from '../assets/heroboard.svg'
import boardd from '../assets/boardd.svg'
import buybtn33 from '../assets/buybtn33.svg'

function Tokenomics() {
    return (
        <div className='TOKENOMICS hidden  lg:flex flex-col items-center justify-center relative  text-[#D6C6B6]'>

            <img src={boardd} alt="" className='lg:w-[1217px] absolute z-[-1] top-1' />
            <div className="innerboard mt-14 flex flex-col justify-center items-center lg:w-[1217px]">
                <h3 className="text-8xl opacity-0">
                    TOKENOMICS
                </h3>

                <div className="things somethingolde mt-14 flex flex-row justify-around dborder-2 w-full">
                    <div className="supply opacity-0">
                        <p className='text-6xl -rotate-12 mb-28'>TOKEN SUPPLY</p>
                        <p className='text-6xl rotate-12'>1,000,000,000</p>
                        {/* <p className='text-2xl -rotate-12'>BURNT</p> */}
                    </div>


                    <div className="liquidity flex flex-col items-end opacity-0">
                        <p className='text-6xl rotate-12 mb-10'>LIQUIDITY</p>
                        <p className='text-6xl -rotate-3 mb-24'>LOCKED AND BURNED</p>
                        <p className='text-2xl rotate-12'>MINT DISABLED</p>
                    </div>
                </div>
                <a className='z-30' href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2sa7woytn8vv5bdy5sxngdiao3jbgwts2yfehvdguuaq&fixed=in&inputMint=2Sa7WoYtn8VV5bDY5SxngdiAo3jbGWts2YfEHvdgUUaQ&outputMint=sol" target="_blank" rel="noopener noreferrer">
                    <img src={buybtn33} alt="" className=' w-[177px] lg:w-auto mt-[-50px]' />
                </a>
            </div>
        </div>
    )
}

export default Tokenomics