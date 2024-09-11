import React from 'react';

const Input = ({type="text", onChange, placeholder={placeholder}, value}) => {
    return (
        <input type="text" onChange={onChange} placeholder={placeholder} value={value}/>
    );
};

export default Input;