import React, {Component} from 'react';
import '../index.css';


class Header extends Component{
	render(){
		return(
	<header className="header">
      <div className="header-container">
        <div className="header-logo"></div>
          <ul className="header-nav">
            <li className="nav-item">
              <a>Tips</a>
            </li>
            <li className="nav-item">
              <a>Recipes</a>
              </li>
            <li className="nav-item">
              <a>Subscribe</a>
            </li>
          </ul>
      </div>
  </header>

		)
	}
}


export default Header 