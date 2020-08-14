import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-bootstrap/Table';

export default function Table(props) {
    var results = props.res.map(function (obj, key) {
        return <tr key={key}>
            <td>{obj.id}</td>
            <td>{obj.room}</td>
            <td>{new Date(obj.dateOfEvent).toUTCString()}</td>
        </tr>;
    })
    
    return (
        <div className="container fluid">
            <ReactTable striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Room</th>
                        <th>Date of event</th>
                    </tr>
                </thead>
                <tbody>
                    {results}
                </tbody>
            </ReactTable>
        </div>
    );
}