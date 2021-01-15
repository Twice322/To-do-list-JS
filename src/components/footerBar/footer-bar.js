import React, {Component} from 'react';
import './footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, filterChange, clearCompleted} = this.props
        const unCompleted = data.data.filter(item => !item.completed)
        const completed = data.data.filter(item => item.completed)
        console.log(completed)
        const clearButton = completed.length > 0 ?
            <button className='footer-right-item' onClick={() => clearCompleted(data.data)}>Clear completed</button>: ''
        if (data.data.length > 0) {
            return(
                <footer className='footer'>
                    <span className='footer-left-item'>{unCompleted.length} items left</span>
                    <ul className='filters'>
                        <li className='footer-button' onClick={() => filterChange('all')}>All</li>
                        <li className='footer-button' onClick={() => filterChange('active')}>Active</li>
                        <li className='footer-button' onClick={() => filterChange('completed')}>Completed</li>
                    </ul>
                    {clearButton}
                </footer>
            )
        }
        else {
            return ''
        }
    }
}


