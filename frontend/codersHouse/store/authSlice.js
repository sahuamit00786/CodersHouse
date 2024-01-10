import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isAuth:false,
    user:null,
    otp:{
      phone:'',
      hash:''
    }
 }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state,action) {  //actually action me data milta hai
      const{user} = action.payload;
      state.user = user;
      state.isAuth = true
    },
    setOtp(state,action) {  //actually action me data milta hai
      const{phone,hash} = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    }
  },
})

export const { setAuth,setOtp } = authSlice.actions
export default authSlice.reducer