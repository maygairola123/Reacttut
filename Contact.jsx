import React from "react";


const Contact = () => {
    return(
        <>
       <div className="my-5">
           <h1 className="text-center"> Contact us </h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                <form>
                <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="Name" class="form-control" id="exampleInputName" aria-describedby="Namehelp" placeholder="Enter Name"/>
    <small id="eNamehelp" class="form-text text-muted"></small>
  </div>
                <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputMobile Number">Mobile Number</label>
    <input type="Mobile number" class="form-control" id="exampleInputMobile number" placeholder="Phone number"/>
  </div>
  <div class="form-group mb-3">
  <label for="form-Message-label"  for="exampleMessage">Leave a Message</label>
    <input type="Message" class="form-control" id="exampleInputMessage" aria-describedby="Messagehelp" placeholder="Enter Message"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                    </form>   
               </div>
           </div>
       </div>
        </>
    );
};

export default Contact;