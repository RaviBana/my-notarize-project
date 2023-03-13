import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'

import profile from './../assets/Rectangle 24.png'
const Container7 = () => {
    return (
        <div className='container7'>
            {/* <div className='first1-container7'> */}

            <div className='first-container7'>
                <h4>Our clients love us</h4>
                <p>See what people around the world have to say about NotarizeHQ.</p>
            </div>
            <div className='second-container7'>
                <div className='second1-container7'>
                    <div className='second3-container7'>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                    </div>
                    <h1>Simple and easy to use</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus consectetur imperdiet odio pellentesque risus rhoncus. Viverra in massa sollicitudin suspendisse cursus a.</p>

                    <div className='second2-container7'>
                        <img src={profile} alt="" />
                        <span>Davidson</span>
                        <span>Realton</span>
                    </div>
                </div>

                <div className='second1-container7'>
                    <div className='second3-container7'>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                    </div>
                    <h1>Simple and easy to use</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus consectetur imperdiet odio pellentesque risus rhoncus. Viverra in massa sollicitudin suspendisse cursus a.</p>

                    <div className='second2-container7'>
                        <img src={profile} alt="" />
                        <span>Davidson</span>
                        <span>Realton</span>
                    </div>
                </div>

                <div className='second1-container7'>
                    <div className='second3-container7'>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                        <i><AiOutlineStar /></i>
                    </div>
                    <h1>Simple and easy to use</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus consectetur imperdiet odio pellentesque risus rhoncus. Viverra in massa sollicitudin suspendisse cursus a.</p>

                    <div className='second2-container7'>
                        <img src={profile} alt="" />
                        <span>Davidson</span>
                        <span>Realton</span>
                    </div>
                </div>


                

              
            </div>
            {/* </div> */}

            <div className='third-container7'>
               <i><BsArrowLeftCircle/></i>
               <i><BsArrowRightCircle/></i>
            </div>
        </div>
    )
}

export default Container7