import React, { Component } from 'react';

const Navigation= ()=>{
    return(
        <>
            <nav class="navigation">
                <div class="brand-container">
                    <a href="#"><img className="brand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WghkF8t8gHX2dpKeqPk4cqKUMJsi4JMgLA&usqp=CAU" alt="image"/></a>
                </div>
                <div>
                    <h1>Black and White Thoughts</h1>
                </div>
                <ul>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;