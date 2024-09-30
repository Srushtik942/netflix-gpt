import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>
<Header/>
<div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="bgpicture"/>
</div>
<form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white '>
    <h1 className='font-bold text-white text-3xl p-y-4 mt-2'> Sign In</h1>
    <input type="text" placeholder='Email Address' className='py-2 ,m-2 w-ful mb-2 grid-cols-2'/>
    <input type="password" placeholder='Password' className='py-2 ,m-2 w-full'/>
    <button className=' p-4 m-4 shadow-sm bg-red-600 w-full mx-4 '>Sign In</button>
</form>
</div>
  )
}

export default Login;
