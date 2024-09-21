import { useState } from 'react';
import PropTypes from 'prop-types';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

useInput.propTypes = PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool])

export default useInput;