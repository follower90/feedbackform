import React, {Component} from 'react';
import FormField from './FormField';

class Form extends Component {

	state = {
		success: false,
		error: false,
	};

	validateAndSend(e) {
		e.preventDefault();
		this.setState({error: false});
		this.validate() && this.send();
	}

	validate() {
		const errors = Object.values(this.refs).map(f => f.isValid()).filter(e => e === false);
		if (errors.length > 0) {
			this.setState({success: false});
		}

		return errors.length === 0;
	}

	send() {
		const form = new FormData(document.getElementById('form'));
		fetch('http://localhost:3333/api.php?method=Feedback.send', {
			method: "POST",
			mode: 'cors',
			body: form
		})
		.then((response) => {
			this.setState({success: this.props.messages.success});
		})
		.catch((e) => this.setState({error: this.props.messages.error}));
	}

	render() {
		const {fields} = this.props;

		return (
			<div className="feedback-form">
				<form id="form">
					{ this.state.error && <div className="form-alert form-error">{this.state.error}</div>}
					{ this.state.success && <div className="form-alert form-success">{this.state.success}</div>}

					{ !this.state.success && <div className="input-fields">
						{fields.map((field, i) => <FormField key={i} ref={i} options={field}/>)}
					</div> }
					{ !this.state.success &&
					<button type="submit" className="btn btn-primary" onClick={this.validateAndSend.bind(this)}>
						Send</button> }
				</form>
			</div>
		);
	}
}

export default Form;
