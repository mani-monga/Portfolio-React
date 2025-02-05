import React, { useEffect } from 'react';
import data from './Data';
import './Projects.css'

function Projects() {


    return (
        <>
            <div className="projectcontainer">
                <h1 className='heading'>Projects</h1>

                <div>
                    {
                        data.map((elem) => {
                            if (elem.ImageURL) {
                                return (
                                    <>
                                        <div className="cardcontainer" id={elem.id} key={elem.id}>
                                            <div className="card">
                                                <div className="webimage">
                                                    <img src={elem.ImageURL} alt="Image failed To Load" />
                                                </div>
                                                <div className="text">
                                                    <h2>{elem.Name}</h2>
                                                    <p>{elem.Description}</p>
                                                    <div className="techcontainer">
                                                        {
                                                            elem.TechStack.map((item) => {
                                                                return (

                                                                    <li className='skills' key={item.id}>
                                                                        <img width={10} height={10} src={item.Icon} alt="#" />
                                                                        &nbsp; {item.Name}
                                                                    </li>

                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='ButtonGrp'>

                                                        {
                                                            elem.GithubURl ? <a href={elem.GithubURl} className="herobtn">Github</a> : false
                                                        }
                                                        {
                                                            elem.HostURL ? <a href={elem.HostURL} className="herobtn newtab" target="_blank">Check Out <i className="fa fa-external-link"></i></a> : false
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Projects