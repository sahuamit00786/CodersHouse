import React from 'react'
import style from './Home.module.css';
import {Link, useNavigate} from 'react-router-dom'
import Cards from '../../Components/shared/Card/Cards';
import Button from '../../Components/shared/Button/Button';


const Home = () => {

  const navigate = useNavigate();

  function startRegister(){
    navigate('/authenticate')
  }

  return (
    <div className={style.cardWrapper}>

      <Cards title='Welcome to Coderhouse !' icon='logo'>
         <p style={{color:'#847A7A',paddingLeft:5, paddingRight:5}}>    
          "Explore diverse podcasts on our user-friendly app. 
           Discover, learn, and be entertained with the best 
           content tailored for you."
         </p>

         <div style={{marginTop:2}} >
           <Button onClick={startRegister} title='Click to rock !'/>
        </div>

         <div style={{marginTop:25}}>
            <span style={{color:'#51654B'}}>Have an invite text ?</span>
            <Link className='signIn' to='/login'>Sign in</Link>
         </div>

      </Cards>
      
    </div>
  )
}

export default Home