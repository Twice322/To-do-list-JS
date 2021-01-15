import React, {Component} from 'react';
import ToDoInput from "../toDoInput/ToDoInput";
import './main.css'
import TaskList from "../taskList/taskList";
import Footer from "../footerBar/footer-bar";
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: 'all',
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.completeTask = this.completeTask.bind(this)
        this.filterPost = this.filterPost.bind(this)
        this.changeFilter = this.changeFilter.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
    }
    addTask(event) {
        if (event.key === 'Enter') {
            const newItem = {
                text: event.target.value,
                completed: false,
                id: this.state.data.length + 1
            }
            event.target.value = '';
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }
    completeTask(event, id) {
        this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id)
                const newItem = {
                    text: data[index].text,
                    completed: event.target.checked,
                    id: data[index].id
                }
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
                return {
                    data: newArr
                }
            }
        )
    }
    deleteTask(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    filterPost(items, filter) {
        if (filter === 'completed') {
            return items.filter(item => item.completed)
        } else if (filter === 'active') {
            return items.filter(item => !item.completed)
        } else {
            return items;
        }
    }
    clearCompleted(data) {
        this.setState(({data}) => {
            const newArr = []
            data.map((item) => {
                if (!item.completed) {
                    const newItem = {
                        text: item.text,
                        completed: false,
                        id: item.id
                    }
                    newArr.push(newItem)
                }
            })
            return {
                data: newArr
            }
        })
    }
    changeFilter(filter) {
        this.setState({filter})
    }
    render() {
        const {data, filter} = this.state
        const visiblePosts = this.filterPost(data, filter)
        console.log(data)
        return(
            <div className='todo'>
                <div className='todo-heading'>todos</div>
                <div className='todo-list'>
                    <ToDoInput
                        onKeyPress={this.addTask}/>
                    <TaskList
                        data={visiblePosts}
                        onClick={this.deleteTask}
                        onChange={this.completeTask}/>
                    <Footer data={this.state}
                            filter={'completed'}
                            filterPost={this.filterPost}
                            filterChange={this.changeFilter}
                            clearCompleted={this.clearCompleted}/>
                </div>
            </div>
        )
    }

}
