import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Label from 'arui-feather/label';
import Form from 'arui-feather/form';
import Button from 'arui-feather/button';
import { openModal } from '../../actions/dialogWindow';

import './DinamicForm.css';



// Динамическая форма
class DinamicForm extends Component {

	static propTypes = {
		isOpen: PropTypes.object,
		action: PropTypes.func,
		unmount: PropTypes.func

	};

  render() {
		const { handleSubmit } = this.props;

		const submit =  (values) => {
			this.props.dispatch(openModal());
			setTimeout(() => {
			  if (this.props.formData.isOpen) { this.props.sendFetch('http://test.clevertec.ru/tt/data', { form: values }); }
			}, 3000);
		};

    const field = [];
    if (this.props.data.fields) {
      field.push(<div><h1 className="title_form">{this.props.data.title}</h1></div>);

      this.props.data.fields.map((item) => {
        if (item.name === 'list') {
          const arrayRadio = [];

          for (const key in item.values) {
						arrayRadio.push(<Field type="radio" component="input" name={item.name} value={key} />);
            arrayRadio.push(item.values[key]);
          }
					field.push(<div><Label>{item.title}</Label><div className="radio">{arrayRadio}</div></div>);
        }
        else if (item.name === 'numeric') {
          field.push(<div><Label>{item.title}</Label>
            <Field type="number" component="input" name={item.name} step="0.1" pattern="\d+(\.\d+)?" /></div>);
        }
        else {
          field.push(<div><Label>{item.title}</Label><Field type={item.type} component="input" name={item.name} /></div>);
        }
      });
			field.push(<Button type="submit">Отправить</Button>);
    }

    return (
      <div>
        <Form onSubmit={handleSubmit(submit)} noValidate="false" autocomplete="false">
					{field}
        </Form>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return state;
}

DinamicForm = connect (
	mapStateToProps,
)(DinamicForm);

const FormContainer = reduxForm({
		form: "POST",
	})(DinamicForm);
export default FormContainer;