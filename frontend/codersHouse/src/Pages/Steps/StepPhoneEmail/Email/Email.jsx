import React,{useState} from 'react'
import Cards from '../../../../Components/shared/Card/Cards'
import Button from '../../../../Components/shared/Button/Button'
import styles from '../StepPhoneEmail.module.css'
import TextInput from '../../../../Components/shared/TextInput/TextInput'

const Email = ({onClick}) => {

    const [email, setEmail] = useState('');
  return (
    <div>
    <Cards title='Enter your mail' icon='mail'>
         
         <TextInput 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
        />

            <div>
             <div className={styles.actionButtonWrap}>
               <Button title="Next" onClick={onClick}/>
              </div>
            </div>

        <div className={styles.paraDiv}>
          <span className={styles.para} >By entering your phone number you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</span>
        </div>

    
      </Cards>

      </div>
  )
}

export default Email