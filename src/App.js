import React, { Component } from 'react';
import { Input, Button, List, message } from 'antd';
import store from './store';
import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM } from './store/actionTypes'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
        <div style={{ width: 400, margin: '0 0 10px 10px', paddingTop: 10 }}>
          <Input 
            value={this.state.inputValue}
            style={{ width: 300, marginRight: 10 }} 
            placeholder="Todo Info" 
            onChange={this.handleInputChange}
          />
          <Button onClick={this.submit} type="primary">提交</Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.state.list}
            style={{width: 300, marginLeft: 10}}
            renderItem={(item, index) => (
              <List.Item 
                onClick={() => {
                  this.deleteItem(index);
                }}
              >
               {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }

  handleInputChange = ev => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: ev.target.value
    }

    store.dispatch(action);
  }

  submit = () => {
    if (!this.state.inputValue) {
      return message.error('请输入内容！');
    }
    const action = {
      type: SUBMIT_INPUT_VALUE,
      value: this.state.inputValue
    }
    store.dispatch(action);
  }

  deleteItem = (index) => {
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action);
  }
}

export default App;
