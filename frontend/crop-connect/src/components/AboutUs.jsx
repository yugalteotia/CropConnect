import React from 'react';
import '../css/AboutUs.css'; 

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="about-us-intro">
                <h1>About Us</h1>
                <p>
                    Welcome to CropConnect, a digital marketplace dedicated to revolutionizing the agricultural supply chain. Our mission is to connect farmers directly with merchants, ensuring a smoother, more efficient process for both parties.
                </p>
            </section>

            <section className="about-us-team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Atharv Phate</h3>
                    <p>Worked in both the parts of project i.e. in frontend as well as in backend.</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Yugal Teotia</h3>
                    <p>Handled all the git related issue and also Worked in the backend and frontend part of the project.</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Asmita Mahajan</h3>
                    <p>Worked in frontend and also in backend part of the project.</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Mayur Badgujar</h3>
                    <p>Worked in frontend and also in backend part of the project.</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Dhanshree</h3>
                    <p>Worked on database part of the project.</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Kshitij Tripathi</h3>
                    <p>Worked in frontend and also in backend part of the project.</p>
                </div>
          
            </section>

            <section className="about-us-contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get in touch with us, please reach out to:</p>
                <ul>
                    <li>Email: cropconnect389@gmail.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li></li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
