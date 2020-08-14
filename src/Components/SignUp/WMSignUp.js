import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from "react-router-dom";

export default function WMSignUp(){
    const [newName, setNewName] = useState("");
    const [newNameError, setNewNameError] = useState(false);
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [newPhoneNumberError, setNewPhoneNumberError] = useState(false);
    const [newEmail, setNewEmail] = useState("");
    const [newEmailError, setNewEmailError] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [newConfirmPassword, setNewConfirmPassword] = useState("");
    const [newConfirmPasswordError, setNewConfirmPasswordError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setNewNameError(!newName.match("^[a-zA-Z ]+$") && newName !== "" ? true : false)
      }, [newName]);

    useEffect(() => {
        setNewPhoneNumberError(!newPhoneNumber.match("^[0-9]+$") && newPhoneNumber !== "" ? true : false)
    }, [newPhoneNumber]);

    useEffect(() => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setNewEmailError(!newEmail.match(re) && newEmail !== "" ? true : false)
    }, [newEmail]);

    useEffect(() => {
        setNewPasswordError(newPassword.length <6 && newPassword !== "" ? true : false)
    }, [newPassword]);

    useEffect(() => {
        setNewConfirmPasswordError(newConfirmPassword !== "" && newConfirmPassword !== newPassword? true : false)
    }, [newConfirmPassword, newPassword]);

    function handleNewNameChange(e){
        setNewName(e.target.value);
    }

    function handleNewPhoneNumber(e){
        setNewPhoneNumber(e.target.value);
    }

    function handleNewEmail(e){
        setNewEmail(e.target.value);
    }

    function handleNewPassword(e){
        setNewPassword(e.target.value);
    }

    function handleNewConfirmPassword(e){
        setNewConfirmPassword(e.target.value)
    }

    function validate(){

    }

    function submit(){
        console.log("DONE");
        validate();
        fetch('https://localhost:44322/api/WindowMonitorCustomerDetails',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                    phoneNumber: newPhoneNumber,
                    password: newPassword
                })
            }
        )
            .then(response => {
                history.push("/");
            })
            .catch(
                error => console.log(error)
            );
    }
    
    return(
        <div className="container">
            <h2>Sign Up</h2>

            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={newName} onChange={handleNewNameChange} />
                    {newNameError ? <div><br/><Alert variant="danger">Invalid name</Alert></div> : null}                    
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter number for SMS alerts" value={newPhoneNumber} onChange={handleNewPhoneNumber} />
                    {newPhoneNumberError ? <div><br/><Alert variant="danger">Invalid phone number</Alert></div>: null}
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter an email address" value={newEmail} onChange={handleNewEmail} />
                    {newEmailError ? <div><br/><Alert variant="danger">Invalid email</Alert></div> : null}
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={newPassword} onChange={handleNewPassword} />
                    {newPasswordError ? <div><br/><Alert variant="danger">Invalid password, passwords must be longer than 6 characters</Alert></div> : null}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="Password" placeholder="Confirm password" value={newConfirmPassword} onChange={handleNewConfirmPassword} />
                    {newConfirmPasswordError ? <div><br/><Alert variant="danger">Invalid password, passwords must be longer than 6 characters</Alert></div> : null}
                </Form.Group>

                <Button variant="primary" onClick={submit}>
                    Update
                </Button>
            </Form>
        </div>
    );
}