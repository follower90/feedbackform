import React, {Component} from 'react';

class FormField extends Component {

	state = {
		error: false
	};

	validationRules = {
		name: input => input.length > 3,
		email: input => input.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i),
		text: input => input.length > 10,
	};

	renderField(key, type) {
		switch (type) {
			case 'text':
				return <input className="form-control" name={key} ref="input" type="text"/>;
			case 'textarea':
				return <textarea className="form-control" name={key} ref="input"/>;
			default:
				return null;
		}
	}

	isValid() {
		const {validation, error} = this.props.options;
		if (this.validationRules[validation](this.refs.input.value)) {
			this.setState({error: false});
			return true;
		} else {
			this.setState({error: error});
			return false;
		}
	}

	render() {
		const {name, key, type} = this.props.options;
		return (
			<div className="form-group">
				<label>{name}</label>
				{ this.renderField(key, type) }
				{ this.state.error && <div className="input-vaidation-error">{this.state.error}</div> }
			</div>
		);
	}
}

export default FormField;
