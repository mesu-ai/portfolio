import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressCount = ({item}) => {
    const {courseName,percentage}=item;
    
    return (
        <div>
            <h6 className="fw-bold">{courseName}</h6>
            <ProgressBar  completed={percentage} maxCompleted={100} />
            
        </div>
    );
};

export default ProgressCount;