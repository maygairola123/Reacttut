import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img2.jpg"
import Common from "./Common";


const Home = (props) => {
    return (
        <>
    <Common
     name="Grow your business "
     imgsrc={web}  visit="/service" 
     btname=" "/> 
        </>
    );
};

export default Home;