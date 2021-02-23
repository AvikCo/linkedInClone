import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import { logout, login } from './features/userSlice';
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser)  //useSelector is a hook that comes from react-redux library
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout());
      }}
      )
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ? <Login /> : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
        
      )}
    </div>
  );
}

export default App;
