import React from 'react'
import { Link } from 'react-router-dom'

import './Profile.css'

function Profile() {
    return (
        <>
            <div className="profile">

                <div className="image">
                    <img src="https://i.postimg.cc/L89hvy67/image.png" alt="" />
                </div>

                <div className="intro">
                    <h2 >This is me, Mani Monga <br /></h2>
                    <div>
                        Software engineer with ability to learn and collaborate in rapidly changing environments and compositions. Worked 
                        hours of bootcamp structure, learning <strong>JavaScript</strong> and <strong>ReactJs.</strong> Eager to tackle web development/design challenges to 
                        achieve lasting impacts on user experience. My goal is to follow my passion and learn new technologies in this field
                    </div>
                    <Link className='btn' to={"/Projects"}>Projects</Link>
                    
                </div>
                
            </div>
        </>
    )
}

export default Profile