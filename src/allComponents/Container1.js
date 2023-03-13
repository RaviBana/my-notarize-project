import React from 'react';
import arrow from './../assets/Scroll Down.png'
import check from './../assets/check.png'
import laptop from './../assets/NotarizeHQ - Cross Device 1.png'

const Container1 = () => {
  return (
    <div className='container1 d-flex flex-column  align-items-center'>
        <div className=' d-flex justify-content-center align-items-center'> 
                    <div className='first-container here-now d-flex flex-column justify-content-center align-items-sm-start'>
                                <h1>Notarize Here & Now</h1>
                                <p>Notarize documents with licenced notaries anytime</p>
                                    <button className='btn btn-primary btn-sm mx-auto py-2 px-5 my-2 rounded-4'>NOTARIZE A DOCUMENTS</button>
                                <div className='notary d-flex justify-content-center align-items-center mx-auto'>
                                    <img src={check} alt="" />
                                    <p className='my-2 mx-2 text-5px'>Connect to a Notary 24/7</p>
                                </div>
                    </div>

                    <div className='laptop'>
                        <img src={laptop} alt="" />
                    </div>
        </div>

        <div className='arrow'>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default Container1