const initialState = {
  botaoClicando: false,
};

const reducer = (state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicando = !newState.botaoClicando;
      return newState;
    }

    default: {
      return state;
    }
  }
};
