import React, {Component} from 'react';
import '../index.css';

class SavedMenu extends Component{
	constructor(){
		super();
		this.state = {
			appetizers: []
		};
	}
	componentDidMount() {
  	fetch('http://localhost:8080/api/menu/5b0f1a793d407bc91840a61c')
  	.then(results => {
  			return results.json();
  		}).then(data => {
  			console.log(1111, data)
  			let appetizers = data.appetizers.map((item) => {
  				return (

  					<div key={item}>
  					{item}
  					</div>
  				)
  			})

  			this.setState({ appetizers: appetizers});
  			console.log("state", this.state.appetizers)
  		})
	  }



render(){
	return (
		<div className="menu-box">
			<div className="box">
				<div className="center-box menu-container">
				{this.state.appetizers}
				</div>
			</div>
		</div>

		)
		
	}
}

export default SavedMenu