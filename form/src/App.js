import React, {Component} from 'react';
import Form from './components/Form';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Feedback Form</h1>
				<Form { ...this.props } />
			</div>
		);
	}
}

export default App;
