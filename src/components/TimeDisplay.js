import React from 'react'
import {Card} from 'react-bootstrap'

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
            <Card>
                <Card.Title>{formatTime(time)}</Card.Title>
                <Card.Text>{formatDisplay(selected.name, status)}</Card.Text>
            </Card>
        </div>
    );
}

export default TimeDisplay