import React from 'react'

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
            return `${name} is ${status}`
        } else{
            return ''
        }
    }

    return(
        <div className="time-display">
            <p>{formatDisplay(selected.name, status)}</p>
            <h1>{formatTime(time)}</h1>
        </div>
    );
}

export default TimeDisplay