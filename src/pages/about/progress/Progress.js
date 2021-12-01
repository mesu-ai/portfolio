
import React from 'react';
import ProgressCount from './ProgressCount';


const progressItems=[
    
    {
        'courseName':'Java-Script',
        'percentage':80
    },
    {
        'courseName':'HTML',
        'percentage':85
    },
    {
        'courseName':'CSS',
        'percentage':90
    },
    {
        'courseName':'Database',
        'percentage':80
    },
]

const Progress = () => {

   
    
    return (
        <div className="px-5 text-start align-items-lg-center">
            {
                progressItems.map(item=><ProgressCount item={item} key={Math.random()}></ProgressCount>)

            }
            
            

        </div>
        
    );
};

export default Progress;