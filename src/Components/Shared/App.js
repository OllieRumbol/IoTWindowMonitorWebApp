import React, { useState } from "react";
import '../../Styling/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import WMLogin from '../Login/WMLogin';
import WMHome from '../Home/WMHome';
import MyProvider from '../Shared/MyProvider';
import Button from 'react-bootstrap/Button';
import WMSignUp from '../SignUp/WMSignUp'

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <MyProvider>
      <Router>
        <div className="container-fluid">
          <Jumbotron fluid>
            <Container>
              <h1>Window Monitor Web App</h1>
              <p>
                This react web application allows users to interact with my Window Monitor API which is hosted in Azure.
              </p>
              <div>
                <Link to="/">
                  <Button className="m-2" variant="primary">Login</Button>
                </Link>                
                <Link to="/signup">
                  <Button className="m-2" variant="primary">Sign up</Button>
                </Link>
              </div>
            </Container>
          </Jumbotron>
        </div>
        <hr className="my-4"></hr>
        <main>
          <Switch>
            <Route path="/" exact component={() => <WMLogin setAuthenticated={setAuthenticated} />} />
            {
              authenticated &&
              <Route exact path="/WMHome" component={WMHome} />
            }
            <Route path="/signup" exact component={() => <WMSignUp />} />
          </Switch>
        </main>
      </Router>
    </MyProvider>
  );
}