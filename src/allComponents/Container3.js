import React from 'react'
import comp1 from './../assets/Component 13.png'
import comp2 from './../assets/Component 13 (1).png'
import comp3 from './../assets/Component 13 (2).png'
import comp4 from './../assets/Component 13 (3).png'


const Container3 = () => {
    return (
        <div className='container3 d-flex'>

            <div className='first-container3'>
                <span className=''>NotarizeHQ </span>
                <h1>

                    Our Online Notarization Platform
                </h1>

            </div>

            <div className='second-container3'>
                <div>
                    <img src={comp1} alt="" />
                    <h5>End-to-End Encryption</h5>
                    <p>Use our secure platform certified with an SSL certificate</p>
                </div>

                <div>
                    <img src={comp2} alt="" />
                    <h5>Licensed Notaries</h5>
                    <p>Use licensed and certified notaries, available 24/7 for all kinds of notarizations</p>
                </div>

                <div>
                    <img src={comp3} alt="" />
                    <h5>24/7 Support</h5>
                    <p>Have all questions answered by a dedicated support team</p>
                </div>

                <div>
                    <img src={comp4} alt="" />
                    <h5>Fast And Reliable</h5>
                    <p>Get trusted notaries for your sensitive documents in 15 minutes or less</p>
                </div>
            </div>

        </div>
    )
}

export default Container3