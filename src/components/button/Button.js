import React from 'react';
import classes from "./button.module.css"

const Button = ({name, color, action}) => {
    // console.log(color)
    // const a = {
    //     primary: 5,
    //     default: 10,
    //     error: 15
    // }
    // console.log(a[color])
    return (
        <button className={`${classes.btn} ${classes[color]}`} onClick={action}>{name}</button>
    );
};

export default Button;
