import React from 'react';
import { Input, Button, List } from 'antd';

/**
 * 一个组件只有render函数时可以写成“无状态组件”
 * 无状态组件其实只是一个函数，return一个jsx
 * 优点：性能好，只是一个函数
 */

const TodoListUI = props => (
    <div>
        <div style={{ width: 400, margin: '0 0 10px 10px', paddingTop: 10 }}>
            <Input
                value={props.inputValue}
                style={{ width: 300, marginRight: 10 }}
                placeholder="Todo Info"
                onChange={props.handleInputChange}
            />
            <Button onClick={props.submit} type="primary">提交</Button>
        </div>
        <div>
            <List
                bordered
                dataSource={props.list}
                style={{ width: 300, marginLeft: 10 }}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => {
                            props.deleteItem(index);
                        }}
                    >
                        {item}
                    </List.Item>
                )}
            />
        </div>
    </div>
)

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{ width: 400, margin: '0 0 10px 10px', paddingTop: 10 }}>
//                     <Input
//                         value={this.props.inputValue}
//                         style={{ width: 300, marginRight: 10 }}
//                         placeholder="Todo Info"
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button onClick={this.props.submit} type="primary">提交</Button>
//                 </div>
//                 <div>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         style={{ width: 300, marginLeft: 10 }}
//                         renderItem={(item, index) => (
//                             <List.Item
//                                 onClick={() => {
//                                     this.props.deleteItem(index);
//                                 }}
//                             >
//                                 {item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI;
