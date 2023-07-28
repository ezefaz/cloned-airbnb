"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<div
			className='flex items-center cursor-pointer p-2'
			onClick={() => router.push("/")}>
			<div className='text-3xl font-semibold text-blue-600'>L</div>
			<div className='text-3xl font-thin text-gray-800'>UXE</div>
			<div className='text-3xl font-bold text-blue-600'>S</div>
			<div className='text-3xl font-semibold text-blue-600'>T</div>
			<div className='text-3xl font-thin text-gray-800'>AY</div>
		</div>
	);
};

export default Logo;
