import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Error from '../Shared/Error';
import { useHistory } from "react-router-dom";
import { MyContext } from '../Shared/MyProvider';

export default function WMLogin(props) {
    const [showError, setShowError] = useState(false);
    const history = useHistory();
    const context = useContext(MyContext)

    function authenticate() {
        fetch(
            'https://localhost:44322/api/WindowMonitorCustomerDetails/login',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Username: context.email,
                    Password: context.password
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                if (response.isAuthenticated) {
                    context.setId(response.id);
                    context.setName(response.name);
                    context.setPhoneNumber(response.phoneNumber);
                    context.setToggleValue(response.toggle);
                    props.setAuthenticated(true);
                    history.push("/WMHome");
                }
                else {
                    setShowError(true);
                }
            })
            .catch(
                //error => 
            );
    }

    return (
        <div className="container fluid">
            <h3>Login</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={context.handleEmailChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={context.handlePasswordChange} />
                </Form.Group>

                <Button onClick={authenticate}>
                    Submit
                 </Button>
            </Form>
            <br />
            <Error show={showError} setShow={setShowError} title="Oh snap! You got an error" message="Incorrect username and / or password. Please try again." />
        </div>
    )
}