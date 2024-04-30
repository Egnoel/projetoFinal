'use client';
import { signUp } from '@/app';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ firstName, lastName, userType, email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.user);
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="md:w-1/3 max-w-sm">
      <div className="text-center md:text-left">
        <label className="mr-1">Sign Up</label>
      </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold text-slate-500"></p>
      </div>
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Select defaultValue={userType} onValueChange={setUserType}>
        <SelectTrigger className="mt-4">
          <SelectValue placeholder="User Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="email"
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
      <div className="text-center md:text-left">
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Already Registered?{' '}
        <a
          className="text-red-600 hover:underline hover:underline-offset-4"
          href="/login"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
