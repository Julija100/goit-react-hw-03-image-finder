import PropTypes from 'prop-types';
import { StyledButton, StyledSearchFormButtonLabel } from './StyledButton'

const Button = ({ label, onLoadMoreButtonClick }) => {
    return (
        <StyledButton onClick={onLoadMoreButtonClick}>
            <StyledSearchFormButtonLabel />
            {label}
            <StyledSearchFormButtonLabel />
        </StyledButton>
    );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};

export default Button;