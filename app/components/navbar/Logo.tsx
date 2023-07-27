"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<div
			className='flex items-center cursor-pointer'
			onClick={() => router.push("/")}>
			<span className='text-4xl font-thin font-cursive pl-2'>LuxStay</span>
		</div>
	);
};

export default Logo;
