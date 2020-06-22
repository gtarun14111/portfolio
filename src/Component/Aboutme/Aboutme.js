import React from 'react';
import './Aboutme.css';
import SectionList from './SectionList';
import Hding from './Hding';

const Aboutme = () => {
	return (
		<div 
    class="amdiv">
			<Hding />
      <div className="parent">
        <div className="child">
    			<SectionList />
        </div>
      </div>
		</div>
		);
}

export default Aboutme;