import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Form from 'arui-feather/form';
import Button from 'arui-feather/button';
import { openModal } from '../../actions/dialogWindow';
import './DinamicForm.css';
import FieldFormText from "../FieldFormText/FieldFormText";
import FieldFormNumeric from "../FieldFormNumeric/FieldFormNumeric";
import FieldFormList from "../FieldFormList/FieldFormList";



// Динамическая форма
class DinamicForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  

	static propTypes = {
		isOpen: PropTypes.object,
		sendFetch: PropTypes.func,
		data: PropTypes.object
  };

	handleClick(){
		this.props.dispatch(openModal());
		setTimeout(() => {
			if (this.props.formData.isOpen) { this.props.sendFetch('http://test.clevertec.ru/tt/data', { form: this.props.changeForm }); }
		}, 3000);

	}

  render() {

		if(!this.props.data.fields){
			return null;
		}
    return (
        <Form onSubmit={this.handleClick} action="">
					<h2>{this.props.data.title}</h2>
					{
						this.props.data.fields.filter(field => field.name === 'text')
							.map(text => <FieldFormText field={text} />)
					}
					{
						this.props.data.fields.filter(field => field.name === 'numeric')
							.map(numeric => <FieldFormNumeric field={numeric} />)
					}

					{
						this.props.data.fields.filter(field => field.name === 'list')
							.map(list => <FieldFormList field={list} />)
					}

					<Button type="submit">Отправить</Button>
        </Form>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default DinamicForm = connect (
	mapStateToProps,
)(DinamicForm);
