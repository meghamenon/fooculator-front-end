import React, {Component} from 'react';
import '../index.css';

class Mains extends Component{
	state = {
		numberOfGuests: '',
		chicken: false,
	    turkey: false,
	    steak: false,
	    ham: false
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
	    	chicken: 0.5,
	    	ham: 1,
	    	turkey: 1, 
	    	steak: 1
	    }
	const food = {
	    	
	    	mains: ['chicken', 'steak', 'turkey', 'ham']
	    }
	    let mains = food.mains.map(item=>{
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
			
			{mains}
			</div>

		)
	}
}

export default Mains