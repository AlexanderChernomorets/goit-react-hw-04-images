import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import fetchApi from 'Servises/fetchApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

function App() {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageDescription, setCurrentImageDescription] = useState(null);

  useEffect(() => {
    if (imageName !== '') {
      setLoading(prevLoading => !prevLoading);

      fetchApi(imageName, page)
        .then(({ hits: images, totalHits: total }) => {
          const imagesArray = images.map(
            ({ id, tags, webformatURL, largeImageURL }) => ({
              id: id,
              alt: tags,
              smallImage: webformatURL,
              largeImage: largeImageURL,
            })
          );
          setTotalImages(total);
          if (total === 0) {
            Notiflix.Notify.failure(
              'Sorry, there are no images for your search query. Please try again.'
            );
          }
          return imagesArray;
        })
        .then(imagesArray => {
          if (page === 1) {
            setImages(imagesArray);
          }
          return imagesArray;
        })
        .then(imagesArray => {
          if (page !== 1) {
            setImages(prevImages => [...prevImages, ...imagesArray]);
          }
        })
        .catch(error => setError(error))
        .finally(() => setLoading(prevLoading => !prevLoading));
    }
  }, [page, imageName]);

  const getSearchRequest = imageName => {
    if (imageName === '') {
      Notiflix.Notify.info('Please, enter an image title to start searching.');
    }
    setImageName(imageName);
    setPage(1);
  };

  const onNextFetch = () => setPage(prevPage => prevPage + 1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      setShowModal(!showModal);
      setCurrentImageUrl(currentImageUrl);
      setCurrentImageDescription(currentImageDescription);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={getSearchRequest} />

      {images && <ImageGallery images={images} openModal={openModal} />}

      {loading && <Loader />}

      {images.length < totalImages && <Button onNextFetch={onNextFetch} />}

      {showModal && (
        <Modal
          onClose={toggleModal}
          currentImageUrl={currentImageUrl}
          currentImageDescription={currentImageDescription}
        />
      )}
    </div>
  );
}

export default App;
