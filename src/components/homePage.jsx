import { GoProjectSymlink } from "react-icons/go";
import { FaReact,FaNodeJs   } from "react-icons/fa";
import { SiMongodb,SiExpress  } from "react-icons/si";
import myImage from '../assets/profile.jpg'

const PortfolioHome= () => {
  return (
    <section className="home-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 align-items-center">
                    <div className="txt-main-div">
                        <div className="main-txt">This is your developer <span className="myname">Mishra Jagmohan</span></div>
                        <div className="para-txt">I am a final year computer Engineering student specializing in full-stack development with the MERN stack. I love creating interactive, user-focused web applications and am eager to gain hands-on experience through new projects and internships.</div>
                        <a href="#" className="projects-btn">Projects<GoProjectSymlink className="contact-icons"/></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-div">
                        <FaReact  className="react-icon"/>
                        <SiExpress   className="express-icon"/>
                        <FaNodeJs  className="node-icon"/>
                        <SiMongodb  className="mongodb-icon"/>
                        <img className="profile-img" src={myImage} alt="Profile Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PortfolioHome;
