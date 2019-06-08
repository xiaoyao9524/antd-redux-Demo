import { 
  SET_LIST, 
  CHANGE_INPUT_VALUE, 
  SUBMIT_INPUT_VALUE, 
  DELETE_ITEM
} from './actionTypes';

export const getSetListAction = list => ({
  type: SET_LIST,
  list
})

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getSubmitInputValueAction = value => ({
  type: SUBMIT_INPUT_VALUE,
  value
})

export const getDeleteItemAction = index => ({
  type: DELETE_ITEM,
  index
})
