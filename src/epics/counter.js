import { COUNTER } from '../constants/actionTypes';
import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

type ActionsObservable = {
  source: Object,
  _isScalar: boolean,
  ofType: Function,
}

export const doubleClick = (action$: ActionsObservable) =>
  action$.pipe(
    ofType(COUNTER.doubleClick),
    delay(1000),
    mapTo({ type: COUNTER.doubleAdd })
  );