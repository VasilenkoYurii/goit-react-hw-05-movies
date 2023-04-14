import PropTypes from 'prop-types';
import { ErrorContainer, ErrorPrg } from './ErrorMassage.styled';

export const ErrorMassage = ({ massage }) => {
  return (
    <ErrorContainer>
      <ErrorPrg>{massage}</ErrorPrg>
    </ErrorContainer>
  );
};

ErrorMassage.propTypes = {
  massage: PropTypes.string.isRequired,
};
