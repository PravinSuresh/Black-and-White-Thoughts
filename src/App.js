import { React, useEffect } from 'react';
import Hero from './Hero';
import Navigation from './Navigation';
import ImageTextSection from './ImageTextSection';
import Footer from './Footer';
import AOS from 'aos';
import "aos/dist/aos.css";
const App = ()=>{
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return(
        <>
        <Navigation />
        <Hero image={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"} alt={"scenary"} />
        <ImageTextSection />
        <Footer />
        </>
    )
}

export default App;
