import React, { Component } from 'react';
import ImageWithText from './ImageWithText';

const content = [
    {image:"https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/Black-and-white-beach-570x377.jpg", 
    text:"Your mistakes will be noticed and critisized faster than recognizing and appreciating your good work.", aos:"fade-up"},
    {image:"https://blinq.art/blog/wp-content/uploads/2018/04/blinq-art-black-white-default.jpg",
    text:"Master has failed more times than the beginner has even tried.", aos:"flip-right"},
    {image:"https://thumbs.dreamstime.com/b/portrait-baboon-black-white-format-portrait-baboon-black-white-format-black-background-close-up-133347790.jpg",
    text:"Schools teach you to become a professional to work for an organization, but you should teach yourself to build your own.",aos:"zoom-in-up"},
    {image:"https://www.amateurphotographer.co.uk/wp-content/uploads/2019/01/BW-using-curves.jpg", 
    text:"God is the personification of FEAR before human harms others undeservingly, HOPE before someone waits for expected results for his/her efforts, MOTIVATION for people to continue doing good to others so that some day the good will come to them as well.", aos:"zoom-out-up"},
    {image:"https://images6.fanpop.com/image/photos/39700000/Black-and-White-horse-black-and-white-photography-39760882-511-512.jpg", text:"Money is not important- only rich says. Beauty is not important- only beautiful says."},
    {image:"https://images.fineartamerica.com/images-medium-large-5/elephant-approach-from-the-front-johan-swanepoel.jpg",text:"Everyone is behind quick profit. People always want the best at a cheap price. It requires extreme quality of talent to chose an average one and make it the best."},
    {image:"https://media.istockphoto.com/photos/skyscrapers-from-below-lower-manhattan-picture-id1184661675?k=6&m=1184661675&s=612x612&w=0&h=11Vz40tiSWPecLwQa7qA173cUEsK6MRIMz3VEMjS4CE=", text:"Work does not just include some physical effort for bringing useful outcome, but it also includes the thought processes involved, time taken for it as well as the needed breaks to revive energy."},
    {text:"White produces all colors, while Black absorbs them all."}
]

const ImageTextSection = ()=>{
    return(
        <>
        {content.map((c,index)=><ImageWithText key={index} image={c.image} text={c.text} aos={c.aos}/>)}
        </>
    );
}

export default ImageTextSection;