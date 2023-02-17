import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

function Button({ onNextFetch }) {
  return (
    <LoadMoreBtn type="button" onClick={onNextFetch}>
      Load More
    </LoadMoreBtn>
  );
}

Button.propTypes ={
  onNextFetch: PropTypes.func.isRequired,
}
export default Button;
