import React from 'react'
import styles from './TextInput.module.css'

const TextInput = (props) => {
  const { className, ...otherProps } = props; // Destructure specific props needed, like className
  return (
    <div>
      <input className={`${styles.input} ${className}`} type="text" {...otherProps} />
    </div>
  );
};


export default TextInput