import React, { useEffect, useState } from 'react'

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;
        if (progress >= 1) setIsRunning(false);
        const intervalID = setInterval(() => setProgress(prev => prev + 0.000005/6), 10);
        return () => clearInterval(intervalID);
      }, [isRunning, progress])

  return (
    <div className='progress-bar-container'>
        <progress className="progress-bar" value={progress} />  
    </div>
  )
}

export default ProgressBar
