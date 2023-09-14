import React from 'react'
import GoogleLogin from 'react-google-login'
import { googleProvider } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc';
import {GoogleButton} from 'react-google-button'
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png'
import { UserAuth } from '../Context/AuthContext';
const Login=()=> {
  const responseGoogle = (response) => {
  if (response.accessToken) {
    // The user has successfully signed in with Google.
    // You can perform further actions, such as sending the token to the server or redirecting the user.
    console.log('Successfully signed in with Google.');
    console.log('Access token:', response.accessToken);
    console.log('User profile:', response.profileObj);
  } else {
    // Something went wrong with the Google Sign-In process.
    // You can handle the error scenario here.
    console.error(response.error);
  }
};
//   const {googleSignIn}=UserAuth();
//   const {user,logOut}=UserAuth();
//  const handleGoogleSignIn=async()=>{
//   try {
//     await googleSignIn()
    
//   } catch ( error) {
//     console.log(error)
//   }
//  }
//  const handlesignout=async()=>{
// try {
//   await logOut()
// } catch (error) {
//   console.log(error)
// }
//  }
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
<video
src={shareVideo}
type="video/mp4"
loop
controls={false}
muted
autoPlay
className='w-full h-full object-cover'
/>
<div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
  <div className='p-5'>
    <img src={logo} width="130px" alt="logo" />
  </div>
  <div className='shadow-2xl'>
{/* <GoogleButton onClick={handleGoogleSignIn}/> */}
<GoogleLogin
clientId='170431143052-kj4l840sdk99feff9olo0tc2vgii5s3p.apps.googleusercontent.com'
render={(renderProps)=>(
  <button
  type="button" 
  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none  '
  onClick={renderProps.onClick}
  disabled={renderProps.disabled}
  >
   
    <FcGoogle className='mr-4'/>sign in with google
  </button>
)}
onSuccess={responseGoogle}
onFailure={responseGoogle}

// cookiePolicy="single_host_origin"
/>
  </div>
</div>
      </div>
    </div>
  )
}

export default Login

