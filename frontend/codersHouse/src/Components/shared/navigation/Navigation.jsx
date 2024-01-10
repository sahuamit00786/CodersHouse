import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {

    const brandStyle={
        color: '#fff',
        textDecoration: 'none',
        fontWeight : 'bold',
        fontSize:'18px',
        display:'flex',
        alignItems:'center'
    };


  return (
    <nav className={`${styles.navbar} container`}>
        {/* we cannot use the styles module in component child ex-link */}
        <Link style={brandStyle} to='/'>
               <img style={{width:25}} src="/images/logo.png" alt="logo" />
               <span style={{marginLeft:10, paddingTop:6}}> Codershouse</span>
        </Link>
    </nav>
  )
}

export default Navigation