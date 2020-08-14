import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {MyContext} from '../Shared/MyProvider';

export default function UserDetails() {
    const context = useContext(MyContext);

    return (
        <div className="container fluid">
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={context.name} onChange={context.handleNameChange} />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Enter number for SMS alerts" value={context.phoneNumber} onChange={context.handlePhoneNumberChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter an email address" value={context.email} onChange={context.handleEmailChange} />
                </Form.Group>

                <Button variant="primary" onClick={context.updateUserDetails}>
                    Update
                </Button>
            </Form>
        </div>
    )
}