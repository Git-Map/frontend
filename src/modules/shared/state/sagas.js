import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {ACTION_TYPES as ActionTypes} from './actions';
import Actions from './actions';

import Countries from '../services/Countries';

const fetchCountries = function*(){
    const countries = yield call(Countries.list);
    yield put(Actions.countriesReceived(countries));
};

export default function* rootSaga() {
    yield* takeEvery(ActionTypes.FETCH_COUNTRIES, fetchCountries);
}
