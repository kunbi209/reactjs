import React from 'react';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {

};

function ListPage(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep',
        },
        {
            id: 3,
            title: 'Code'
        }
    ]
    return (
        <div>
            <h3>Todo List 123</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default ListPage;