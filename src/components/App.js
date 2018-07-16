import React,{ PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';

const App = props => {
    const profileData = props.jsonObj.basics;
    const aboutData = props.jsonObj.sumary;
    const workData = props.jsonObj.work;
    const skillData = props.jsonObj.skills;
    const educationData = props.jsonObj.education;
    console.log('data',props.jsonObj);

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

export default App;