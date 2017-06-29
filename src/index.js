import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
//var propTypes = require('prop-types');
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));


/*************************************
*This may be used later in a component
**************************************/
// class Badge extends React.Component {
// 	render() {
// 		return(
// 			<div>
// 				<img
// 					src={this.props.img}
// 					alt='Avatar'
// 					style={{width: 100, height: 100}}	
// 				/>
// 				<h1>Name: {this.props.name}</h1>
// 				<h3>Username: {this.props.username}</h3>
// 			</div>
// 		)
// 	}
// }

// Badge.propTypes = {
// 	img: propTypes.string.isRequired,
// 	name: propTypes.string.isRequired,
// 	username: propTypes.string.isRequired
// }

// ReactDOM.render(
// <Badge
// 	name='Travis Schnider'
// 	username='tschnider'
// 	img='https://avatars1.githubusercontent.com/u/17714767?v=3&s=460'
//  />, 
//  document.getElementById('root'));
