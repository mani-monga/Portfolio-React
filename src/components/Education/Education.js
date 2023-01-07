import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css'

function Education() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section className="footer">
            <div className="Containerslist">

                <div className="Containers">
                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
                    <span className="Info">HTML</span>
                </div>

                <div className="Containers">
                    <img src="https://cdn-icons-png.flaticon.com/512/1260/1260775.png" alt="" />
                    <span className="Info">ReactJS</span>
                </div>
                <div className="Containers">
                    <img src="https://img.icons8.com/color/344/redux.png" alt="" />
                    <span className="Info">Redux</span>
                </div>

                <div className="Containers">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                    <span className="Info">CSS</span>
                </div>
                <div className="Containers">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                    
                    <span className="Info">Java Script</span>
                </div>
                <div className="Containers">
                    <img src="https://img.icons8.com/color/344/bootstrap.png" alt="" />
                  
                    <span className="Info">BootStrap</span>
                </div>
                <div className="Containers">
                    <img src="https://img.icons8.com/color/344/material-ui.png" alt="" />
                    <span className="Info">MaterialUI</span>
                </div>
                <div className="Containers">
                    <img src="https://img.icons8.com/color/344/firebase.png" alt="" />
                    <span className="Info">FireBase</span>
                </div>
                <div className="Containers">
                    <img src="https://lxspandora.gallerycdn.vsassets.io/extensions/lxspandora/vscode-styled-components-snippets/1.0.2/1506443337800/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                    <span className="Info">Styled Components</span>
                </div>
                <div className="Containers">
                    <img src="https://th.bing.com/th/id/OIP.nE7TDoxUw1llwHxzVsc9ugHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
                    <span className="Info">C++</span>
                </div>
                <div className="Containers">
                    <img src="https://img.icons8.com/ios-glyphs/344/sql.png" alt="" />
                    <span className="Info">SQL</span>
                </div>
                
            </div>
            
            <marquee className="mobileMarqueeWrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
               
                    <img src="https://cdn-icons-png.flaticon.com/512/1260/1260775.png" alt="" />
                
                    <img src="https://img.icons8.com/color/344/redux.png" alt="" />
                
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                
                    <img src="https://img.icons8.com/color/344/bootstrap.png" alt="" />
                
                    <img src="https://img.icons8.com/color/344/material-ui.png" alt="" />
                
                    <img src="https://img.icons8.com/color/344/firebase.png" alt="" />
                
                    <img src="https://lxspandora.gallerycdn.vsassets.io/extensions/lxspandora/vscode-styled-components-snippets/1.0.2/1506443337800/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                
                    <img src="https://th.bing.com/th/id/OIP.nE7TDoxUw1llwHxzVsc9ugHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
                
                    <img src="https://img.icons8.com/ios-glyphs/344/sql.png" alt="" />
                
            </marquee>
            <div className="details">

           
                <div className="qualifications">

                    <h3>Education Qualifications</h3>
                    <div>
                        <span>High School</span>
                        <span>9.6 CGPA</span>
                    </div>
                    <div>
                        <span>Senior Secondary School</span>
                        <span>91.3 %</span>
                    </div>
                    <div>
                        <span>B.tech(Information Technology)</span>
                        <span>9.128 GPA</span>
                    </div>

                </div>

                <div className="fiverr">
                    <h3>Want me to Build Your Website</h3>
                    <a href='https://www.fiverr.com/share/26eq6k'>Hire Me On Fiverr</a>
                </div>
                

                <div className="contact">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h3>Home</h3>
                            <p>Haldwani Uttrakhand Distt. Nainital</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h3>Whatsapp</h3>
                            <p>+91-8126508205</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <span>
                            <h3>Mail Me Your Query</h3>
                            <p>mni.monga02@gmail.com</p>
                        </span>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Education