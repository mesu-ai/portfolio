import React from 'react';
import ProgressCount from '../../about/progress/ProgressCount';

const LanguageUse = ({projectFind}) => {
    
    
    if(projectFind !=null){

      var  projectLanguages=projectFind?.language;
    //   console.log(projectLanguages);

    }
    


    return (
        <div className="p-5 ">
            {
            projectLanguages &&
                projectLanguages.map(item=><ProgressCount item={item} key={Math.random()}></ProgressCount>)

            }
            
            <h5 className=" text-light mt-3 p-2 rounded-pill  ">Language Use</h5>
            
        </div>
    );
};

export default LanguageUse;