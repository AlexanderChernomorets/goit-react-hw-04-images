import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper, ModalBtn, Img } from './Modal.styled';

const modalRoot = document.querySelector('#root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, currentImageUrl, currentImageDescription } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <ModalWrapper>
          <ModalBtn type="button" onClick={onClose}>
            ✖️
          </ModalBtn>
          <Img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
          />
        </ModalWrapper>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
