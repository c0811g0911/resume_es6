import React from 'react';
import moment from 'moment';

const Edutcation = props => {
    const getEdutcation = props.educationData.map(function(item,index){
        const startDate = moment(item.startDate).format('MMM, YYYY');
        const endDate = moment(item.endDate).format('MMM, YYYY');

        return (
            <div key={index}>
                <h3>{item.studyType} {item.area}</h3>
                <h4>{item.institution}</h4>
                <p>Studied : {startDate} - {endDate}</p>
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