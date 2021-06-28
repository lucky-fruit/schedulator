import React from 'react'
import {Button} from 'react-bootstrap'

const Controls = ({ start, reset, pause, status }) => (
    <div className="controls">
        {!status && (
            <Button onClick={start} className="start">
                Start Timer
            </Button>
        )}

        {status === 'done' && (
            <Button onClick={start} className="start">
                Restart Timer
            </Button>
        )}

        {(status === 'paused' || status === 'ongoing') && (
            <div>
                <Button onClick={pause} className={status === 'paused' ? 'resume' : 'pause'}>
                    {status === 'paused' ? 'Resume' : 'Pause'}
                </Button>
                <Button onClick={reset} className='reset'>
                    Reset
                </Button>
            </div>
        )}


    </div>
)

export default Controls