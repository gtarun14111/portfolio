import React from 'react';
import SCard from './SCard';
import './Gridset.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const cardsNo = [1, 2, 3, 4, 5 , 6, 7];

const SkillCard = () => {
	return (
		<div className ="gridsc">
		{
		cardsNo.map((i) => {
			return (	
				<div>
				<ScrollAnimation
				animateIn="animate__animated animate__fadeIn"
				animateOut="animate__animated animate__fadeOut">
					<SCard cardNo={i}/>
					</ScrollAnimation>
				</div>
				);
		})}
		</div>
		)
}

export default SkillCard;