import { faFire, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Hero = () => {
	const fiveStars = [1, 2, 3, 4, 5];
	return (
		<div>
			<div className="">
				<Image
					className="-z-10 blur-sm absolute object-cover"
					src="/zhongli-tea.jpg"
					fill
					alt="hero"
				/>
			</div>
			<section className="h-[90vh] w-[35%] items-end flex flex-col justify-center">
				<div className="flex">
					{fiveStars.map((star) => (
						<FontAwesomeIcon
							key={star}
							icon={faStar}
							style={{
								color: "#eeff00",
							}}
							className="w-10 glowing-star"
						/>
					))}
				</div>
				<div
					className="p-2 my-1 w-fit  rounded-md  "
					style={{
						backgroundColor: "rgba(242, 98, 46, 0.2)",
						boxShadow: "0px 0px 8px #0e0e1c",
					}}
				>
					<h1
						className=" text-7xl font-extrabold flex items-center"
						style={{ textShadow: "0px 0px 1px white" }}
					>
						Zhongli{" "}
						<span>
							<Image
								src="/geoEl.png"
								alt="geo"
								width={100}
								height={100}
							/>
						</span>
					</h1>
				</div>
				<div className="flex items-center gap-6 py-2">
					<p
						className="bg-[#d6a13f] rounded-sm w-fit p-2"
						style={{ textShadow: "0px 0px 1px white" }}
					>
						Archon Morax
					</p>
					<hr className="w-10" />
					<p
						className=" w-fit p-2 flex items-center gap-1"
						style={{ textShadow: "0px 0px 2px white" }}
					>
						Rex Lapis
						<FontAwesomeIcon
							icon={faFire}
							style={{ color: "#ea9c43", height: "20px" }}
						/>
					</p>
				</div>
				<div className="space-x-1 text-sm my-2 ">
					<button className="bg-[crimson] rounded-md px-5 py-2">Guides</button>
					<button className="border-2 px-5 py-2 rounded-md">Learn More</button>
				</div>
			</section>
		</div>
	);
};

export default Hero;
