import React, { Component } from 'react';
import './App.css';
import Navig from './Component/Navig/Navig';
import Tarun from './Component/Tarun/Tarun';
import Aboutme from './Component/Aboutme/Aboutme';
import Skills from './Component/Skills/Skills';

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

  render() {
  return (
    <div>
    <Navig openAboutMe = {this.openAboutMe} openTarun = {this.openTarun} openSP = {this.openSP}/>
    {
    	this.state.section === 'tarun'
    	?    <Tarun openAboutMe = {this.openAboutMe} />
	    :    
	    ( this.state.section === 'aboutMe'
		    ?    <Aboutme />
		    :    <Skills />
    )
}
    </div>
  );
}
}

export default App;
