import React from 'react'
import './TimeDisplay.css';

const TimeDisplay = ({time, status, selected}) => {
    function formatTime(time){
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);
        const mdisplay = (minutes > 9 ? minutes : `0${minutes}`)
        const sdisplay = (seconds > 9 ? seconds : `0${seconds}`)
        
        return `${mdisplay}:${sdisplay}`;
    }

    function formatDisplay(name, status){
        if(status){
            return `${name} IS ${status}`
        } else{
            return (name === 'WORK' ? `Time for work!` : `Time for a break!`)
        }
    }

    return(
        <div className="time-display">
            <p>{formatDisplay(selected.name, status)}</p>
            <p id="timer">{formatTime(time)}</p>
        </div>
    );
}

export default TimeDisplay