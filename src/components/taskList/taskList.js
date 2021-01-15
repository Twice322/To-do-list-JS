import React, {Component} from 'react';
import './task-list.css'
import {ListGroup} from 'reactstrap';

export default class TaskList extends Component {



    render() {
        const {data, onClick, onChange} = this.props;
        if (data.length > 0) {
            const elements = data.map((item, event) => {
                const {text, id} = item;
                let btnClass = 'destroy';
                let textClass = 'task-heading'
                return (
                    <li
                        key={id} className='list-item'>
                            <button className={btnClass} onClick={() => onClick(id)}>{''}</button>
                            <input type='checkbox' className='checkbox' checked={item.completed} onChange={(event) => onChange(event, id)}/>
                            <label className={textClass}>{text}</label>
                    </li>
                )
            });
            return (
                <ListGroup>
                    {elements}
                </ListGroup>
            )
        }
        else {
            return('')
        }
    }
}