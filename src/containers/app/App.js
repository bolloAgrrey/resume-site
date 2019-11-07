import React,{Component} from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@icon/linearicons/linearicons.css';
import 'bootstrap-css-only/css/bootstrap.css';
import '../../assets/css/App.css';

import About from '../about/about';
import Contact from '../contacts/contact';
import Blog from '../blog/blog';
import Projects from '../projects/projects';
import ServiceOffered from '../skills/skills';


import { BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody, MDBIcon,MDBBtn} from "mdbreact";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="App">
            <Router>
                <MDBCardBody>
                  <MDBRow>
                    
                    <MDBCol md="5">
                      <MDBRow className="parent-wrapper">
                        <MDBCol md="1" className="menu-col">
                         <Link className="hamburger btn" to="#">
                           <span className="bollo">Bollo</span>
                         </Link>
                          
                            <ul className="side-nav">
                              <li>
                                <Link to="/" className="btn link"  title="About">                                                              
                                    <span className="lnr lnr-user fa-lg"></span>                                                                
                                </Link>
                              </li>                         
                              <li>
                                <Link to="/skills" className="btn link" title="Skills">
                                 <span className="fa fa-cogs fa-lg"></span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects" className="btn link" title="Projects">
                                 <span className="lnr lnr-briefcase fa-lg"></span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/blog" className="btn link" title="Blog">
                                  <span className="fas fa-edit fa-lg"></span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/contact" className="btn link" title="Contacts">
                                  <span className="lnr lnr-phone-handset"></span>
                                </Link>
                              </li>
                            </ul>
                          
                        </MDBCol>
                        <MDBCol sm="0" md="11">
                          <MDBCard className="pic-overlay">
                            <MDBCardBody>
                               <div className="wrapper">
                                 <h1 className="Name">Bollo Omar</h1>
                                 <h4 className="title">Web Developer</h4>
                                 
                                 <MDBContainer>
                                   <ul className="ul-ico">
                                        <li>
                                          <MDBBtn size="lg" tag="a" floating social="fb">
                                              <MDBIcon fab icon="facebook-f" />
                                          </MDBBtn>
                                        </li>
                                        <li>
                                          <MDBBtn size="lg" tag="a" floating social="tw">
                                              <MDBIcon fab icon="twitter" />
                                          </MDBBtn>
                                        </li>
                                        <li>
                                          <MDBBtn size="lg" tag="a" floating social="gplus">
                                              <MDBIcon fab icon="google-plus-g" />
                                          </MDBBtn>
                                        </li>
                                        <li>
                                          <MDBBtn size="lg" tag="a" floating social="li">
                                              <MDBIcon fab icon="linkedin-in" />
                                          </MDBBtn>
                                        </li>
                                   </ul>
                                 </MDBContainer>
                               </div>
                            </MDBCardBody>
                          </MDBCard>                            
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="7" className="content">                    
                     <Switch>
                        <Route path="/" exact component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/skills" component={ServiceOffered} />
                     </Switch>
                     
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
                </Router>
            </MDBCard>            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
