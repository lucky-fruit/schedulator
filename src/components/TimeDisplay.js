import React from 'react'
import Grid from '@material-ui/core/Grid';

const TimeDisplay = ({ time, status, selected }) => {
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const mdisplay = (minutes > 9 ? minutes : `0${minutes}`)
        const sdisplay = (seconds > 9 ? seconds : `0${seconds}`)

        return `${mdisplay}:${sdisplay}`;
    }

    function formatDisplay(name, status) {
        if (status) {
            return `${name} IS ${status}`
        } else {
            return (name === 'WORK' ? `TIME FOR WORK!` : `TIME FOR A BREAK`)
        }
    }

    return (
        <div className="time-display">
            <Grid container direction="column-reverse" alignItems="center">
                <Grid item>
                    <h5>{formatDisplay(selected.name, status)}</h5>
                </Grid><Grid item>
                    <h1>{formatTime(time)}</h1>
                </Grid>
            </Grid>
        </div>
    );
}

export default TimeDisplay