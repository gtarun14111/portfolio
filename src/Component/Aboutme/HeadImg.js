import React from 'react';
import './Aboutme.css';
import Tarun from './Tarun.jpg';
import './HeadImg.css';
import Kaneki from './Kaneki.jpg';
import College from './College.jpg';

let img= "";

const HeadImg = ({ scn }) => {
	if(scn === 1) {
		img = Tarun;
	}
	if(scn === 2) {
		img = College;
	}
	if(scn === 3) {
		img = Kaneki;
	}
	return (
		<div class="amdiv">
			<img class="image" src={img} alt="can't load"/>
		</div>
		)
}

export default HeadImg;