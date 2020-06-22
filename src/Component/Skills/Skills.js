import React from 'react';
import SkillCards from './SkillCards';
import ProjectList from './ProjectList';

const Skills = () => {
	return (
		<div>
			<div className="skills"></div>
			<SkillCards />
			<div className="projects"></div>
			<ProjectList />
		</div>
		)
}

export default Skills;