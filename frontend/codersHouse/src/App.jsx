import React,{useEffect } from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Components/shared/navigation/navigation';
import Authenticate from './Pages/authenticate/Authenticate';
import Activate from './Pages/Activate/Activate';
import Rooms from './Pages/Rooms/Rooms';
import { useSelector } from 'react-redux';
// const isAuth = false;
// const user = {
//   activated: false
// }

function App() {

  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>

        {/* guest route */}

        <Route path='/'
            element={
               <GuestRoute>
                 <Home />
               </GuestRoute>
            }
        />
        <Route path='/authenticate'
            element={
               <GuestRoute>
                 <Authenticate />
               </GuestRoute>
            }
        />

        {/* semi protected route */}

         <Route path='/activate'
         element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
         } />   

         {/* protected route */}

         <Route path='/rooms' 
            element={
              <ProtectedRoute>
                  <Rooms/>
              </ProtectedRoute>
            }
         />

      </Routes>
    </BrowserRouter>
  );
}



const GuestRoute = ({ children }) => {
  // const isAuth = false; // Replace this with your authentication logic

  const{isAuth} = useSelector((state)=>state.auth)

  if (isAuth) {
      return <Navigate to='/rooms'/>
  } else {
    return children
  }
};

// jo logged in hai lekin activated nhi hai

const SemiProtectedRoute = ({children})=>{  
  const{isAuth,user} = useSelector((state)=>state.auth)
    if (!isAuth) {
      return <Navigate to="/" />;
    } else {
      if (isAuth && !user.activated){
        return children;
      }
      else {
        return <Navigate to="/rooms" />;
      }
    } 
  
}

const ProtectedRoute = ({children})=>{  
  const{isAuth,user} = useSelector((state)=>state.auth)
  if (!isAuth) {
    return <Navigate to="/" />;
  } else {
    if (isAuth && !user.activated){
      return <Navigate to='/activate' />;
    }
    else {
      return children;
    }
  } 

}

export default App;
