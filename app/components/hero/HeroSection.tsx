"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../navbar/Logo";
import Search from "../navbar/Search";

const HeroSection = () => {
	return (
		<div className='w-screen h-screen relative overflow-hidden'>
			<video
				className='w-full h-full object-cover absolute top-0 left-0'
				src='/images/beachVid.mp4'
				autoPlay
				loop
				muted
			/>
			<div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
			<div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white p-4'>
				<Logo />
				{/* Use the Logo component here */}
				<h1 className='text-6xl font-bold mt-4 font-cursive'>Luxury Escapes</h1>
				{/* Increased font size to text-6xl and using a cursive font */}
				<p className='py-2 text-xl'>
					Explore the World's Most Exquisite Destinations
				</p>
				{/* Using text-xl for the description */}
				<Search />
			</div>
		</div>
	);
};

export default HeroSection;
