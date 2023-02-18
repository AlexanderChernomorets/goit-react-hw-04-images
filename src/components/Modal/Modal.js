import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper, ModalBtn, Img } from './Modal.styled';

const modalRoot = document.querySelector('#root');

const Modal = ({ onClose, currentImageUrl, currentImageDescription }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
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
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};
