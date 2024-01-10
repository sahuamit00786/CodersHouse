import React, { useState } from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css'

const phoneEmailMap = {
  phone:Phone,
  email:Email
}

const StepPhoneEmail = ({ onClick }) => {
  
  const[type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper} >
       <div>
         <div className={styles.buttonWrap}>
           <button className={`${styles.tabButton} ${type==='phone'?styles.active:''}`}
             onClick={()=>{setType('phone')}}>
             <img className={styles.phone} src="/images/phone.png" alt="phone" />
           </button>
           <button className={`${styles.tabButton} ${type==='email'?styles.active:''}`}
             onClick={()=>{setType('email')}}>
             <img className={styles.email} src="/images/mail.png" alt="mailBox" />
           </button>
         </div>
         <Component onClick={onClick}/>
       </div>
      </div>
    </>
  )
}

// onclick ke tareeke se hum apne parent se child ko call kr sakte hai

export default StepPhoneEmail