import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
  return (
    <Gallery>
      {images.map(({ id, smallImage, alt, largeImage }) => (
        <ImageGalleryItem
          key={id}
          alt={alt}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      alt: PropTypes.string,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ImageGallery;

