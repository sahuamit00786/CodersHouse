import styles from './StepOtp.module.css'
import React,{useState} from 'react'
import Cards from '../../../Components/shared/Card/Cards';
import Button from '../../../Components/shared/Button/Button';
import TextInput from '../../../Components/shared/TextInput/TextInput';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import {setAuth} from '../../../../store/authSlice'
import { useDispatch } from 'react-redux';

const StepOtp = ({onClick}) => {

  const [otp, setOtp] = useState('');
  const {phone,hash} = useSelector((state)=>state.auth.otp)
  const dispatch = useDispatch();
  
  async function submit(){

    try {
      const{data} = await verifyOtp({
        otp,
        phone,
        hash
      })
      console.log(data)
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error)
    }
    onClick();
  }

  return (
    <div className={styles.cardWrapper}>
      <Cards title='Enter the code we just texted to you' icon='lock'>
         
        <TextInput 
            value={otp} 
            onChange={(e)=> setOtp(e.target.value)}
        />

        <div>
          <div className={styles.actionButtonWrap}>
             <Button onClick={submit} title="Next"/>
          </div>
        </div>

        <div className={styles.paraDiv}>
          <span className={styles.para} >By entering the otp you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</span>
        </div>

    
       </Cards>
    </div>
  )
}

export default StepOtp