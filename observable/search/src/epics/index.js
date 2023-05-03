import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  tap,
  retry,
  filter,
  debounceTime,
  switchMap,
  catchError,
} from 'rxjs/operators';
import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
} from '../actions/actionTypes';
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
  clearSearch,
} from '../actions/actionCreators';

export const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    tap((o) => console.log(o)),
    map((o) => o.payload.search.trim()),
    filter((o) => o !== ''),
    debounceTime(300),
    map((o) => searchSkillsRequest(o))
  );

export const searchSkillsEpic = (action$) =>
  action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    tap((o) => console.log(o)),
    map((o) => o.payload.search),
    map((o) => (o !== '' ? o : clearSearch())),
    map((o) => new URLSearchParams({ q: o })),
    switchMap((o) =>
      ajax.getJSON(`${'http://localhost:7072/api/search'}?${o}`).pipe(
        retry(3),
        map((o) => searchSkillsSuccess(o)),
        catchError((e) => of(searchSkillsFailure(e)))
      )
    )
  );
