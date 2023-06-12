import { faStar } from "@fortawesome/free-solid-svg-icons";
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
			<section className="h-[90vh] flex flex-col justify-center">
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
					<h1 className=" text-7xl font-extrabold flex items-center">
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
					<div>
						<p>Archon Morax</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
