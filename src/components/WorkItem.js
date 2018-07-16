import React  from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startDate = moment(props.workItemData.startDate).format('MMM','YYYY');
        let endDate = null;
        if(props.workItemData.endDate !== ''){
            endDate = moment(props.workItemData.endDate).format('MMM','YYYY');
        } else {
            endDate = 'Present';
        }

        return <span className="startDate">{startDate} to {endDate}</span>
    }

    const getHightLights = props.workItemData.highlights.map(function(item,index){
        return (
            <li key={index}>
                {item}
            </li>
        )
    });

    return (
        <div className="workItem">
            <h3>
                {props.workItemData.position}, <span>{props.workItemData.company}</span>
            </h3>
            <p className="workDates">{getWorkDates()}</p>
            <p>{props.workItemData.sumary}</p>
            <ul>
                {getHightLights}
            </ul>
        </div>
    )
};

export default WorkItem;