import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img3.jpg"
import Common from "./Common";


const About = (props) => {
    return (
        <>
           <Common
            name="Grow your business "
            imgsrc={web}  visit="/contact" 
            btname="contact now"/>
           </>
    );
};

export default About;