import React, {Component} from 'react';
import '../index.css';
import Header from '../components/Header';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
// import SavedMenu from '../components/SavedMenu';
import Appetizers from '../components/Appetizers';
import Mains from '../components/Mains';
import Sides from '../components/Sides';
import Desserts from '../components/Desserts';
import Beverages from '../components/Beverages';
import Name from '../components/Name';
import Save from './Save';
class NewMenu extends Component{
	constructor(props) {
    	super(props);
	    this.state = {
	    numberOfGuests: '',
	    name: ' ',
	    };

  }

	handleChange = (event) => {
		let name = event.target.name;
		if (this.state[name] === false) {
			this.setState()
		}

		this.setState({
			[name]: !this.state[name]
		})
		console.log(this.state)
	}

	handleGuests = (event) => {
		this.setState({
			numberOfGuests: event.target.value,
		})
		console.log(event.target.value)
	}

	onChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	handleTest = (data) => {
		console.log("TEST DATA ",data);
		this.setState({appetizers: data})
	}

	handleSubmit = (event) => {

	    const food = {
	    	appetizers: ['crostini', 'antipasti', 'olives', 'cheese'],
	    	mains: ['chicken', 'steak', 'turkey', 'ham'],
	    	sides: ['rolls', 'salad', 'soup'],
	    	desserts: ['pie', 'icecream', 'cake', 'custard'],
	    	wine: ['red', 'white']
	    }

	    let state = this.state;


		let formattedMenu = {
		  appetizers: [],
		  mains: [],
		  sides: [],
		  desserts: [],
		  wine: []
		}

		for (let key in formattedMenu) {
		    formattedMenu[key] = food[key].filter(item => {
		    	if (this.state[item] === true) {
		    		return item;
		    	}
		    })
		}

		axios.post('http://localhost:8080/api/menu', formattedMenu)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  
		  // this.props.history.push('/saved');
	this.props.history.push({
  		pathname: '/saved',
  		state: this.state.appetizers
	})


	}
	
	render(){
		console.log("NEWMENU STATE: ", this.state)
		return(
			<div className="menu-box">
				<div className="box">
					<div className="center-box menu-container">
						<h2> Menu </h2>
						<Name onChange={this.onChange} value={this.state.name} name={this.state.name} />
						<h5> Guests #: <input type="text" className="form-control" onChange={this.handleGuests} value={this.state.numberOfGuests} /> </h5><br/>
						<h4> Choose your Appetizers: </h4>
						<Appetizers numberOfGuests={this.state.numberOfGuests} test={this.handleTest} />
						<h4> Choose your Main: </h4>
						<Mains numberOfGuests={this.state.numberOfGuests} />
						<h4> Choose your Sides: </h4>
						<Sides numberOfGuests={this.state.numberOfGuests} />
						<h4> Choose your Desserts: </h4>
						<Desserts numberOfGuests={this.state.numberOfGuests} />
						<h4> Choose your Beverage: </h4>
						<Beverages numberOfGuests={this.state.numberOfGuests} />
						<button type="button" className="btn btn-primary btn-lg center-block" onClick={this.handleSubmit}>Create</button>
						<Link className="btn btn-primary btn-lg center-block" to="/saved" onClick={this.handleSubmit}>Saved</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default NewMenu;