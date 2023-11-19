import React from "react";
import "./Portfolio.scss";
import { useState, useEffect } from "react";


import Design from "../../components/Design/Design";
import Minecraft from "../../components/Minecraft/Minecraft";
import DiscordBots from "../../components/DiscordBots/DiscordBots";
import Website from "../../components/Website/Website";
import {TypeAnimation} from "react-type-animation";
// Particles js Configuration file
import particles from "../../particlesjs-config";


function Portfolio(props) {

    //Animation Initiation
	useEffect(() => {
		tsParticles.load("particles", particles);
	},[]);
	
    //State to switch between Categories
	const [tab, setTab] = useState("Web Site");
	return (
		<>
			<div className="portfolio">
				<div className="portfolio__header padding" id="particles">
				<h1 className="portfolio__header__heading">
					<TypeAnimation
                            sequence={[
                            "Portfolio",
                            3000,
							"Loyal Dev Team",
                            3000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{
                            // display: "block",
                            color: "black",
                            fontWeight: 400,
                            fontFamily: "VT323",
                            letterSpacing: 1,
                            fontSize: 55,
                            }}
                        />
					</h1>

					<div className="category-menu">
						<div
							className={`btn-category ${
								tab === "Web Site" ? "btn-active" : ""
							}`}
							onClick={() => setTab("Web Site")}
						>
							Web Site
						</div>
						<div
							className={`btn-category ${
								tab === "Android" ? "btn-active" : ""
							}`}
							onClick={() => setTab("Android")}
						>
							Android
						</div>
						<div
							className={`btn-category ${
								tab === "AI" ? "btn-active" : ""
							}`}
							onClick={() => setTab("AI")}
						>
							AI
						</div>
						<div
							className={`btn-category ${
								tab === "Discord Bot" ? "btn-active" : ""
							}`}
							onClick={() => setTab("Discord Bot")}
						>
							Discord Bot
						</div>
					</div>
				</div>

				<div className="cat-display padding">
					{tab === "Web Site" && <Design />}
					{tab === "Android" && <DiscordBots />}
					{tab === "AI" && <Minecraft />}
					{tab === "Discord Bot" && <Website />}
				</div>
			</div>
		</>
	);
}
import "./Portfolio.scss";

export default Portfolio;
