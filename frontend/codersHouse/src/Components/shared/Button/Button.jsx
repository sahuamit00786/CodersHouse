import React from 'react'
import style from './Button.module.css'

const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className={style.input}>
      <span style={{fontSize:'bold', marginRight:10}}>{title}</span>
      <img style={{width:15, marginTop:'2'}} src="/images/arrow.png" alt="" />
    </button>
  )
}

export default Button