import React from 'react';
import { MDBProgress,MDBBtn, MDBRow,MDBCol, MDBIcon } from 'mdbreact';
var Skills = ()=>{
    return(
        <React.Fragment>            
                         
                <p> 3 years expirience as a web Developer while in designing/developing UI, 
                    testing, debugging and deploying web applications.
                    Proven ability in optimizing web functionality that improve data retrieval and workflow efficiencies. 
                </p>
            <hr style={{backgroundColor:"lightgrey"}}/>
            <h1 className="h1">Skills</h1>
             <h4 className="title"><span className="fab fa-java"></span> Java / <span className="fab fa-php"></span> PHP / <span className="fab fa-js"></span> Javascript / <span className="fab fa-css3-alt"></span> CSS3</h4>
            <MDBRow style={{width:"100%",marginBottom:"10px"}}>
                <MDBCol md="12">
                    web development<MDBProgress  height="5px" material value={80}></MDBProgress>
                </MDBCol>               
            </MDBRow>
            <MDBRow style={{width:"100%",marginBottom:"10px"}}>
                <MDBCol md="12">
                    databases<MDBProgress height="5px" material value={70}></MDBProgress>
                </MDBCol>               
            </MDBRow>
            <MDBRow style={{width:"100%",marginBottom:"10px"}}>
                <MDBCol md="12">
                    ui/ux design<MDBProgress height="5px" material value={72}></MDBProgress>
                </MDBCol>               
            </MDBRow>
            <MDBRow style={{width:"100%",marginBottom:"10px"}}>
                <MDBCol md="12">
                    mobile development<MDBProgress height="5px" material value={65}></MDBProgress>
                </MDBCol>               
            </MDBRow>
            <MDBRow style={{width:"100%"}}>
                <MDBCol md="12">
                    api intergration<MDBProgress height="5px" material value={90}></MDBProgress>
                </MDBCol>               
            </MDBRow>
            <hr style={{backgroundColor:"lightgrey",marginTop:"30px"}}/>
            <h3 className="h3" style={{color:"#fff"}}><MDBIcon far icon="lightbulb"/> Frameworks</h3>
            <MDBRow>
                <MDBCol md="3">
                    <MDBBtn className="frmwks">
                        <MDBIcon className="fa-4x ico" fab icon="node-js" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol md="3">
                    <MDBBtn className="frmwks">
                        <MDBIcon className="fa-4x ico" fab icon="react" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol md="3">
                    <MDBBtn className="frmwks">
                        <MDBIcon className="fa-4x ico" fab icon="vuejs" />
                    </MDBBtn>
                </MDBCol>
                <MDBCol md="3">
                    <MDBBtn className="frmwks">
                        <MDBIcon className="fa-4x ico" fab icon="laravel" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <hr style={{backgroundColor:"lightgrey",marginTop:"30px"}}/>
            <MDBRow>
                <MDBCol>
                    <h3 className="h3" style={{color:"#fff"}}><span className="lnr lnr-graduation-hat title"></span> school</h3>
                    <article>
                         <span className="title">2012 to date</span>
                        <h4 style={{color:"#fff"}}>Stackoverflow</h4>
                         <h5 style={{color:"lightslategray"}}>online</h5>
                        <p>Learning and researching on general software development</p>

                        <span className="title">2016 to date</span>
                        <h4 style={{color:"#fff"}}>KCA university</h4>
                        <h5 style={{color:"lightslategray"}}>Nairobi</h5>
                        <p>Bachelor of Science in InformationTechnology with
                             a concentration in Software Engineering</p>
                        
                        <span className="title">2005 2008</span>
                        <h4 style={{color:"#fff"}}>St. Ignatius MBHS</h4>
                        <h5  style={{color:"lightslategray"}}>Kakamega</h5>
                        <p>Kenya Certificate of Secondary Examination(KCSE)</p>
                        
                    </article>
                </MDBCol>
                <MDBCol>
                    <h3 className="h3" style={{color:"#fff"}}><span className="title lnr lnr-briefcase"></span> expirience</h3>
                    <article>
                         <span className="title">2012-2013</span>
                        <h4 style={{color:"#fff"}}>Stanely Chemist</h4>
                         <h5 style={{color:"lightslategray"}}>Githurai 45</h5>
                        <p>Designed an development a phamarcy management system for the dispensing chemist</p>

                        <span className="title">2016 2017</span>
                        <h4 style={{color:"#fff"}}>Vision Technologies</h4>
                        <h5 style={{color:"lightslategray"}}>Westlands</h5>
                        <p>Part of the development team, where we designed and developed custom ERP systems</p>
                        
                        <span className="title">2018-2019</span>
                        <h4 style={{color:"#fff"}}>Freelancing</h4>
                        <h5  style={{color:"lightslategray"}}>Nomad</h5>
                        <p>Have been developing mobile and web app for clients at a 
                            fee though sometimes I do probono projects.
                        </p>
                        
                    </article>
                </MDBCol>
            </MDBRow>            

        </React.Fragment>
    );
}
export default Skills;