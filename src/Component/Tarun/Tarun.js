import React from 'react';
import './Tarun.css';

const Tarun = ({ openAboutMe }) => {

	function wait(ms){
	   var start = new Date().getTime();
	   var end = start;
	   while(end < start + ms) {
	     end = new Date().getTime();
	  }
	}
	const toAbout = (event) => {
		event.target.innerHTML = "About Me";
	}

	const toTarun = (event) => {
		event.target.innerHTML = "Tarun";
	}

	return (
		<div>
		<div class="thepage">
		<p id='myname'>
		<div onMouseOver= {toAbout} onMouseLeave = {toTarun} onClick = { openAboutMe }>
		Tarun
		</div>
		</p>
		</div>
		</div>
		);
}

export default Tarun;