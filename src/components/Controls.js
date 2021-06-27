import React from 'react'

const Controls = ({ start, reset, pause, status }) => (
    <div className="controls">
        {!status && (
            <button onClick={start} className="start">
                Start Timer
            </button>
        )}

        {status === 'Finished' && (
            <button onClick={start} className="start">
                Restart Timer
            </button>
        )}

        {(status === 'Paused' || status === 'Running') && (
            <div>
                <button onClick={pause} className={status === 'Paused' ? 'resume' : 'pause'}>
                    {status === 'Paused' ? 'Resume' : 'Pause'}
                </button>
                <button onClick={reset} className='reset'>
                    Reset
                </button>
            </div>
        )}


    </div>
)

export default Controls