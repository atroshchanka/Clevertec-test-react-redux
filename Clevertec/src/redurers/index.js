import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { formData } from './fetchData';
import {changeForm} from "./changeForm";

export default combineReducers({
  formData,
	changeForm,
  form: formReducer,
});