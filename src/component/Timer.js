import React from 'react';

const Timer = (props) => {
    return (
       
        <div className="clock">
        <h1>Timer</h1>
        <h2>{props.h}:{props.m}:{props.s}</h2>
        <div className="hours">
        <p>hours : minutes : seconds</p>  
        </div><div className="but"><button> Start </button> <button> Reset </button></div>
        </div>
       
       
       
       
       
       
        );
    }
    

export default Timer;