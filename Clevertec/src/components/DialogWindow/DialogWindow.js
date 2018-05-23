import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'arui-feather/button';
import { closeModal } from '../../actions/dialogWindow';1
import Plate from 'arui-feather/plate';
import Paragraph from 'arui-feather/paragraph';
import Spin from 'arui-feather/spin';
import Heading from 'arui-feather/heading';

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
      <Plate hasCloser={true} onCloserClick={this.handleClick}>
      {this.props.formData.response ? <div>{this.props.formData.response.result}</div> : <Spin size='xl' visible={ true } />}
        <Paragraph view='normal'>
          Загрузка подождите...
        </Paragraph>
      </Plate>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DialogWindow);
