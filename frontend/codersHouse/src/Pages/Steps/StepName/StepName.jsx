import React,{useState} from 'react'
import Cards from '../../../Components/shared/Card/Cards'
import TextInput from '../../../Components/shared/TextInput/TextInput'
import styles from './StepName.module.css'
import Button from '../../../Components/shared/Button/Button'
import {useDispatch,useSelector} from 'react-redux'
import { setName } from '../../../../store/activationSlice'

const StepName = ({onClick}) => {

  const {name} = useSelector(state=>state.activate)
  const dispatch = useDispatch();
  const[fullName,setFullName] = useState(name)

  function nextStep(){
    if(!fullName)
    {
      return;
    }
    dispatch(setName(fullName));
    onClick()
  }

    return (
      <div className={styles.cardWrapper}>
        <Cards className={styles.topic} title="🥽  What's your full name">
           
          <TextInput 
              value={fullName} 
              onChange={(e)=> setFullName(e.target.value)}
              placeholder='Enter your username'
          />

          <div className={styles.paraDiv}>
            <span className={styles.para} >People use real names at codershouse,<br /> it feels premium</span>
          </div>
  
          <div>
            <div className={styles.actionButtonWrap}>
               <Button onClick={nextStep} title="Next"/>
            </div>
          </div>
  
          
  
      
         </Cards>
      </div>

  )
}

export default StepName