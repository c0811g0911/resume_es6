import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';

const ResumeMain = props => {
    const profileData = props.jsonObj.basics;
    const aboutData = props.jsonObj.basics.summary;
    const workData = props.jsonObj.work;
    const skillData = props.jsonObj.skills;
    const educationData = props.jsonObj.education;

    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-4">
                    <div className="inner">
                        <Profile profileData={profileData} />
                    </div>
                </aside>
                <main className="col-md-8">
                    <div className="inner">
                        <About aboutData={aboutData} />
                        <Work workData = {workData} />
                        <Skills skillData = {skillData} />
                        <Education educationData = {educationData} />
                    </div>
                </main>
            </div>
        </div>
    )
};

ResumeMain.propTypes = {
    jsonObj: PropTypes.object.isRequired,
  };

export default ResumeMain;