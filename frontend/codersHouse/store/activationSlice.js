import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    name:'',
    avatar:''
 }

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setName(state,action) {  //actually action me data milta hai
      state.name = action.payload
    },
    setAvatar(state,action) {  //actually action me data milta hai
      state.avatar = action.payload
    }
  },
})

export const { setAvatar,setName } = activateSlice.actions
export default activateSlice.reducer