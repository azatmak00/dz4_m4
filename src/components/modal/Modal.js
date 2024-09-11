import React from 'react'
import classes from "./Modal.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

const Modal = ({handleShow, children, handleAdd, handleChange, inputValue}) => {
    return (
        <div>

            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button name={"Close"} color={'primary'} action={handleShow}/>
                <Input placeholder="Enter text" onChange={handleChange} value={inputValue}/>
                <Button name={"Add"} color={'default'} action={handleAdd}/>
                -------------------------------------
                {children}
                -------------------------------------
            </div>


        </div>
    );
};

export default Modal;