import { 
  SET_LIST, 
  CHANGE_INPUT_VALUE, 
  SUBMIT_INPUT_VALUE, 
  DELETE_ITEM
} from './actionTypes';
import axios from 'axios';

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

export const getTodoList = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/index/recommend.json');
      // const data = await axios.get('/list.json');
      let {list} = data;
      list = list.map(item => item.title);
      console.log(list);
      const action = getSetListAction(list);
      dispatch(action);
    } catch (err) {
      console.error(err.message);
    }
  }
}
