import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Google() {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    window.location.href = 'http://localhost:8003/api/auth/google';
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl p-8 md:p-14 w-full max-w-md">
        <div className="flex flex-col justify-center text-center">
          <span className="mb-3 text-4xl font-bold">Sign Up with Google</span>
          <span className="font-light text-gray-400 mb-8">
            Create your account using your Google account
          </span>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white flex items-center justify-center"
            onClick={handleGoogleSignup}
          >
            <img src="google.svg" alt="Google Logo" className="w-6 h-6 inline mr-2" />
            Sign up with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account?
            <span className="font-bold text-black cursor-pointer" onClick={() => navigate('/')}>
              Log in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Google;
