import React from 'react';
import Button from "../button/Button";
import classes from "./todo.module.scss";

const Todo = ({todo, handleDone, handleDelete}) => {
    return (
        <li className={`${classes.li} ${todo.completed ? classes.completed : ''}`}>
            <div className={`${classes.info} ${todo.completed ? classes.line : ''}`}>
                <p>id: {todo.id }</p>
                <p>title: {todo.title}</p>
                <p>compl: {todo.completed ? 'true' : 'false'}</p>
            </div>
            <div className={`${classes.btns} ${todo.completed ? classes.line : ''}`}>
                <Button name={'Edit'} color={'primary'}/>
                <Button name={'Done'} color={'default'} action={() => handleDone(todo.id)}/>
                <Button name={'Delete'} color={'error'} action={() => handleDelete(todo.id)}/>
            </div>
        </li>
    );
};

export default Todo;
