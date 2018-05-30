import React, {Component} from 'react';
import '../index.css';
import Header from '../components/Header';

class NewMenu extends Component{
	constructor(props) {
    super(props);
	    this.state = {
	    numberOfGuests: null,
	    cheese: false,
	    olives: false,
	    antipasti: false,
	    crostini: false,
	    chicken: false,
	    turkey: false,
	    steak: false,
	    ham: false,
	    soup: false,
	    salad: false,
	    rolls: false,
	    pie: false,
	    icecream: false,
	    cake: false,
	    custard: false

	    };

  }

	handleChange = (event) => {
		let name = event.target.name;
		this.setState({
			[name]: !this.state[name]
		})
		console.log(this.state)
	}

	handleGuests = (event) => {
		this.setState({
			numberOfGuests: event.target.value
		})
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
	    	custard: 1

	    }
	    const food = {
	    	appetizers: ['crostini', 'antipasti', 'olives', 'cheese'],
	    	mains: ['chicken', 'steak', 'turkey', 'ham'],
	    	sides: ['rolls', 'salad', 'soup'],
	    	desserts: ['pie', 'icecream', 'cake', 'custard']

	    }
		return(
			<div className="menu-box">
				<div className="box">
					<div className="center-box menu-container">
						<h2> Menu </h2>
						<h5> Name: <input type="form-control" /></h5>
						<h5> Guests #: <input type="form-control" onChange={this.handleGuests} value={this.state.numberOfGuests} /> </h5><br/>
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
							{this.state[item] == true ? Quantity : null}
							</li>
							</div>
						})}

						<h4> Choose your Sides: </h4>
						{food.sides.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests
							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							{this.state[item] == true ? Quantity : null}
							</li>
							</div>
						})}
						<h4> Choose your Desserts: </h4>
						{food.desserts.map(item=> {
							let Quantity = qty[item] * this.state.numberOfGuests
							return <div key={item}>
							<li>
							{item}<input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} /> 
							{this.state[item] == true ? Quantity : null}
							</li>
							</div>
						})}
						<button type="button" className="btn btn-primary btn-lg center-block"><a href="#">Save Menu</a></button>
					</div>
				</div>
			</div>
		)
	}
}

export default NewMenu;