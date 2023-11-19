import React from 'react';
import './Minecraft.scss'

import { MinecraftData } from '../../data';

function Minecraft(props) {
	const Elements = MinecraftData.map((item) => {
		return (
			<div className="minecraft__item">
				<img src={item.img} alt="" style={{width: 450, height:300, borderRadius: '3%'}} />
				<h2 className="minecraft__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" style={{width:50, height:30}}/>
			</div>
		);
	});

	return <div className="minecraft">{Elements}</div>;
}
import './Minecraft.scss'

export default Minecraft;