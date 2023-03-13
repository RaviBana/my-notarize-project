import React from 'react'
import frame2 from './../assets/Frame 118 (1).png';
import frame3 from './../assets/Frame 118 (2).png';
import frame4 from './../assets/Frame 118 (3).png'
import frame1 from './../assets/Frame 118.png'
import Stroke from './../assets/Stroke-1.png'


const Container5 = () => {
    return (
        <div className='container5 d-flex justify-content-between'>
            <div className='first-container5'>


                <div className='container5-first d-flex justify-content-around align-items-center'>
                    <div className='container5-second align-items-center d-flex'>
                        <img src={frame1} alt="" width={'30px'} />
                        <button className='btn btn-primary-outline '>Upload PDF Documents</button>
                    </div>
                    <img src={Stroke} alt="" width={'15px'} height={'19px'} />
                </div>
                <div className='container5-first d-flex justify-content-around align-items-center'>
                    <div className='container5-second align-items-center d-flex'>
                        <img src={frame2} alt="" width={'30px'} />
                        <button className='btn btn-primary-outline '>Upload PDF Documents</button>
                    </div>
                    <img src={Stroke} alt="" width={'15px'} height={'19px'} />
                    {/* <hr/> */}
                </div>

                <div className='container5-first d-flex justify-content-around align-items-center'>
                    <div className='container5-second align-items-center d-flex'>
                        <img src={frame3} alt="" width={'30px'} />
                        <button className='btn btn-primary-outline '>Upload PDF Documents</button>
                    </div>
                    <img src={Stroke} alt="" width={'15px'} height={'19px'} />
                </div>
                <div className='container5-first d-flex justify-content-around align-items-center'>
                    <div className='container5-second align-items-center d-flex'>
                        <img src={frame4} alt="" width={'30px'} />
                        <button className='btn btn-primary-outline '>Upload PDF Documents</button>
                    </div>
                    <img src={Stroke} alt="" width={'15px'} height={'19px'} />
                </div>
            </div>


            <div className='third-container5 d-flex flex-column justify-content-center align-items-center'>
                <div className='third1-container5 d-flex flex-column justify-content-center'>
                    <div></div>
                    <div></div>
                </div>

                <div className='third2-container5'>
                <div className='third3-container5'>
                        <div></div>
                        <div></div>
                    </div>

                    <div className='third4-container5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container5