
import React from 'react';
import ProgressCount from './ProgressCount';


const progressItems=[
    
    
    {
        'name':'React Js',
        'percentage':85
    },
    {
        'name':'MongoDB',
        'percentage':80
    },
    {
        'name':'Node Js',
        'percentage':80
    },
    // {
    //     'name':'Express Js',
    //     'percentage':80
    // },
    {
        'name':'Java-Script',
        'percentage':85
    },

    {
        'name':'Material-UI',
        'percentage':85
    },
    {
        'name':'Bootstrap',
        'percentage':95
    },
    {
        'name':'Tailwind',
        'percentage':90
    },
    {
        'name':'CSS',
        'percentage':90
    },
    {
        'name':'HTML',
        'percentage':90
    }
    
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