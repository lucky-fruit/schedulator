import React from 'react'

const Controls = ({ start, reset, pause, status }) => (
    <div className="controls">
        {!status && (
            <button onClick={start} className="start">
                Start Timer
            </button>
        )}

        {status === 'done' && (
            <button onClick={start} className="start">
                Restart Timer
            </button>
        )}

        {(status === 'paused' || status === 'ongoing') && (
            <div>
                <button onClick={pause} className={status === 'paused' ? 'resume' : 'pause'}>
                    {status === 'paused' ? 'Resume' : 'Pause'}
                </button>
                <button onClick={reset} className='reset'>
                    Reset
                </button>
            </div>
        )}


    </div>
)

export default Controls