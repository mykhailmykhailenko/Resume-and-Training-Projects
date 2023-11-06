import React from 'react';
import ImageWrapper from './ImageWrapper';

const Image = () => {
    
    return (
    <>
        <ImageWrapper
            width="200px"
            height="300px"
            onClick={()=>{console.log('hello')}}
        >
            <img src='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg' width="100%" alt=''/>
        </ImageWrapper>
        <ImageWrapper
            width="200px"
            height="300px"
            title="My super picture"
        >
            <img src='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg' width="100%" alt=''/>
        </ImageWrapper>
    </>
    )
}

export default Image;
