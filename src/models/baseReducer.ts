/** @module Model:base */

import {
  combineReducers
} from 'redux';
import { MemoRappModelState } from '../types';

import { tagsReducer } from './tags';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<MemoRappModelState>({
  tags: tagsReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

