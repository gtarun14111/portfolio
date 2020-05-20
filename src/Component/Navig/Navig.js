import React from 'react';
import './Navig.css';

const Navig = ({ openAboutMe, openTarun, openSP }) => {
	return (
		<nav class="nav_bar">
		<p class="item top_item" onClick= {openTarun}>tArun</p>
		<p class="item" onClick= {openAboutMe}>About Me</p>
		<p class="item" onClick= {openSP}>Skills & Projects</p>
		</nav>
		);
}

export default Navig;