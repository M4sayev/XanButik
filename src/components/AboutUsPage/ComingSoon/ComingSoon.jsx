import React, { useEffect, useState } from 'react';
import './ComingSoon.css';
import Countdown, { zeroPad } from 'react-countdown';
import { videoBg } from '../../../assets/assets';
import ProgressBar from './ProgressBar';

function ComingSoon() {
  const endDate = new Date(2025, 7, 23, 15, 0, 0);

  const renderer  = ({days, hours, minutes, seconds}) => {
      return (
      <div 
        className="coming-soon-countdown"
        aria-label="Countdown to launch"
        aria-live="polite"
      >
          <span>{zeroPad(days)}</span>
          <span>{zeroPad(hours)}</span>
          <span>{zeroPad(minutes)}</span>
          <span>{zeroPad(seconds)}</span>
      </div>
      )
  };

  return (
    <section className='coming-soon'>
      <div className={`coming-soon-contents`}>
        <div className="coming-soon-text-container">
            <h1 className="coming-soon-title std-heading">Coming Soon</h1>
            <p className='coming-soon-paragraph'>We&#8217;re proud of what we&#8217;ve achieved, but we&#8217;re not stopping there.</p>
        </div>
        <div className="coming-soon-clock-container">    
            <ProgressBar endDate={endDate}/> 
            <Countdown renderer={renderer} date={endDate}/>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="coming-soon-bg-video"
        src={videoBg}
        aria-hidden="true"
        tabIndex="-1"
      />
    </section>
  )
}

export default ComingSoon
