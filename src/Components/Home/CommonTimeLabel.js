import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Popup } from 'semantic-ui-react'
import Alert from 'react-bootstrap/Alert';


export default function CommonTimeLabel(props) {
    return (
        <div className="container fluid">
            <h1>
                <Popup 
                    content={
                        <Alert 
                            variant="primary">
                            Common time for leaving the room with the window open
                        </Alert>} 
                    trigger={
                        <Badge 
                            className="float-right" 
                            variant="primary">Common time : {props.res != null ? props.res.split('.')[0] : "N/A"}
                        </Badge>} 
                />
                <br />
            </h1>
        </div>
    )
}