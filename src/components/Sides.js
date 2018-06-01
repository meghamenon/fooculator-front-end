import React, {Component} from 'react';
import '../index.css';


class Sides extends Component{
	state = {
		numberOfGuests: '',
		soup: false,
	    salad: false,
	    rolls: false,
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
		console.log(this.state)
	}
	render(){
		const qty = {
	    	rolls: 3,
	    	salad: 4,
	    	soup: 2
	    }
	    const food = {
	    	sides: ['rolls', 'salad', 'soup']
	    }
	    let sides = food.sides.map(item=>{
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
			{sides}
			</div>
		)
	}
}


export default Sides