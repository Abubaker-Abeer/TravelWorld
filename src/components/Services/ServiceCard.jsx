import React from 'react'
import "./service-card.css"
export default function ServiceCard({item}) {
    const {imgUrl,title,desc} = item
  return (
    
    <div className='service__item '>
      <div className="service__img">
        <img src={imgUrl} alt='' />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  )
}