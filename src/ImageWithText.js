import React, { Component } from 'react';

const ImageWithText = ({image="https://i.pinimg.com/236x/b3/aa/89/b3aa89358e5a07d6b7ef8a2ea5f2306a--stunning-photography-white-photography.jpg", text, aos="flip-right"})=>{
    return(
        <>
            <section className="section-image-text">
                <picture className="section-image" data-aos={aos} data-aos-duration="2500">
                    <source srcSet={image}/>
                    <img src={image} alt=""/>
                </picture>
                <p className="section-text" data-aos="fade-left" data-aos-duration="2500">{text}</p>
        </section>
        </>
    );
}

export default ImageWithText;