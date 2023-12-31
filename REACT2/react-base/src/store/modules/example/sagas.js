import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './action';
import *as types from '../types';
import { Default } from 'react-toastify/dist/utils';

const requisicao = () =>
const Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000);
});

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toas.error('Deu erro.');
    yield put(actions.clicaBotaoFailure();)
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])
