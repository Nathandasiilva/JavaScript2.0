import * as types from '../types';

const initialState = {
  botaoClicando: false,
  token: false,
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};
