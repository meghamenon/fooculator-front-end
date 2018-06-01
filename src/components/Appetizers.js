import React, {Component} from 'react';
import '../index.css';


class Appetizers extends Component{
		state = {
			numberOfGuests: '',
			crostini: false,
			cheese: false,
		    olives: false,
		    antipasti: false,
		    quantity: ''
		}

	componentDidMount() {
		this.setState({
			numberOfGuests: this.props.numberOfGuests
		})
	}

	handleQuantity = (event) =>{
		this.setState({
			quantity: event.target.value
		})
	}

	handleChange = (event) => {
		let name = event.target.name;

		this.setState({
			numberOfGuests: this.props.numberOfGuests,
			[name]: !this.state[name]
		})

		window.setTimeout(() => {
			this.props.test(this.state);
		}, 0)
	}
	
	render(){
		console.log("APP STATE = ", this.state)
		const qty = {
	    	cheese: 2,
	    	olives: 0.75,
	    	antipasti: 0.75,
	    	crostini: 3

	    }
	const food = {
	    	appetizers: ['crostini', 'antipasti', 'olives', 'cheese'],

	    }
		let appetizers = food.appetizers.map(item=>{
			let Quantity = qty[item] * this.state.numberOfGuests
			return <div key={item}>
			<li>
			{item} <input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} />
			{this.state[item] == true ? Quantity : null}
			</li>
			</div>
		})
		return(
			<div className="center-box menu-container">
			{appetizers}
			</div>
		)
	}
}


export default Appetizers