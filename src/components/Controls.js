import React from 'react'
import { Button } from '@material-ui/core';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';


const Controls = ({ start, reset, pause, status }) => (
    
        <div className="controls">
            {!status && (
                <Button onClick={start} className="start" variant="contained">
                    <PlayCircleFilledOutlinedIcon />
                </Button>
            )}

            {status === 'DONE' && (
                <Button onClick={start} className="start" variant="contained">
                    <ReplayOutlinedIcon />
                </Button>
            )}

            {(status === 'PAUSED' || status === 'ONGOING') && (
                <div>
                    <Button onClick={pause} className={status === 'PAUSED' ? 'resume' : 'pause'} variant="contained">
                        {(status === 'paused') ? <PlayCircleFilledOutlinedIcon /> : <PauseCircleFilledOutlinedIcon />}
                    </Button>
                    <Button onClick={reset} className='reset' variant="contained">
                        <ReplayOutlinedIcon />
                    </Button>
                </div>
            )}


        </div>
    
)

export default Controls