import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";


const Service = (props) => {
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> our services </h1>

        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
           <div className="row">
           {
               Sdata.map((val, ind) => {
                   return<Card key={ind} imgsrc={val.imagsrc}
                   title={val.title}
                   />
               })
           }
          </div>
       </div>
 </div>
</div>
 </>

    );
};

export default Service;