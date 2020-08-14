import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export default function Error(props) {
    if (props.show) {
        return (
            <div className="container">
                <Alert variant="danger" onClose={() => props.setShow(false)} dismissible>
                    <Alert.Heading>{props.title}</Alert.Heading>
                    <p>
                        {props.message}
                    </p>
                </Alert>
            </div>
        );
    }

    return (
        <div></div>
    )
}