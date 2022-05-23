import React from 'react';
import styled from 'styled-components';
import Intro from './component/Intro';
import Vision from './component/Vision';
import Strategies from './component/Strategies';
import Solutions from './component/Solutions';
import Footer from '../../static/component/Footer';
import { backgroundImage } from '../../static/data/LandingData';


const StyledBox = styled.div`
    .container{ 
        scroll-behavior: smooth;
        height: 100vh;
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar { width: 0; background: transparent;}
    .container > div { scroll-snap-align: start;}
`;

const Landing = () => {

    return (
        <StyledBox className='landing'>
            <div className='container' id='landing-container'>
                <div><Intro bg={backgroundImage[0]}/></div>
                <div><Vision bg={backgroundImage[1]}/></div>
                <div><Strategies bg={backgroundImage[2]}/></div>
                <div><Solutions bg={backgroundImage[3]}/></div>
                <Footer />
            </div>
        </StyledBox>
    );
}

export default React.memo(Landing);