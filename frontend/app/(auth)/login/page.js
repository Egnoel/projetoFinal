'use client';
import { login } from '@/app';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login({ email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        router.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:w-1/3 max-w-sm">
      <div className="text-center md:text-left">
        <label className="mr-1">Sign in</label>
      </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold text-slate-500"></p>
      </div>
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-4 flex justify-between font-semibold text-sm">
        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label>
        <a
          className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Don&apos;t have an account?{' '}
        <a
          className="text-red-600 hover:underline hover:underline-offset-4"
          href="/register"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
