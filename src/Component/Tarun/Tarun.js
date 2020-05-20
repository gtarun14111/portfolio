import React from 'react';
import './Tarun.css';

const Tarun = ({ openAboutMe }) => {
	function wait(ms)
	{
	    var d = new Date();
	    var d2 = null;
	    do { d2 = new Date(); }
	    while(d2-d < ms);
	}
	const showAbout = (event) => {
		wait(400);
		event.target.innerHTML = "About Me";
	}

	const showTarun = (event) => {
		wait(400);
		event.target.innerHTML = "Tarun";
	}

	return (
		<div>
		<div className="thepage">
		<p id='myname' onClick = {openAboutMe}>
			<div onMouseOver= {showAbout} onMouseLeave= {showTarun}>
			Tarun
			</div>
		</p>
		</div>
		</div>
		);
}

export default Tarun;