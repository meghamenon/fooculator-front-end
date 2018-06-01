import React, {Component} from 'react';
import '../index.css';


class Desserts extends Component{
	state = {
		numberOfGuests: '',
		pie: false,
	    icecream: false,
	    cake: false,
	    custard: false
	}

	componentDidMount() {
		this.setState({
			numberOfGuests: this.props.numberOfGuests
		})
	}


	handleChange = (event) => {
		let name = event.target.name;
		this.setState({
			numberOfGuests: this.props.numberOfGuests,
			[name]: !this.state[name]
		})
	}
	render(){
		const qty = {
			pie: 1,
	    	icecream: 8,
	    	cake: 1,
	    	custard: 1
		}
		const food = {
			desserts: ['pie', 'icecream', 'cake', 'custard']
		}
		let desserts = food.desserts.map(item=>{
			let Quantity = qty[item] * this.state.numberOfGuests
			return <div key={item}>
			<li>
			{item} <input type="checkbox" className="form-check-input" onChange={this.handleChange} name={item} value={this.state[item]} />
			{this.state[item] == true? Quantity : null}
			</li>
			</div>
		})
		return(
			<div className="center-box menu-container">
			{desserts}
			</div>

		)
	}
}

export default Desserts