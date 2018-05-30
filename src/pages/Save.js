import React, {Component} from 'react';
import '../index.css';
// import SavedMenu from '../components/SavedMenu';
import Header from '../components/Header';
import axios from 'axios';

// const Qty = (props) => {
// 	console.log(props)
//   	return (
//   		<div>
//           hi
//   		</div>

//   	)

// }



class NewMenu extends Component{
	constructor(props) {
    super(props)


	    console.log(props)

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
		console.log(this.state)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);



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
	}
	
	render(){
		const qty = {
	    	cheese: 2,
	    	olives: 0.75,
	    	antipasti: 0.75,
	    	crostini: 3,
	    	chicken: 0.5,
	    	ham: 1,
	    	turkey: 1, 
	    	steak: 1, 
	    	rolls: 3,
	    	salad: 4,
	    	soup: 2, 
	    	pie: 1,
	    	icecream: 8,
	    	cake: 1,
	    	custard: 1,
	    	red: 0.3,
	    	white: 0.3

	    }
	    const food = {
	    	appetizers: ['crostini', 'antipasti', 'olives', 'cheese'],
	    	mains: ['chicken', 'steak', 'turkey', 'ham'],
	    	sides: ['rolls', 'salad', 'soup'],
	    	desserts: ['pie', 'icecream', 'cake', 'custard'],
	    	wine: ['red', 'white']

	    }
		return(
			<div className="menu-box">
				<div className="box">
					<div className="center-box menu-container">
						<h2> SAVED PAGE </h2>
						<h5> Name: <input type="form-control" /></h5>
						<h5> Guests #: <input type="form-control" onChange={this.handleGuests} /> </h5><br/>

						<h4> Choose your Appetizers: </h4>
						{food.appetizers.map(item=>{
							let Quantity = qty[item] * this.state.numberOfGuests
						return <div key={item}>
								<li>
								{item} <input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} />
								{this.state[item] == true? Quantity : null}
								</li>
								</div>
						})}

						<h4> Choose your Main: </h4>

						{food.mains.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests
							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							</li>
							</div>
						})}

						<h4> Choose your Sides: </h4>
						{food.sides.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests

							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							</li>
							</div>
						})}
						<h4> Choose your Desserts: </h4>
						{food.desserts.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests
							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							</li>
							</div>
						})}
						<h4> Choose your Beverage: </h4>
						{food.wine.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests
							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							</li>
							</div>
						})}
						<button type="button" className="btn btn-primary btn-lg center-block" onClick={this.handleSubmit}><a href="/saved">Create</a></button>
					</div>
				</div>
			</div>
		)
	}
}

export default NewMenu;