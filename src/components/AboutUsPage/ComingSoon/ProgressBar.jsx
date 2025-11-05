import { useEffect, useState } from "react";

const startDate = new Date(2025, 7, 23, 2, 24, 0);

function ProgressBar({ endDate }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = startDate.getTime();
    const end = new Date(endDate).getTime();
    const totalDuration = end - start;

    function updateProgress() {
      const now = new Date().getTime();
      const elapsed = now - start;
      const newProgress = Math.min(elapsed / totalDuration, 1);
      setProgress(newProgress);
    }
    const intervalID = setInterval(updateProgress, 1000);
    return () => clearInterval(intervalID);
  }, [endDate]);

  return (
    <div className="progress-bar-container">
      <progress
        className="progress-bar"
        value={progress}
        max={1}
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
        aria-label="Launch progress"
      />
    </div>
  );
}

export default ProgressBar;
