const defaultState = {
  inputValue: 'Hello World',
  list: [
    '学习React',
    '学习Redux'
  ]
}

export default (state = defaultState, action) => {
  console.log('action: ', action);
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'change_input_value':
      newState.inputValue = action.value;
      break;
    case 'submit_input_value':
      newState.inputValue = '';
      newState.list.push(action.value);
      break;
    case 'delete_item':
      newState.list.splice(action.index, 1);
      break;
    default: 
      console.log('未知acionType: ', action.type);
  }
  return newState;
}