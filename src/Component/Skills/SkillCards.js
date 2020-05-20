import React from 'react';
import SCard from './SCard';
import './Gridset.css';

const cardsNo = [1, 2, 3, 4, 5 , 6, 7];

const SkillCard = () => {
	return (
		<div className ="gridsc">
		{
		cardsNo.map((i) => {
			return (	
				<div> 
					<SCard cardNo={i}/>
				</div>
				);
		})}
		</div>
		)
}

export default SkillCard;