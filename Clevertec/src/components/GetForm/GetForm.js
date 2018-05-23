import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'arui-feather/button';
import { openModal } from '../../actions/dialogWindow';

/**
 * Компонент кнопка Получить форму
 */
class GetForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
		this.disable = this.disable.bind(this);

  }

	static propTypes = {
		dispatch: PropTypes.func,
		formData: PropTypes.object,
		action: PropTypes.func

	};

  handleClick() {
    this.props.dispatch(openModal());
    setTimeout(() => {
      if (this.props.formData.isOpen) {
				this.disable();
      	this.props.action('http://test.clevertec.ru/tt/meta');
      }
    }, 3000);
  }

  disable(){
  	this.props.unmount();
	}


  render() {
    return (
      <div>
        <Button type="button" size='m' onClick={this.handleClick}>Получить форму</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(GetForm);

