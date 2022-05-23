import React from 'react';
import styled from 'styled-components';
import { info1, info2, mediaInfo, rightsDesc } from '../data/FooterData';


const StyledBox = styled.div`
    border-top: 10px solid #0091da;
    color: #333;
    font-family: "Open Sans", "Arial";
    a {
        text-decoration: none;
        color: inherit;
        &:hover{
            text-decoration: underline;
        }
    }
    // WHITE ROW1
    .content1{
        display: flex;
        flex-direction: column;
        background: #fff;
        .content1-1{
            border-bottom: 1px solid rgb(246,246,246);
            padding: 2rem 3rem 1rem 3rem;
            text-align: right;
            font-size: 18px;
            color: #666;
            .icon{ padding-left: 1rem;}
            .icon-copyright{
                font-size: 9px;
                color: rgb(246,246,246);
            }
        }
        .content1-2{
            padding: 2rem 5rem 2rem 3rem;
            font-size: 18px;
            color: #00338d;
            .content1-2-1{
                border: 2px solid;
                margin-right: 3rem;
                border-radius: 8px;
                padding: 0 1rem 1rem 1rem;
                color: #0091da;
                width: 100%;
                h3{ font-size: 18px; }
                p {
                    color: #333;
                    font-size: 16px;
                    line-height: 24px;
                    margin: 0;
                }
            }
        }
        .tab{ margin-right: 60px;}
    }
    // GRAY 
    .content2{
        padding: 1.5rem 3rem 2rem 3rem;
        color: #333;
        background: #dedede;
        font-size: 14px;
    }
    .row{
            display: inline-flex;
            justify-content: space-between;
    }
    .col{
        display: flex;
        flex-direction: column;
    }
    

    
`;


const Footer = ({ language, display }) => {
    return (
        <StyledBox display={display}>
            <div className='content1'>
                <div className='row content1-1'>
                    <div className='row'>
                        {info1.map(i => <a key={i.name} href={i.link} target='blank' className='tab'><div>{i.name}</div></a>)}
                    </div>

                    <div className='col'>
                        <div className='tab2'>
                            {mediaInfo.map(i =>
                                <a key={i.name} href={i.link} target='blank' className='icon'><img width='32px' src={i.src} alt='media' /></a>
                            )}
                        </div>
                        <div className='icon-copyright'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>


                <div className='row content1-2'>
                    <div className='row'>
                        {info2.map(i => <a key={i.name} href={i.link} target='blank' className='tab'><div>{i.name}</div></a>)}
                    </div>
                </div>


            </div>
            <div className='content2'>
                <p>{rightsDesc[0]}</p>
                <p>{rightsDesc[1]}</p>
            </div>

        </StyledBox>
    );
}

export default Footer;