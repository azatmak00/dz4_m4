import React, {useState} from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Modal from "../components/modal/Modal";
import classes from "./MainPage.module.css";
import User from "../components/user/User";
import List from "../components/list/List";
import TodoList from "../components/todoList/TodoList";
import Count from "../components/count/Count";
import todo from "../components/todo/Todo";

const MainPage = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [showList, setShowList] = useState(false)
    const [todoList, setTodoList] = useState(
    [
        { id: 1,
            title: 'coding',
            completed: false },
        { id: 2,
            title: 'eat',
            completed: false },
        { id: 3,
            title: 'sleep',
            completed: false },
    ]
    )
    const handleShow = () => {
        // console.log(inputValue)
        setShow(prevState => !prevState)
    }
    const handleShow2 = () => {
        setShow2(prevState => !prevState)
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleAdd = () => {
        setTodoList(prev => [
            ...prev,
            { id: todoList.length + 1, title: inputValue, completed: false }
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
        setTodoList(prev => prev.filter(todo => todo.id !== id));
    }


    // const tasks = [
    //     { id: 1,
    //         title: 'coding',
    //         completed: false },
    //     { id: 2,
    //         title: 'eat',
    //         completed: false },
    //     { id: 3,
    //         title: 'sleep',
    //         completed: false },
    // ];

    // const handleShow = () => {
    //     setShowList(prevState => !prevState);
    // };


    return (
        <>
            {/*<div>*/}
            {/*    <Button handleShow={handleShow} children={showList ? "Close" : "Open"} />*/}
            {/*    {showList && <List tasks={tasks} />}*/}
            {/*</div>*/}
            {/*<h1>{inputValue}</h1>*/}
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                ></Modal>
            }
            {/*{*/}
            {/*    show2 && <Modal handleShow={handleShow2}>*/}
            {/*        <User name={'Azat'} age={20} email={'azat04@gmail.com'}/>*/}
            {/*    </Modal>*/}
            {/*}*/}
            <Button name={"Open"} color={'primary'} action={handleShow}/>
            {/*<button onClick={handleShow}>Open</button>*/}
            {/*<button onClick={handleShow2}>Open2</button>*/}
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}/>

            {/*<Header/>*/}
            {/*<h1>hello</h1>*/}
            {/*<Button name={"add"} color={"primary"}/>*/}
            {/*<Button name={"delete"} color={"default"}/>*/}
            {/*<Button name={"save"} color={"error"}/>*/}
            {/*<Input placeholder={'name'} color={'name'}/>*/}
            {/*<Input placeholder={'surname'} color={'surname'}/>*/}
            {/*<Input placeholder={'email'} color={'email'}/>*/}
            {/*<Footer/>*/}
            {/*<Count/>*/}
        </>
    );
};

export default MainPage;