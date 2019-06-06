import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {

  constructor (props) {
    super(props);
    console.log('constructor');
    this.state = {
      inputValue: '',
      list: ['abc', 123]
    }

  }

  handleInputChange = (ev) => {
    const value = ev.target.value;

    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return (
      {
        inputValue: '',
        list: [...prevState.list, prevState.inputValue]
      }
    )}, () => {
      // setState完成后调用
      // console.log(3, this.ul.children.length);
    })

  }

  removeItem = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    })
  }

  getTodoItem = () => {
    return this.state.list.map((item, index) => (
      <TodoItem 
      key={index}
      index={index}
      content={item}
      handlerClickMethods={this.removeItem}
      />
    ))
  }

  render () {
    console.log('render');
    return (
      <Fragment>
        <header>
          <label htmlFor="insetInput">
            输入内容：
          </label>
          <input 
            id="insetInput" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange} 
            type="text"
          />
          <button onClick={this.handleClick}>提交</button>
        </header>
        <ul className="list">
          {this.getTodoItem()}
        </ul>
        <ul ref={ul => {this.ul = ul}}>
          {
            this.state.list.map((item, index) => (
              <li
                key={index}
              >{item}</li>
            ))
          }
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>
    )
  }
}

export default TodoList;
