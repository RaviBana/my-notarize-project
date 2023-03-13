import React from 'react';
import lady from './../assets/lady.png'

const Container8 = () => {
    return (
        <div className='container8'>
                    <div className='first-container8 d-flex'>
                               
                                <div className='first1-container8 d-flex flex-column'>
                                    <h1>It only takes you few minutes</h1>
                                    <div className='first22-cont8 d-flex justify-content-center align-items-center'>
                                        <button className='btn btn-primary btn-sm'>NOTARIZE NOW</button>
                                        <button className='btn btn-primary btn-sm'>Schedule Appointment</button>
                                    </div>
                                </div>

                                <div className='first2-container8'>
                                            <img src={lady} alt="" />
                                </div>
                    </div>

                    <div className='second-container8 d-flex justify-content-around align-items-center'>
                                    <h1>Frequently Asked Question</h1>
                                    <button>Read FAQ</button>
                    </div>
        </div>
    )
}

export default Container8