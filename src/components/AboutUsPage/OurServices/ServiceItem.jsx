import React from 'react'
import { useInView } from 'react-intersection-observer';

function ServiceItem({img, name, description, handleAnimation}) {
    const {ref: serviceItemRef, inView: serviceItemInView} = useInView();
  return (
    <article ref={serviceItemRef} className={`service-widget-item ${handleAnimation(serviceItemInView)}`}>
        <img src={img} alt={name} />
        <div className="services-item-text-container">
            <p className="service-name">{name}</p>
            <p className="service-description">{description}</p>
        </div>
    </article>
  )
}

export default ServiceItem
