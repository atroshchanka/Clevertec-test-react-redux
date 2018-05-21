import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { formData } from './fetchData';

export default combineReducers({
  formData,
  form: formReducer,
});