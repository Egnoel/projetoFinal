'use client';
import React, { useState } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-white">
      <div className="container max-w-lg p-8 mx-auto bg-white rounded shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h1>
          <div className="flex space-x-3 social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <span className="text-sm">
          or use your email for {isSignUp ? 'registration' : 'sign in'}
        </span>
        <form className="mt-4">
          {isSignUp && (
            <input type="text" placeholder="Name" className="input" />
          )}
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          {isSignUp && (
            <button type="submit" className="btn">
              Sign Up
            </button>
          )}
          {!isSignUp && (
            <button type="submit" className="btn">
              Sign In
            </button>
          )}
        </form>
        <div className="mt-2 text-sm">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button className="link" onClick={toggleForm}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
