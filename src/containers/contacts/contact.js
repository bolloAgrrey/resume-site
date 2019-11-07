import React from 'react';
import { MDBRow,MDBCol, MDBBtn, MDBInput} from 'mdbreact';
var contact = ()=>{
    return(
        <React.Fragment>
            <h1 className="h1">contact me</h1>
            <MDBRow>
                <MDBCol>
                    <span className="lnr lnr-location title"></span>&nbsp;Kasarani, Nairobi
                </MDBCol>
                <MDBCol>
                    <span className="lnr lnr-phone title"></span>&nbsp;+254-720010267
                </MDBCol>
                <MDBCol>
                    <span className="lnr lnr-envelope title"></span>&nbsp;bolloo18@gmail.com
                </MDBCol>
            </MDBRow>
            <hr style={{backgroundColor:"lightgrey",marginTop:"30px"}}/>

            <h3 className="h3">send message</h3>
            <MDBRow>
                <MDBCol>
                   
                <form>
              
              <div className="grey-text">
                <MDBInput
                  className="input"           
                  group
                  type="text"
                  validate
                  hint="Your Name"
                  error="required"
                  success="right"
                  name="name"
                  
                />
                <MDBInput                 
                 hint="johndoe@gmail.com"
                  group
                  className="input"
                  type="email"
                  validate
                  error="invalid input"
                  success="right"
                  name="email"
                  
                />
                <MDBInput style={{height:"20.0vh",resize:"none",overflow: "scroll",scrollbarColor: "#00a971",scrollbarWidth: "thin"}}
                  type="textarea"
                  className="input"
                  rows="2"
                  hint="Message"                
                  name="message"
                  />
              </div>
              <div className="text-left py-4 mt-3">
                <MDBBtn className="btn _btn" color="cyan" >
                  Send Message
                </MDBBtn>
              </div>
            </form>
                    
                </MDBCol>
            </MDBRow>
        </React.Fragment>
    );
}
export default contact;