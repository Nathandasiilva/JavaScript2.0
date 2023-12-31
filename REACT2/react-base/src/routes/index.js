import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/pages404';

export default function Routes() {
  return (
    <switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Pages404} />
    </switch>
  );
}
