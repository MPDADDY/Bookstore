import { Triangle } from 'react-loader-spinner';

const Indicator = () => (
  <Triangle
    color="red"
  />
);

Indicator.defaultProps = {
  isVisible: true,
  wrapperClass: 'indicator',
};

export default Indicator;
