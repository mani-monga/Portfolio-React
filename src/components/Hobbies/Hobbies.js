import React from 'react';
import "./Hobbies.css"

function Hobbies() {
  return (
    <div className='HobbiesWrapper'>
        <h2 className="hobbiesHeading">Hobbies & Interests</h2>
        <div className="hobbiesCardContainer">
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/d3bX85KN/image.png"/>
                <h5>Workout</h5>
            </div>
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/sDJqB9Nm/image.png"/>
                <h5>Travelling</h5>
            </div>
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/kMHzWgJ6/image.png"/>
                <h5>Coding</h5>
            </div>
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/vTFqG46D/image.png"/>
                <h5>Dancing</h5>
            </div>
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/FKPqjFkH/image.png"/>
                <h5>Gaming</h5>
            </div>
            <div className="hobbiesCard">
                <img src="https://i.postimg.cc/DzrX4mSt/image.png"/>
                <h5>Listening To Music</h5>
            </div>
        </div>
    </div>
  )
}

export default Hobbies