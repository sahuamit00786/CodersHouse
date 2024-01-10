import React from 'react'
import style from './Card.module.css'

const Cards = ({title,icon,children }) => {
  return (
    <div>
     <div className={style.card}>
        <div className={style.headingWrapper}>
            <img style={{width:25}} src={`/images/${icon}.png`} alt="" />
            <h1 style={{fontSize:16,fontWeight:'bold',marginLeft:10}}>{title}</h1>
        </div>
         {children}
     </div>
    </div>
  )
}

export default Cards