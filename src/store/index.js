import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
/*
  1、store是唯一的
  2、只有store能改变自己的内容
  3、Reducer只能是纯函数
*/
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

export default store;