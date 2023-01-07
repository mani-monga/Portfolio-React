import React from 'react';
import './Social.css'

function Social() {
    return (
        <>
            <nav className="social">
                <ul>
                    <li className="twt"><a href="https://twitter.com/ManiMonga5" target="_blank">Twitter <i className="fa fa-twitter"></i></a></li>
                    <li className="fa"><a href="https://m.facebook.com/mani.monga.1656?ref=bookmarks" target="_blank">Facebook <i className="fa fa-facebook"></i></a></li>
                    <li className="insta"><a href="https://www.instagram.com/techno.phyle_/" target="_blank">Instagram <i className="fa fa-instagram"></i></a></li>
                    <li className="linkin"><a href="https://www.linkedin.com/in/mani-monga-52602217b/" target="_blank">LinkedIN <i className="fa fa-linkedin"></i></a></li>
                    <li className="git"><a href="https://github.com/mani-monga" target="_">GitHub <i className="fa fa-github"></i></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Social;