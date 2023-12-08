"use client";
import PasswordInput from "./passwordinput";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FormEvent, useState } from "react";

interface Values {
  username: string;
  password: string;
}

interface LoginFormProps {
  roleAccess: string;
}

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Perform login authentication logic here
      const res = await axios.post("https://integrated-auva.wittyfield-c9323e0d.australiaeast.azurecontainerapps.io/token", {
        username: username,
        password: password,
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      // print error if error
        // toast.error("Invalid credentials");
        // toast.success("Login success");
        console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-10 sm:mb-15 md:mb-20 xl:mb-20 lg:mb-15 text-poppins flex flex-col">
          <label htmlFor="username" className="font-medium text-12px sm:text-15px md:text-18px xl:text-16px lg:text-20px mb-10 sm:mb-13px md:mb-15px xl:mb-20px lg:mb-15px text-poppins">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="form-control w-82.2vw lg:w-50vw xl:w-39.6vw h-auto aspect-296/28 lg:aspect-760/48 rounded-5px lg:rounded-15px bg-E6EAF4 pl-2.7vw lg:pl-1.25vw text-11px sm:text-15px md:text-18px xl:text-13px lg:text-11px"
            aria-describedby="UsernameHelp"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
  
        <div className="mb-27px sm:mb-25px md:mb-30px xl:mb-35px lg:mb-25px text-poppins flex flex-col">
          <label htmlFor="password" className="font-medium text-12px sm:text-15px md:text-18px xl:text-16px lg:text-16px mb-10 sm:mb-13px md:mb-15px xl:mb-20px lg:mb-15px text-poppins">
            Password
          </label>
          <input
            className="form-control w-82.2vw lg:w-50vw xl:w-39.6vw h-auto aspect-296/28 lg:aspect-760/48 rounded-5px lg:rounded-15px bg-E6EAF4 pl-2.7vw lg:pl-1.25vw text-11px sm:text-15px md:text-18px xl:text-13px lg:text-11px"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <div className="">
          <button
            type="submit"
            className="bg-67AEEE px-16px py-6px rounded-5px flex items-center justify-center hover:shadow-0_4px_4px_0px_rgba-0-0-0-0-25"
          >
            <span className="text-white font-montserrat text-xs font-semibold leading-normal text-12px lg:text-14px">
              Log In
            </span>
          </button>
        </div>
      </form>
    </div>
  );
  }