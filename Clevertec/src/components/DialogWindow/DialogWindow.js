import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'arui-feather/button';
import { closeModal } from '../../actions/dialogWindow';1
import Spinner from '../Spinner/Spinner';
import './DialogWindow.css';

/**
 * Компонент диалоговое окно
 */
class DialogWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	static propTypes = {
		result: PropTypes.string,
		isOpen: PropTypes.bool,
		dispatch: PropTypes.func

	};

  handleClick() {
    this.props.dispatch(closeModal());
  }


  render() {
    const { isOpen } = this.props.formData;
    if (!isOpen) {
      return null;
    }
    return (
      <div className="modalDialog">
				<div>
				{this.props.formData.response ? <div>{this.props.formData.response.result}</div> : <Spinner />}
        <Button size='m' view='extra'
          onClick={this.handleClick}
        >Cancel
        </Button>
				</div>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DialogWindow);
