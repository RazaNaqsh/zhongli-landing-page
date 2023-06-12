import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="flex py-5 justify-center gap-10 relative  bg-[#313131]">
			<Link
				href=""
				className=" text-[#FAF4AA] "
			>
				Story
			</Link>
			<Link
				href=""
				className=" text-[#FAF4AA]"
			>
				Gameplay
			</Link>
			<div className="w-[200px]" />
			<div className="px-4 py-1 rounded-full bg-[#252525]  absolute -top-10">
				<Image
					className="pt-9 hover:scale-110 transition-all duration-300"
					src="/inazuma.png"
					height={105}
					width={115}
					alt="inazuma logo"
				/>
			</div>
			<Link
				href=""
				className="text-[#FAF4AA]"
			>
				Gallery
			</Link>
			<Link
				href=""
				className="text-[#FAF4AA]"
			>
				Github
			</Link>
		</header>
	);
};

export default Navbar;
