import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import { FiUser } from 'react-icons/fi';
import { FaGraduationCap } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div className={classes.imgSpace}>
      <p className='container'>
        Complete your <br /> <span className={classes.reg}>Registration</span> <br /><br />
    
        <div className={`${classes.personal1} ${activeSection === 'personal' ? classes.active : ''}`} onClick={() => setActiveSection('personal')}>
          <FiUser className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'personal' ? classes.activeText : ''}>Personal Details</h5>
            <div className={classes.personal}>Enter Personal Details</div>
          </div>
        </div><br /> 
        <div className={`${classes.personal1} ${activeSection === 'education' ? classes.active : ''}`} onClick={() => setActiveSection('education')}>
          <FaGraduationCap className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'education' ? classes.activeText : ''}>Educational background</h5>
            <div className={classes.personal}>Enter your educational background details</div>
          </div>
        </div><br />
        <div className={`${classes.personal1} ${activeSection === 'professional' ? classes.active : ''}`} onClick={() => setActiveSection('professional')}>
          <GiAchievement className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'professional' ? classes.activeText : ''}>Professional Qualifications</h5>
            <div className={classes.personal}>Enter your professional qualifications</div>
          </div>
        </div><br />

        <div className={`${classes.personal1} ${activeSection === 'kin' ? classes.active : ''}`} onClick={() => setActiveSection('kin')}>
          <FiUser className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'kin' ? classes.activeText : ''}>Next of Kin</h5>
            <div className={classes.personal}>Enter your next of kin details</div>
          </div>
        </div><br />

        <div className={`${classes.personal1} ${activeSection === 'bank' ? classes.active : ''}`} onClick={() => setActiveSection('bank')}>
          <IoWallet className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'bank' ? classes.activeText : ''}>Bank details</h5>
            <div className={classes.personal}>Enter your bank details</div>
          </div>
        </div><br />

        <div className={`${classes.personal1} ${activeSection === 'referees' ? classes.active : ''}`} onClick={() => setActiveSection('referees')}>
          <FiUser className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'referees' ? classes.activeText : ''}>Referees</h5>
            <div className={classes.personal}>Enter your referees</div>
          </div>
        </div><br />

        <div className={`${classes.personal1} ${activeSection === 'work' ? classes.active : ''}`} onClick={() => setActiveSection('work')}>
          <BiSolidShoppingBagAlt className={classes.icon} />
          <div className={classes.personalText}>
            <h5 className={activeSection === 'work' ? classes.activeText : ''}>Work Experience</h5>
            <div className={classes.personal}>Enter your work experience</div>
          </div>
        </div>
      </p>
      <div className={classes.signIn}>
        <BiLeftArrowAlt className={classes.arrowIcon} />
        <span><a href='#'>Sign In</a></span>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
