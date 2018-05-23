import React, { Component } from 'react'
import {connect} from "react-redux";
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';

import { changeForm } from "../../actions/changeForm";

class FieldFormText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
		 this.props.dispatch(changeForm({
			 [this.props.field.name]: event
		 }))

	}


  render() {
    return (
      <FormField>
				<Label>
					{this.props.field.title}
				</Label>
				<Input
				type={this.props.field.type}
				name={this.props.field.name}
				onChange={this.handleChange}
				value={this.props.changeForm[this.props.field.name]}
				required
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
)(FieldFormText);