import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions/dialogWindow';

export function formData(state = { isOpen: false }, action) {
  switch (action.type) {
    case 'FORM_FETCH_DATA_SUCCESS':
      return action.formData;
    case 'SEND_FETCH_JSON':
      return {
        ...state,
        formResult: action.formValue,
      };
    case 'RESPONSE_FROM_THE_SERVER':
      return {
        ...state,
        response: action.response,
      };
    case OPEN_DIALOG:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_DIALOG:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
