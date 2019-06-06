import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM } from './actionTypes'


const defaultState = {
  inputValue: 'Hello World',
  list: [
    '学习React',
    '学习Redux'
  ]
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
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