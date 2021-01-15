import React, {Component} from 'react';
import './toDo.css'

const ToDoInput = ({onKeyPress}) => {

    return(
        <div>
            <input
                type='text'
                placeholder='What needs to be done?'
                className='todo-input'
                onKeyPress={onKeyPress}
                onClick={onKeyPress}
            />
        </div>
    )
}


export default ToDoInput;