import React from 'react';
import './Website.scss'


import { WebsiteData } from '../../data';

function Website(props) {
	const Elements = WebsiteData.map((item) => {
		return (
			<div className="website__item">
				<img src={item.img} alt="" style={{width: 450, height:300, borderRadius: '3%'}}/>
				<h2 className="website__item__heading">{item.heading}</h2>
				<img src={item.img} alt=""  style={{width:50, height:30}}/>
			</div>
		);
	});

	return <div className="website">{Elements}</div>;
}
import './Website.scss'
export default Website;