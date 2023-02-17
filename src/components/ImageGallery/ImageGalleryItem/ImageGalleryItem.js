import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({ alt, smallImage, largeImage, openModal }) {
  return (
    <GalleryItem onClick={openModal}>
      <GalleryImage src={smallImage} alt={alt} data-large={largeImage} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
