import * as types from '../types';

const initialState = {
  botaoClicando: false,
};

const reducer = (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicando = !newState.botaoClicando;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return newState;
    }

    default: {
      return state;
    }
  }
};
