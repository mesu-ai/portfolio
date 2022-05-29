
import React from 'react';
import ProgressCount from './ProgressCount';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


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
    
    // 'Bootstrap','Tailwind','Material-ui',
    const data = {
        labels: ['JavaScript', 'React Js', 'NodeJs', 'ExpressJs', 'RestApi', 'HTML','CSS','MongoDB'],
        datasets: [
          {
            label: 'Knowledge of performance',
            data: [8, 8, 7, 6, 9, 9, 9, 9],
            backgroundColor: [
              'rgba(245, 224, 66)',
              'rgba(66, 203, 245)',
              'rgba(66, 81, 245)',
              'rgba(245, 34, 136)',
              'rgba(34, 245, 97)',
              'rgba(199, 34, 245, 0.2)',
              'rgba(245, 34, 34)',
              'rgba(29, 171, 31)',
            
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

   
    
    return (
        <div className="px-5 text-start align-items-lg-center">
            {/* {
                progressItems.map(item=><ProgressCount item={item} key={Math.random()}></ProgressCount>)

            } */}
            
            <Doughnut data={data}
            // options={...}
            // data={...}
            // {...props}
            />
            

        </div>
        
    );
};

export default Progress;