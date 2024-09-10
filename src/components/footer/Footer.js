import React from 'react';
import Title from "../title/Title";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={classes.btn}>
            <Title title={"Footer"}/>
        </div>
    );
};

export default Footer;