import React, { Component } from 'react';

class Test extends Component {
  constructor (props) {
    super(props);
    console.log('Test constructor');
    this.state = {
      msg: 'hello world!'
    }
  }

  // 组件即将被挂载
  componentWillMount = () => {
    console.log('Test componentWillMount');
  }
  // 组件挂载完成
  componentDidMount = () => {
    console.log('Test componentDidMount');
  }

  // props、state相关
  componentWillReceiveProps = () => {
    console.log('Test componentWillReceiveProps');
  }

  shouldComponentUpdate = () => {
    console.log('Test shouldComponentUpdate (你的组件需要更新吗？)');
    return true;
  }

  componentWillUpdate = () => {
    console.log('Test componentWillUpdate');
  }

  componentDidUpdate = () => {
    console.log('Test componentDidUpdate');
  }

  // state相关

  handlerChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      msg: value
    }))
  }

  render () {
    console.log('Test render');
    return <div>
      <input 
        type="text" 
        value={this.state.msg}
        onChange={this.handlerChange}
      
      />
      <div>{this.props.content}</div>
    </div>
  }
}

export default Test;
