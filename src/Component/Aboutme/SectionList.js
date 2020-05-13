import React from  'react';
import HeadImg from './HeadImg';
import Content from './Content';

const sctn = [1, 2, 3]

const SectionList = () => {
	return (
		<div>
		{
		sctn.map((i) => {
			return (	
				<div> 
					<HeadImg scn= {i}/>
					<Content scn= {i}/>
				</div>
				);
		})}
		</div>
		);
}

export default SectionList;