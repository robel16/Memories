import React from 'react';
import { GoogleButton } from 'react-google-button';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { UserAuth } from '../Context/AuthContext';
import { createIfNotExist, client } from '../client';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn } = UserAuth();
  const { user, logOut } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(user));

      const { displayName, photoURL, uid } = user;
      const doc = {
        _id: uid,
        _type: 'user',
        username: displayName,
        image: photoURL,
      };

      // Check if the document exists and create it if it doesn't
      await createIfNotExist(doc);

      // Navigate to the desired page after successful login
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handlesignout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
