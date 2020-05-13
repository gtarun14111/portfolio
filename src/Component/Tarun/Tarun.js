import React from 'react';
import './Tarun.css';

const Tarun = ({ openAboutMe }) => {
	return (
		<div>
		<div class="thepage">
		<p id='myname'>t<span onClick = {openAboutMe}>A</span>run</p>
		</div>
		</div>
		);
}

export default Tarun;