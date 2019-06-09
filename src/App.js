import React, { Component } from 'react';
import { message } from 'antd';
import store from './store';
import { getTodoList, getInputChangeAction, getSubmitInputValueAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

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

  componentDidMount = () => {
    const action = getTodoList();
    console.log(action);
    store.dispatch(action);
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
