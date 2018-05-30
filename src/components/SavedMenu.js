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
  			let appetizers = data.results.map((item) => {
  				return (

  					<div key={item}>
  					{item.appetizers}
  					</div>
  				)
  			})

  			this.setState({ appetizers: appetizers});
  			console.log("state", this.state.appetizers)
  		})
	  }



render(){
	return (
		<div>
			<div>
				{this.state.appetizers}
			</div>
		</div>

		)
		
	}
}

export default SavedMenu