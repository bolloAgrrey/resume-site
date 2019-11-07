import React from 'react';
import {MDBRow,MDBCol} from 'mdbreact';
var about = ()=>{
    return(
        <React.Fragment>
            <h1 className="h1">About </h1>
            <h4 className="title">
                <span className="lnr lnr-laptop-phone"></span> 3 years / <span className="lnr lnr-location"></span> Nomad / <span className="lnr lnr-tag"></span> Freelancer
            </h4>
            <article>
               <p>
               Am a full-stack web developer currently engaged with freelance software development. I love to take new challenges and push
               my skills beyond my cuurent abilities.
               </p>
            </article>
            <hr style={{backgroundColor:"lightgrey"}}/>
            <h3 className="h3" style={{color:"#fff"}}>services</h3>
            <section>
                <MDBRow>
                    <MDBCol md="6">
                        <h2><span className="lnr lnr-phone title"></span></h2>
                        <p>Consultation and training</p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h2><span className="lnr lnr-rocket title"></span></h2>
                        <p>Search engine optimazation</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6">
                        <h2><span className="fa fa-database title"></span></h2>
                        <p>Database design,ssl certificate installation and configuration</p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h2><span className="fa fa-code title"></span></h2>
                        <p>Web and mobile app development, Api intergration and data analytics</p>
                    </MDBCol>
                </MDBRow>
            </section>
            <hr style={{backgroundColor:"lightgrey"}}/>
            <h3 className="h3" style={{color:"#fff"}}>clients</h3>
        </React.Fragment>
    );
}
export default about;