import React, {Component} from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import '../index.css';

class Homepage extends Component{
	render(){
		return(
			<div className="App">
		      <Header />
		      <Body />
		    </div>
		)
	}
}


export default Homepage
