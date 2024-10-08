import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {addUser, removeUser} from "../utils/userSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';



const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });
    //unsuscribe when component unmount
    return()=> unsubscribe();


  },[]);




  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
<img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"alt="logo"/>
<div className='w-9 mx-10'>
  <img className='w-8 h-8 my-3'
  alt="usericon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"></img>
<button onClick={handleSignOut}
className='font-bold text-white '>(SignOut)</button>
</div>
 </div>
  )
}

export default Header;


