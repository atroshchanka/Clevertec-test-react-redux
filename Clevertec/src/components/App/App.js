import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { formFetchData, sendFetchData } from '../../actions/fetchData';
import GetForm from '../GetForm/GetForm';
import Form from '../DinamicForm/DinamicForm';
import DialogWindow from '../DialogWindow/DialogWindow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderChild: true };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  static propTypes = {
  	formData: PropTypes.object,
		action: PropTypes.func,
		unmount: PropTypes.func

	};

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  render() {
    return (
      <div>
        {this.state.renderChild ?
					<GetForm
          action={this.props.fetchData}
          unmount={this.handleChildUnmount}
          isOpen={this.props.formData}
        /> : null}
        <Form
					data={this.props.formData}
					sendFetch={this.props.sendFetch} />
        <DialogWindow />

      </div>
    );
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(formFetchData(url)),
  sendFetch: (url, data) => dispatch(sendFetchData(url, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

