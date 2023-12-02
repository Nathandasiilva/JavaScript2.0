import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
          to={{ pathname: '/Login', state: { prevPath: restlocation.pathname } }}
      />
    );
  }
}

//eslint-disable-next-line react/jsx-props-no-spreading
return <Route {...rest} component={component} />;

MyRoute.defaultProps = {
  isClosed = flasem,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([propTypes.element, propTypes.func])
  .isRequired,
  isClosed: PropTypes.bool,
};
