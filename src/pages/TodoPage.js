import React, {useEffect, useState} from 'react';
import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import TodoList from "../components/todoList/TodoList";

const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleShow = () => setShow(prevState => !prevState);
    const handleChange = (event) => setInputValue(event.target.value);

    const handleAdd = () => {
        setTodoList(prev => [
            ...prev,
            {
                id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
                title: inputValue,
                completed: false
            }
        ]);
        setInputValue('');
    };

    const handleDone = (id) => {
        setTodoList(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const handleEdit = (currentTask) => {
        setTodoList(prev =>
            prev.map(todo =>
                todo.id === currentTask.id ? { ...todo, title: currentTask.title } : todo
            )
        );
    };

    // Очистка всех задач
    const handleClearAll = () => {
        setTodoList([]);
        localStorage.removeItem('tasks');
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTodoList(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div>
            <Button name={"Open"} color={'primary'} action={handleShow}/>
            <Button name={"Clear All"} color={'error'} action={handleClearAll}/>

            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />

            {show && (
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                />
            )}
        </div>
    );
};

export default TodoPage;
