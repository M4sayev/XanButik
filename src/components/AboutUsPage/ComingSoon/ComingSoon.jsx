import React from 'react';
import './ComingSoon.css';
import Countdown, { zeroPad } from 'react-countdown';
import { videoBg } from '../../../assets/assets';
import ProgressBar from './ProgressBar';

function ComingSoon() {

  const renderer  = ({days, hours, minutes, seconds}) => {
      return (
      <div className="coming-soon-countdown" style={{width: "650px"}}>
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
            <ProgressBar /> 
            <Countdown renderer={renderer} date={Date.now() + 6000000} />
        </div>
      </div>
      <video autoPlay loop muted className="coming-soon-bg-video" src={videoBg}></video>
    </section>
  )
}

export default ComingSoon
