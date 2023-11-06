import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoPlan from './TodoPlan';
import styles from './TodoList.module.css'

class TodoList extends Component {
    constructor (props) {
        super (props)
        this.state = {
            list: []
        }
    }

    addNewPlan = (data) => {
        const {list} = this.state;
        const newItem = {
            todo: data,
            id: list.length
        };
        this.setState({
            list: [...list, newItem]
        })
    }

    deletePlan = (id) => {
        const {list} = this.state;
        const filteredArray = list.filter((elem) => elem.id !== id)
        this.setState({
            list: filteredArray
        })
    }

    mapPlans = () => {
        const {list} = this.state;
        return list.map((elem) => <TodoPlan text = {elem.todo} 
                                            key = {elem.id} 
                                            id = {elem.id} 
                                            sendData = {this.deletePlan}/>)
    }

    render() {
        return (
            <div className = {styles.container}>
                <TodoForm sendDataToParent = {this.addNewPlan}/>
                <ul className=''>
                    {this.mapPlans()}
                </ul>
            </div>
        );
    }
}

export default TodoList;


