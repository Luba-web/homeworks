import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  FETCH_ITEM_REQUEST,
  FETCH_SERVICES_REQUEST,
} from '../actions/actionTypes';
import {
  fetchItemSuccess,
  fetchItemFailure,
  fetchServicesSuccess,
  fetchServicesFailure,
} from '../actions/actionCreators';

export const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    switchMap((o) =>
      ajax.getJSON('http://localhost:7073/api/services').pipe(
        map((o) => fetchServicesSuccess(o)),
        catchError((e) => of(fetchServicesFailure(e)))
      )
    )
  );

export const fetchItemEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_ITEM_REQUEST),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7073/api/services/${o.payload.id}`).pipe(
        map((o) => fetchItemSuccess(o)),
        catchError((e) => of(fetchItemFailure(e)))
      )
    )
  );
