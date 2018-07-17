import React from 'react';
import ResumeMain from './resume/ResumeMain';
 // load resume file
 const json = require('./resume/resume.json');

 const App = () => {
    return (
        <ResumeMain jsonObj={json}/>
    )
 };

 export default App;