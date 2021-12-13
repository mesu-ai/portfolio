import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressCount = ({item}) => {
    const {name,percentage}=item;
    
    return (
        <div className="ms-2 mt-1">
            <h6 className="fw-bold text-start">{name}</h6>
            <ProgressBar  completed={percentage} maxCompleted={100} />
            
        </div>
    );
};

export default ProgressCount;