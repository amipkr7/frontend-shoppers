import React from 'react'
import '../Breadcrums/Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';

function Breadcrum(props) {
    const {product}=props;
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" />
      {props.category} <img src={arrow_icon} alt="" />
      {props.name}
    </div>
  )
}

export default Breadcrum
