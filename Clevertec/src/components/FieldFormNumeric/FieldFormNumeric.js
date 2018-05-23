import React, { Component } from 'react'
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import { changeForm } from "../../actions/changeForm";
import {connect} from "react-redux";

class FieldFormNumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	error: -1
		};

		this.handleChange = this.handleChange.bind(this);
  }

	handleChange(event){
  	this.setState({
			error: event.search(/^[0-9]*\.[0-9]+$/)
		});
		this.props.dispatch(changeForm({
			[this.props.field.name]: event
		}))
	}

  render() {
    return (
			<FormField>
							<Label>{this.props.field.title}</Label>
							<Input
								type='number'
								name={this.props.field.name}
								error={ this.state.error ? 'Использовать разделитель точку(2.11)' : null }
							  onChange={this.handleChange}
								value={this.props.changeForm[this.props.field.name]}
								/>
			</FormField>
    )
  }
}

function mapStateToProps(state) {
	return state;
}

export default connect (
	mapStateToProps,
)(FieldFormNumeric);