import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { motion } from 'framer-motion';

function Profile() {
    return (
        <motion.div
            className="profile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.div className="image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src="https://i.postimg.cc/L89hvy67/image.png" alt="Profile" />
            </motion.div>

            <div className="intro">
                <h2>
                    Hi, I'm <span className="name-highlight">Mani Monga</span>
                </h2>
                <p>🚀 A results-driven <strong>Software Engineer</strong> specializing in <strong>JavaScript</strong> and <strong>React.js</strong>,
                    with a deep focus on <strong>A/B testing, CRO, and frontend optimization</strong>. I build high-performance, user-centric
                    web experiences that enhance engagement and accessibility.
                </p>
                <ul>
                    <li>✅ <strong>A/B Testing & CRO</strong> – Data-driven experimentation to maximize conversions 📊</li>
                    <li>✅ <strong>Frontend Development</strong> – Crafting seamless, responsive UIs with HTML, CSS, JS 🎨</li>
                    <li>✅ <strong>React.js & JavaScript</strong> – Building dynamic, interactive web applications ⚛</li>
                    <li>✅ <strong>Personalization & UX/UI</strong> – Enhancing user journeys for better engagement 🎯</li>
                    <li>✅ <strong>Optimization Tools</strong> – Experienced with Convert, Optimizely, and VWO 🛠️</li>
                </ul>
                <p>💡 Passionate about leveraging <strong>data-driven insights</strong> to drive impactful design and development
                    decisions. Always eager to explore new technologies and push the boundaries of digital experiences! 🚀
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }} // Ensures it stays inside
                >
                    <Link className='btn' to={'/Projects'}>View Projects</Link>
                </motion.div>

            </div>
        </motion.div>
    );
}

export default Profile;
