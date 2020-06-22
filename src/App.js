import React, { Component } from 'react';
import './App.css';
import Navig from './Component/Navig/Navig';
import Tarun from './Component/Tarun/Tarun';
import Aboutme from './Component/Aboutme/Aboutme';
import Skills from './Component/Skills/Skills';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
	constructor() {
		super();
		this.state = {
			section: 'tarun'
		}
	}
	 


	openAboutMe = () => {
		this.setState( {section: "aboutMe"});
	}

	openTarun = () => {
		this.setState( {section: "tarun"});
	}

	openSP = () => {
		this.setState( {section: "sp"});
	}

	setInProp = (value) => {
		this.setState( {inProp: value});
	}
  	//const [inProp, setInProp] = useState(false);

  render() {
  return (
 	<div>
    <Navig openAboutMe = {this.openAboutMe} openTarun = {this.openTarun} openSP = {this.openSP}/>
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
    {
    	this.state.section === 'tarun'
    	?    <Tarun openAboutMe = {this.openAboutMe} key="tarun" />
	    :    
	    ( this.state.section === 'aboutMe'
		    ?    <Aboutme key = "aboutme"/>
		    :    <Skills key = "skills" />
    )
}
	</CSSTransitionGroup>
    </div>	
  );
}
}

export default App;
