import React from 'react';
import './DiscordBots.scss'

import { DiscordBotsData } from '../../data';

function DiscordBots(props) {
	const Elements = DiscordBotsData.map((item) => {
		return (
			<div className="discord__item">
				<img src={item.img} alt="" style={{width: 450, height:300, borderRadius: '3%'}} />
				<h2 className="discord__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" style={{width:50, height:30}} />
			</div>
		);
	});

	return <div className="discord">{Elements}</div>;
}
export default DiscordBots;