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
        localStorage.setItem('user', JSON.stringify(res.data.user));
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-sm md:w-1/3">
      <div className="text-center md:text-left">
        <label className="mr-1">Sign Up</label>
      </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 font-semibold text-center text-slate-500"></p>
      </div>
      <input
        className="w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded"
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
        className="w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full px-4 py-2 mt-4 text-sm border border-gray-300 border-solid rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="text-center md:text-left">
        <button
          className="px-4 py-2 mt-4 text-xs tracking-wider text-white uppercase bg-blue-600 rounded hover:bg-blue-700"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
      <div className="mt-4 text-sm font-semibold text-center text-slate-500 md:text-left">
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
