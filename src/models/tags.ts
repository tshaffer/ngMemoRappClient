import { cloneDeep } from 'lodash';

// ------------------------------------
// Constants

import { TagAction, MemoRappModelBaseAction } from './baseAction';

// ------------------------------------
export const ADD_TAG = 'ADD_TAG';

// ------------------------------------
// Actions
// ------------------------------------

export interface AddTagPayload {
  tag: string;
}

export const addTag = (
  tag: string,
): TagAction<AddTagPayload> => {

  return {
    type: ADD_TAG,
    payload: {
      tag,
    },
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: string[] = [];

export const tagsReducer = (
  state: string[] = initialState,
  action: MemoRappModelBaseAction<AddTagPayload>
): string[] => {
  switch (action.type) {
    case ADD_TAG: {
      const newState = cloneDeep(state);
      newState.push(action.payload);
      return newState;
    }
    default:
      return state;
  }
};

