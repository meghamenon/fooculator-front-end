import React, {Component} from 'react';
import '../index.css';

class Beverages extends Component{
	state = {
		numberOfGuests: '',
		red: false,
	    white: false,
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
	    	red: 0.3,
	    	white: 0.3
	    }

	    const food = {
	    	wine: ['red', 'white']
	    }

	    let beverages = food.wine.map(item=>{
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
			{beverages}
			</div>
		)
	}
}


export default Beverages