import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
function withNavigation(Component) {
    return function WrappedComponent(props) {
      const navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
    };
  }

  withNavigation.propTypes = {
    Component: PropTypes.element.isRequired
}

export default withNavigation