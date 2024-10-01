import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);

  const toogleSignInform = ()=>{
    setisSignInForm(!isSignInForm);

  };

  return (
    <div>
<Header/>
<div className='absolute '>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="bgpicture"/>
</div>
<form className=' w-3/12 absolute p-12 bg-black bg-opacity-85 my-20 mx-auto right-0 left-0 text-white rounded-lg'>
    <h1 className='font-bold text-white text-3xl p-y-4 mb-5 '> {isSignInForm? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm &&(<input type="text" placeholder='Name' className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm'></input>)}
    {!isSignInForm && (<input type='number' placeholder='Mobile Number' className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm'></input>)}
    <input type="text" placeholder='Email Address' className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm' />
    <input type="password" placeholder='Password' className='py-2 ,my-3 w-full bg-gray-800 rounded-sm'/>
    <button className=' p-2 m-4 shadow-sm bg-red-600 w-full  mx-0  rounded-sm '>{isSignInForm? "Sign In" : "Sign Up"}</button>
    <h1 className='text-center text-gray-400'>OR</h1>
    <button  className='p-2 m-2 bg-white bg-opacity-40 mx-0 rounded-sm w-full '>{isSignInForm? "Use Sign In Code" : "Use Sign Up Code"}</button>
    <h1 className='text-center  m-2 cursor-pointer'>Forgot password?</h1>
    <p className='py-4  text-center cursor-pointer'onClick={toogleSignInform}>{isSignInForm? "Sign Up Now" : "Already registered? Sign In now."}</p>

</form>
</div>
  )
}

export default Login;
