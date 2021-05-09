import React, { Component } from 'react';

const Hero = ({image, alt})=>{
    return(
        <div>
        <section className="hero">
            <picture className="hero-image">
                <source srcSet="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"/>
                <img src="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/photo-effects/make-an-image-black-and-white/make-image-black-and-white.jpg" alt=""/>
            </picture>
        </section>
        </div>
    );
}

export default Hero;