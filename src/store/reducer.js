import { 
  SET_LIST, 
  CHANGE_INPUT_VALUE, 
  SUBMIT_INPUT_VALUE,
  DELETE_ITEM 
} from './actionTypes';


const defaultState = {
  inputValue: 'Hello World',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
    case SET_LIST:
      newState.list = action.list;
      break;
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case SUBMIT_INPUT_VALUE:
      newState.inputValue = '';
      newState.list.push(action.value);
      break;
    case DELETE_ITEM:
      newState.list.splice(action.index, 1);
      break;
    default:
  }
  return newState;
}