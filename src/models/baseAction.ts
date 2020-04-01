import { Action } from 'redux';

export interface MemoRappBaseAction extends Action {
  type: string;
  payload: {} | null;
}

export interface MemoRappModelBaseAction<T> extends Action {
  type: string;   // override Any - must be a string
  payload: T;
  error?: boolean;
  meta?: {};
}

export interface TagAction<T> extends MemoRappBaseAction {
  payload: T;
}
