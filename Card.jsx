import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return(
        <>
     
               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
  <img  src={props.imgsrc} className="card-img-top" alt=".."/>
  <div className="card-body">
    <h5 className="card-title Card title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere
    </NavLink>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  
       </div>
 </div>
</div>
 </>

    );
};

export default Card;