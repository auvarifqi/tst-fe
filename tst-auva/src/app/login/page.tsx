"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; // Mengimpor ikon mata terbuka dan mata tertutup dari React Icons

const Login = () => {
const router  = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://new-integrated-auva.wittyfield-c9323e0d.australiaeast.azurecontainerapps.io/token",  {
        username: username,
        password: password,
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      router.push('/');

      // print error if error
        // toast.error("Invalid credentials");
        // toast.success("Login success");
        console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-[url('/train.jpeg')] bg-cover">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg backdrop-blur-md p-10 bg-opacity-60">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
             Train Ticketing Security Dashboard <br /> <br />Login to your account
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Your Username"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
