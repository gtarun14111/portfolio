import React from 'react';
import './Aboutme.css';


const Content = ({ scn }) => {
	let content = "";
	if (scn === 1) {
		content = (
		<div class="amdiv pd">
		<p>Hi! I am Tarun Garg!<br /> Tarun is an optimistic individual who believes in giving his best for anything he likes.
		He is co-operative and believes that altruism is the second nature of people.</p>
		</div>
		)
		}
	if (scn === 2) {
		content = (
		<div class="amdiv pd">
 		<p>Tarun is currently studying in Hansraj College.
 		His disciplines are Philosophy and History. 
 		He likes to write poem, stories and code. 
 		</p>
 		</div>
 		)
		}
	if(scn === 3)  {
		content = (
		<div class="amdiv pd">
 		<p>Tarun likes to watch anime and play video games.
 		He also likes to dance but it pretty bad at it.
 		Though that has never stopped him for doing it.</p>
 		</div>
 		)
		}
	return (
		content
		)
	}

export default Content;