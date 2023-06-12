import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="flex justify-center relative  bg-[#313131]">
			<Link
				href=""
				className=" text-[#FAF4AA] hover:bg-[#292929] py-5 px-5 rounded-md"
			>
				Story
			</Link>
			<Link
				href=""
				className=" text-[#FAF4AA] hover:bg-[#292929] py-5 px-5 rounded-md"
			>
				Gameplay
			</Link>
			<div className="w-[200px]" />
			<div className="px-4 py-1 rounded-full bg-[#252525]  absolute -top-10">
				<Image
					className="pt-9 hover:scale-110 transition-all duration-300"
					src="/liyue.webp"
					height={105}
					width={115}
					alt="inazuma logo"
				/>
			</div>
			<Link
				href=""
				className="text-[#FAF4AA] hover:bg-[#292929] py-5 px-5 rounded-md"
			>
				Gallery
			</Link>
			<Link
				href=""
				className="text-[#FAF4AA] hover:bg-[#292929] py-5 px-5 rounded-md"
			>
				Github
			</Link>
		</header>
	);
};

export default Navbar;
