import React, {useState} from 'react';
import Button from "../button/Button";
import classes from "./todo.module.scss";

const Todo = ({todo, handleDone, handleDelete, handleEdit, setCurrentEdit, isEdit}) => {
    const [editValue, setEditValue] = useState(todo.title)

    return (
        <>
            <li className={`${classes.li} ${todo.completed ? classes.completed : ''}`}>
                <div className={`${classes.info} ${todo.completed ? classes.line : ''}`}>
                    <p>id: {todo.id }</p>
                    <p>title: {todo.title}</p>
                </div>
                <div className={`${classes.btns} ${todo.completed ? classes.line : ''}`}>
                    <Button name={'Edit'} color={'primary'} action={() => setCurrentEdit(todo.id)}/>
                    <Button name={'Done'} color={'default'} action={() => handleDone(todo.id)}/>
                    <Button name={'Delete'} color={'error'} action={() => handleDelete(todo.id)}/>
                </div>
            </li>
            {
                isEdit && <div className={classes.edit}>
                    <input
                        value={editValue}
                        type="text"
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <Button name={'Save'} color={'primary'} action={() => {
                        handleEdit({
                            ...todo,
                            title: editValue
                        });
                        setCurrentEdit(null);
                    }}/>
                    <Button name={'Cancel'} color={'default'} action={() => setCurrentEdit(null)}/>
                </div>
            }
        </>
    );
};

export default Todo;
