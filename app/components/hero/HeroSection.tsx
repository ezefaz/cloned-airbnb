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
				<h1 className='text-6xl md:text-8xl font-bold mt-4 font-cursive leading-tight'>
					Luxury Escapes
				</h1>
				<p className='py-4 text-xl md:text-2xl text-center'>
					Explore the World&rsquo;s Most Exquisite Destinations
				</p>
				<Search />
			</div>
		</div>
	);
};

export default HeroSection;
