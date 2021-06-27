import React from 'react'

const TimeDisplay = ({time, status, progress}) => {
    function formatTime(time){
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);
        const mdisplay = (minutes > 9 ? minutes : `0${minutes}`)
        const sdisplay = (seconds > 9 ? seconds : `0${seconds}`)
        
        return `${mdisplay}:${sdisplay}`;
    }

    return(
        <div className="time-display">
            <p>{status}</p>
            <h1>{formatTime(time)}</h1>
        </div>
    );
}

export default TimeDisplay