
import React from 'react';
import ProgressCount from './ProgressCount';


const progressItems=[
    
    {
        'name':'Java-Script',
        'percentage':80
    },
    {
        'name':'HTML',
        'percentage':85
    },
    {
        'name':'CSS',
        'percentage':90
    },
    {
        'name':'Database',
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