import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import logo from './logo.png'
const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-28 px-10">
        <div className="border flex justify-between items-center">
          <div>
          <h1 className="text-6xl font-wave uppercase text-primary font-black">
            Shocker{" "}
            <span className="text-6xl text-emerald-500 font-black">.</span>{" "}
            <span>com</span>
          </h1>
            <p className="text-base text-gray-500 capitalize p-5">the internet for the free </p>
            <Button>sign up</Button>
          </div>
          <div className="w-[500px] h-[400px]">

          <img src={logo} alt="" className="border-2 h-full w-full object-cover rounded-md border-primary " />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
