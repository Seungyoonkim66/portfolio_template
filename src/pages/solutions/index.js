import React from 'react';
import Solutions from '../landing/component/Solutions';
import { backgroundImage } from '../../static/data/LandingData';
const SolutionsLanding = () => {

    return (
        <div className='solutions'>
            <Solutions bg={backgroundImage[2]}/>
        </div>
    );
}

export default React.memo(SolutionsLanding);