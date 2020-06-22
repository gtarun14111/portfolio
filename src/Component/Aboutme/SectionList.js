import React from  'react';
import HeadImg from './HeadImg';
import Content from './Content';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const sctn = [1, 2, 3]

const SectionList = () => {
	return (
		<div>
		{
		sctn.map((i) => {
			return (
				<div key = {i} style={{height: '80vh'}}>
				<ScrollAnimation
				scrollableParentSelector="div.child"
				animateIn="animate__animated animate__slideInLeft"
				animateOut="animate__animated animate__zoomOut"
				>
				<HeadImg scn= {i}/>
				<Content scn= {i}/>
				</ScrollAnimation>
				</div>
				);
		})}
		</div>
		);
}

export default SectionList;