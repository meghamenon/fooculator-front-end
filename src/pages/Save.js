import React, {Component} from 'react';
import Appetizers from '../components/Appetizers';
import Mains from '../components/Mains';
import Sides from '../components/Sides';
import Desserts from '../components/Desserts';
import Beverages from '../components/Beverages';
import { Redirect, Link } from 'react-router-dom';
import Name from '../components/Name';
import '../index.css';


class Save extends Component{
	constructor(props) {
    super(props);
	    this.state = {
	   		 name: ''
	    };

  }

  componentDidMount() {
  	let results = [];
  	for (let app in this.props.location.state) {
			results.push({ [app]: this.props.location.state[app] })
		}
	this.setState({ appetizers: results })
  }

  update = (e) => {
		console.log(e.target.value);
		this.props.onUpdate(e.target.value);
		this.setState({
			name: e.target.value
		})
	};

	render(){
		// console.log("SAVED STATE: ", this.state.[Object.keys()])

		console.log("SAVED PROPS: ", this.props)

		const qty = {
	    	cheese: 2,
	    	olives: 0.75,
	    	antipasti: 0.75,
	    	crostini: 3

	    }

	 	let results = [];
		for (let app in this.props.location.state) {
			results.push(app + ' ' + qty[app] * this.state.numberOfGuests + ' ')
		}

		console.log("RESULTS", results)
		return(
			<div className="menu-box">
				<div className="box">
					<div className="center-box menu-container">
						<h2> Saved Menu </h2>
						<Name />
						<h5> Guests #: </h5><br/>
						<h4> Choose your Appetizers: </h4>
						{ results }
						<h4> Choose your Main: </h4>
						<Mains />
						<h4> Choose your Sides: </h4>
						<Sides />
						<h4> Choose your Desserts: </h4>
						<Desserts />
						<h4> Choose your Beverage: </h4>
						<Beverages />
						<button type="button" className="btn btn-primary btn-lg center-block" onClick={this.handleSubmit}>Create</button>
						<Link className="btn btn-primary btn-lg center-block" to="/saved" onClick={this.handleSubmit}>Saved</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Save 