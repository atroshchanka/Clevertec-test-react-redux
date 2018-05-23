export function formFetchDataSuccess(formData) {
  return {
    type: 'FORM_FETCH_DATA_SUCCESS',
    formData,
  };
}

export function sendFetchDataSuccess(formValue) {
  return {
    type: 'SEND_FETCH_JSON',
    formValue,
  };
}

export function responseFromServerSuccess(response) {
  return {
    type: 'RESPONSE_FROM_THE_SERVER',
    response,
  };
}


export function sendFetchData(url, data) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(formValue => dispatch(responseFromServerSuccess(formValue)));
  };
}

export function formFetchData(url) {
  return (dispatch) => {
    fetch(url, {
      method: 'post',
    })
      .then(response => response.json())
      .then(formData => dispatch(formFetchDataSuccess(formData)))
      .catch(error => console.log(error));
  };
}
