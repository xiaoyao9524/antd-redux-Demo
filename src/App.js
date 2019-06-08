import React, { Component } from 'react';
import { message } from 'antd';
import store from './store';
import { getSetListAction, getInputChangeAction, getSubmitInputValueAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        submit={this.submit}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }

  componentDidMount = async () => {
    try {
      const {data} = await axios.get('/index/recommend.json');
      // const data = await axios.get('/list.json');
      const {list} = data;
      const action = getSetListAction(list.map(item => item.title));
      store.dispatch(action);
    } catch (err) {
      console.error(err.message);
    }
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }

  handleInputChange = ev => {
    const action = getInputChangeAction(ev.target.value);
    
    store.dispatch(action);
  }

  submit = () => {
    if (!this.state.inputValue) {
      return message.error('请输入内容！');
    }
    const action = getSubmitInputValueAction(this.state.inputValue);

    store.dispatch(action);
  }

  deleteItem = (index) => {
    const action = getDeleteItemAction(index);

    store.dispatch(action);
  }
}

export default App;
