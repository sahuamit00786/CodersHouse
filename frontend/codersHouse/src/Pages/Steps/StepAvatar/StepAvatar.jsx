import React, { useState } from 'react'
import styles from './StepAvatar.module.css'
import Cards from '../../../Components/shared/Card/Cards'
import Button from '../../../Components/shared/Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { setAvatar } from '../../../../store/activationSlice'

const StepAvatar = ({onClick}) => {

  const dispatch = useDispatch()

  function captureImage(e)
  {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = function(){
      console.log(reader.result)
      setImage(reader.result);
      dispatch(setAvatar(reader.result))
    }
  }

  const {name} = useSelector((state)=>state.activate);
  const [image,setImage] = useState('/images/monkey-avatar.png')

  return (
    <div className={styles.cardWrapper}>
        <Cards className={styles.topic} icon='monkey-emoji' title={`Hello ${name}!`}>
            <p className={styles.subHeading}>How's this photo ?</p>
            <div className={styles.avatarWrapper}>
                <img className={styles.avatar} src={image} alt="avatar" />
            </div>

            <div className={styles.avatarInput}>
              <input className={styles.hideInput} type="file" onChange={captureImage} name="avatarInput" id="avatarInput" />
              <label htmlFor="avatarInput">choose a different photo</label>
            </div>
  
            <div className={styles.actionButtonWrap}>
               <Button title="Next"/>
            </div>
      
         </Cards>
      </div>
  )
}

export default StepAvatar 