import * as actionTypes from './actions-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGELENGTH:
      return { ...state, ...action.payload };
    case actionTypes.CHANGEOPTIONS:
      return { ...state, optionsInput: { ...state.optionsInput, ...action.payload } };
    case actionTypes.GENERATEPASS:
      return { ...state, results: { ...action.payload } };
  }

  return state;
};
