import React, { useEffect, useState } from 'react';
import './ComingSoon.css';
import Countdown, { zeroPad } from 'react-countdown';
import { videoBg } from '../../assets/assets';
import { useInView } from 'react-intersection-observer';

function ComingSoon() {
  const {ref: comingSoonRef, inView: comingSoonInView} = useInView();
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You are good to go!</span>
        } else {
            return <div className="coming-soon-countdown">
                <span>{zeroPad(days)}</span>
                <span>{zeroPad(hours)}</span>
                <span>{zeroPad(minutes)}</span>
                <span>{zeroPad(seconds)}</span>
              </div>;
        }
    };

    useEffect(() => {
      if (!isRunning) return;
      if (progress >= 1) setIsRunning(false);
      const intervalID = setInterval(() => setProgress(prev => prev + 0.000005/6), 10);
      return () => clearInterval(intervalID);
    }, [isRunning, progress])

   
  return (
    <section className='coming-soon'>
      <div ref={comingSoonRef} className={`coming-soon-contents ${comingSoonInView ? "animate-in" : ""}`}>
        <div className="coming-soon-text-container">
            <h1 className="coming-soon-title">Coming Soon</h1>
            <p className='coming-soon-paragraph'>We&#8217;re proud of what we&#8217;ve achieved, but we&#8217;re not stopping there.</p>
        </div>
        <div className="coming-soon-clock-container">
            <progress className="progress-bar" value={progress} />
            <Countdown
                date={Date.now() + 6000000}
                renderer={renderer}
            />
        </div>
      </div>
      <video autoPlay loop muted className="coming-soon-bg-video" src={videoBg}></video>
    </section>
  )
}

export default ComingSoon
