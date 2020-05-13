import React from 'react';
import PCard from './PCard';
import './Gridset.css';

const cardsNo = [1];

const ProjectList = () => {
	return (
		<div>
		{
		cardsNo.map((i) => {
			return (	
				<div> 
					<PCard cardNo={i}/>
				</div>
				);
		})}
		</div>
		)
}

export default ProjectList;