import React, {Component} from 'react';
import '../index.css';


class Name extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name
		}
	}

	update = (e) => {
		console.log(e.target.value);
		this.setState({
			name: e.target.value
		})
	};
	render(){
		return(
			<div className="center-box menu-container">
			<h5> Name: <input 
			onChange={this.update}
			value={this.state.name}/></h5>
			</div>
		)
	}
}

export default Name