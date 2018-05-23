import React, { Component } from 'react'
import FormField from 'arui-feather/form-field';
import RadioGroup from 'arui-feather/radio-group';
import Label from 'arui-feather/label';
import Radio from 'arui-feather/radio';
import {connect} from "react-redux";
import {changeForm} from "../../actions/changeForm";



class FieldFormList extends Component {
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
		const arrayRadio = [];

		for (const key in this.props.field.values) {
			arrayRadio.push(
				<Radio
				name={this.props.field.name}
				value={key}
				key={key}
				text={this.props.field.values[key]}
				/>);
		}

    return (
			<FormField>
				<Label>
					{this.props.field.title}
				</Label>
				<RadioGroup type='line' onChange={this.handleChange} >
					{arrayRadio}
				</RadioGroup>
			</FormField>
    )
  }
}
function mapStateToProps(state) {
	return state;
}

export default connect (
	mapStateToProps,
)(FieldFormList);

