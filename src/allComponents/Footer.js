import React from 'react'
import icon from './../assets/Group 34.png'
import fb from './../assets/fb.png'
import inn from './../assets/in.png'
import insta from './../assets/inst.png'
import twit from './../assets/twit.png'
const Footer = () => {
    return (
        <footer className='footer'>

            <div className='first-footer d-flex justify-content-center'>
                            <div className='first1-footer d-flex flex-column'>
                                <div className='d-flex'>
                                        <img src={icon} alt="" width={'20px'}/>
                                        <h2>NotarizeHQ</h2>
                                </div>
                                <div className='first2-footer d-flex'>
                                                <img src={fb} alt="" />
                                                <img src={inn} alt="" />
                                                <img src={insta} alt="" />
                                                <img src={twit} alt="" />
                                            </div>
                            </div>


                            <div className='second-footer'>

                                <div>
                                   <h5>About</h5> 
                                     <a>Company</a>
                                     <a>Get Started</a>
                                     <a>Careers</a>
                                     <a>Press</a>
                                     <a>How it works </a>
                                    </div>
                                   

                                <div>
                                    <h5>Solutions</h5>
                                    <a>For Title Agent</a>
                                    <a>For Individual</a>
                                    
                                    </div>
                                <div>
                                    <h5>Resources</h5>
                                    <a>Knowledge Center</a>
                                    <a>Blog</a>
                                    </div>
                                <div>
                                    <h5> Support</h5>
                                    <a>Customer Support</a>
                                    <a>Price</a>
                                    <a>Pricing</a>
                                   </div>
                             </div>
            </div>

            <div>

            </div>
        </footer>
    )
}

export default Footer