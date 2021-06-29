import React from 'react'
import { Button } from '@material-ui/core';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';
import Grid from '@material-ui/core/Grid'

const Controls = ({ start, reset, pause, status }) => (

    <div className="controls">

        {!status && (
            <Button onClick={start} className="start" variant="text" size="large">
                <PlayCircleFilledOutlinedIcon />
            </Button>
        )}


        {status === 'DONE' && (
            <Button onClick={start} className="start" variant="text" size="large">
                <ReplayOutlinedIcon />
            </Button>
        )}

        <Grid container spacing={10} >
            <Grid item>
                {(status === 'PAUSED' || status === 'ONGOING') && (
                    <div>
                        <Button onClick={pause} className={status === 'PAUSED' ? 'resume' : 'pause'} variant="text" size="large">
                            {(status === 'paused') ? <PlayCircleFilledOutlinedIcon /> : <PauseCircleFilledOutlinedIcon />}
                        </Button>
                        <Button onClick={reset} className='reset' variant="text" size="large">
                            <ReplayOutlinedIcon />
                        </Button>
                    </div>
                )}
            </Grid>


        </Grid>
    </div>
)

export default Controls