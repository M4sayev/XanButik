import React from 'react';
import "./ServicesBanner.css"
import { assets } from '../../assets/assets';

function ServicesBanner() {
  return (
    <section className='services-banner'>
        <div className="services-container">
            <div>
                <img src={assets.services_icon_one} alt="tshirt" />
                <p>personal styling consultation</p>
            </div>
            <div>
                <img src={assets.services_icon_two} alt="suit" />
                <p>tailoring and alterations</p>
            </div>
            <div>
                <img src={assets.services_icon_three} alt="pants" />
                <p>premium suit fittings</p>
            </div>
            <div>
                <img src={assets.services_icon_four} alt="tie" />
                <p>shoe care and repair</p>
            </div>
        </div>
    </section>
  )
}

export default ServicesBanner
