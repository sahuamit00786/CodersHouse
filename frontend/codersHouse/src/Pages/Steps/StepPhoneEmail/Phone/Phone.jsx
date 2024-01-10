import React, { useState } from 'react'
import Cards from '../../../../Components/shared/Card/Cards'
import Button from '../../../../Components/shared/Button/Button'
import TextInput from '../../../../Components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
import { sendOtp } from '../../../../http/index'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../../../../store/authSlice'

const Phone = ({onClick}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  
  async function submit() {

    try {

      // server Request
      const {data} = await sendOtp({ phone: phoneNumber }); // Pass the phone number correctly
      console.log(data)

      dispatch(setOtp({
        phone:data.phone,
        hash:data.hash
      }))

      onClick();

    } 
    catch (error) {
      console.error('Error while sending OTP:', error);
    }
  }
  

  return (
    <div >
      <Cards title='☎️ Enter your phone number' icon=''>
             
      <TextInput 
        value={phoneNumber} 
        onChange={(e) => {
            setPhoneNumber(e.target.value); 
        }}
      />

        <div>
           <div className={styles.actionButtonWrap}>
             <Button title="Next" onClick={submit}/>
           </div>
        </div>

        <div className={styles.paraDiv}>
          <span className={styles.para} >By entering your phone number you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</span>
        </div>
        

      </Cards>
    </div>
  )
}

export default Phone