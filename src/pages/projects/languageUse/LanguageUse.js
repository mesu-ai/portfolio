import React from 'react';
import ProgressCount from '../../about/progress/ProgressCount';

const LanguageUse = ({projectFind}) => {
    
    
    if(projectFind !=null){

      var  projectLanguages=projectFind?.language;
      console.log(projectLanguages);

    }
    


    return (
        <div>
            {
            projectLanguages &&
                projectLanguages.map(item=><ProgressCount item={item} key={Math.random()}></ProgressCount>)

            }
            
        </div>
    );
};

export default LanguageUse;