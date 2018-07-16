import React from 'react';

const Edutcation = props => {
    const getEdutcation = props.educationData.map(function(item,index){
        return (
            <div key={index}>
                <h3>{item.studyType} {item.area}</h3>
                <h4>{item.institution}</h4>
                <p>Studied : {item.startDate} to {item.endDate}</p>
            </div>
        )
    });

    return (
        <section className="education">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education </h2>
            {getEdutcation}
        </section>
    )
};

export default Edutcation;