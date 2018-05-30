import React, {Component} from 'react';
import '../index.css';

class Main extends Component{
	render(){
		return(
		<div className="outer-box">
			<img id="pic1" src="pic1.png" />
			 <img id="pic2" src="cooking-tool-1.svg" />
			 <img id="pic3" src="cooking-tool-1.svg" />
			 <img id="pic6" src="cooking-tool-2.svg" />
			 <img id="pic7" src="cooking-tool-2.svg" />
			  <img id="pic8" src="cooking-tool-2.svg" />
			  <img id="pic9" src="cooking-tool-1.svg" />
				<div className="box">
			      	<div className="center-box">
			        	<p> 
				         	<span className="the"> The </span><br/>
				        		Foodculator 
			        	</p>
			      	</div>
			      	<button type="button" className="btn btn-primary btn-lg center-block"><a href="/newmenu">Get Started</a></button>
			  </div>
		</div>
		)
	}
}


export default Main