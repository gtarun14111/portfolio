import React from 'react';
import PCard from './PCard';
import './Gridset.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const cardsNo = [1, 2];

const ProjectList = () => {
	return (
		<div>
		{
		cardsNo.map((i) => {
			return (	
				<div> 
				<ScrollAnimation
				animateIn="animate__animated animate__slideInLeft"
				animateOut="animate__animated animate__slideOutRight">
					<PCard cardNo={i}/>
					</ScrollAnimation>
				</div>
				);
		})}
		</div>
		)
}

export default ProjectList;